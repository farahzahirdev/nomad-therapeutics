const GHL_IFRAME_RESIZER_ATTR = "data-iframe-resizer-initialized";
export const GHL_EMBED_READY_EVENT = "ghl-embed-ready";

type IFrameResizeFn = (
  options: Record<string, unknown>,
  target?: HTMLIFrameElement,
) => void;

type GhlWindow = Window & { iFrameResize?: IFrameResizeFn };

export type GhlFormConfig = {
  id: string;
  name: string;
  height: string;
  iframeId: string;
  minHeight: string;
  borderRadius?: string;
};

export type GhlCalendarConfig = {
  id: string;
  title: string;
  iframeId: string;
  minHeight: string;
};

export function isGhlEmbedReady(): boolean {
  return typeof (window as GhlWindow).iFrameResize === "function";
}

export function notifyGhlEmbedReady(): void {
  window.dispatchEvent(new Event(GHL_EMBED_READY_EVENT));
}

function applyIframeStyles(
  iframe: HTMLIFrameElement,
  minHeight: string,
  borderRadius = "20px",
) {
  Object.assign(iframe.style, {
    width: "100%",
    border: "none",
    borderRadius,
    minHeight,
    height: minHeight,
    display: "block",
    opacity: "1",
    visibility: "visible",
    pointerEvents: "auto",
  });
}

export function createGhlFormIframe(config: GhlFormConfig): HTMLIFrameElement {
  const iframe = document.createElement("iframe");
  iframe.src = `https://go.4tms.com/widget/form/${config.id}`;
  iframe.id = config.iframeId;
  iframe.title = config.name;
  iframe.setAttribute("data-layout", '{"id":"INLINE"}');
  iframe.setAttribute("data-trigger-type", "alwaysShow");
  iframe.setAttribute("data-trigger-value", "");
  iframe.setAttribute("data-activation-type", "alwaysActivated");
  iframe.setAttribute("data-activation-value", "");
  iframe.setAttribute("data-deactivation-type", "neverDeactivate");
  iframe.setAttribute("data-deactivation-value", "");
  iframe.setAttribute("data-form-name", config.name);
  iframe.setAttribute("data-height", config.height);
  iframe.setAttribute("data-layout-iframe-id", config.iframeId);
  iframe.setAttribute("data-form-id", config.id);
  iframe.setAttribute("data-cookie-consent", "true");
  iframe.setAttribute("data-cookie-consent-provider", "auto");
  applyIframeStyles(iframe, config.minHeight, config.borderRadius ?? "20px");
  return iframe;
}

export function createGhlCalendarIframe(config: GhlCalendarConfig): HTMLIFrameElement {
  const iframe = document.createElement("iframe");
  iframe.src = `https://go.4tms.com/widget/booking/${config.id}`;
  iframe.id = config.iframeId;
  iframe.title = config.title;
  iframe.allow = "payment";
  iframe.scrolling = "no";
  applyIframeStyles(iframe, config.minHeight, "0");
  Object.assign(iframe.style, { overflow: "hidden", height: config.minHeight });
  return iframe;
}

function ensureVisibleFallback(iframe: HTMLIFrameElement): void {
  const fallback = iframe.style.minHeight || "720px";
  if (!iframe.style.height || iframe.clientHeight < 120) {
    iframe.style.height = fallback;
    iframe.style.minHeight = fallback;
  }
  iframe.style.opacity = "1";
  iframe.style.visibility = "visible";
  iframe.style.display = "block";
  iframe.style.pointerEvents = "auto";
}

/** Re-run GHL form_embed.js setup for a dynamically inserted iframe. */
export function initGhlIframe(iframe: HTMLIFrameElement, force = false): void {
  ensureVisibleFallback(iframe);

  const contentWindow = iframe.contentWindow;
  if (contentWindow) {
    try {
      window.dispatchEvent(
        new MessageEvent("message", {
          data: ["iframeLoaded"],
          source: contentWindow,
        }),
      );
    } catch {
      // ignore
    }
  }

  const iFrameResize = (window as GhlWindow).iFrameResize;
  if (typeof iFrameResize !== "function") return;
  if (!force && iframe.getAttribute(GHL_IFRAME_RESIZER_ATTR) === "true") return;

  iframe.setAttribute(GHL_IFRAME_RESIZER_ATTR, "false");
  try {
    iFrameResize(
      {
        log: false,
        checkOrigin: false,
        enablePublicMethods: true,
        scrolling: true,
        heightCalculationMethod: "lowestElement",
        autoResize: true,
        sizeWidth: false,
        sizeHeight: true,
        resizedCallback: (data: { iframe?: HTMLIFrameElement; height?: number }) => {
          const el = data?.iframe;
          const height = data?.height;
          if (el && typeof height === "number" && height >= 200) {
            el.style.height = `${height + 2}px`;
            el.style.minHeight = "0";
            el.style.opacity = "1";
            el.style.visibility = "visible";
            el.style.pointerEvents = "auto";
            el.style.display = "block";
            el.setAttribute(GHL_IFRAME_RESIZER_ATTR, "true");

            const host = el.parentElement;
            if (host) {
              host.style.minHeight = "0";
              host.style.height = "auto";
            }
          }
        },
      },
      iframe,
    );
  } catch {
    ensureVisibleFallback(iframe);
  }
}

export function waitForGhlEmbed(iframe: HTMLIFrameElement, attempt = 0): void {
  if (isGhlEmbedReady()) {
    initGhlIframe(iframe, attempt > 0);
    return;
  }

  if (attempt >= 60) {
    ensureVisibleFallback(iframe);
    return;
  }

  window.setTimeout(() => waitForGhlEmbed(iframe, attempt + 1), 100);
}

/** Bind load + script-ready listeners so embeds init on first paint, not only after refresh. */
export function bindGhlIframe(iframe: HTMLIFrameElement): () => void {
  const run = () => waitForGhlEmbed(iframe);

  iframe.addEventListener("load", run);
  window.addEventListener(GHL_EMBED_READY_EVENT, run);
  run();

  const timers = [300, 800, 1600, 2800].map((ms) => window.setTimeout(run, ms));

  return () => {
    iframe.removeEventListener("load", run);
    window.removeEventListener(GHL_EMBED_READY_EVENT, run);
    timers.forEach((id) => window.clearTimeout(id));
  };
}

export function mountGhlForm(host: HTMLElement, config: GhlFormConfig): HTMLIFrameElement {
  host.replaceChildren();
  const iframe = createGhlFormIframe(config);
  host.appendChild(iframe);
  return iframe;
}

export function mountGhlCalendar(host: HTMLElement, config: GhlCalendarConfig): HTMLIFrameElement {
  host.replaceChildren();
  const iframe = createGhlCalendarIframe(config);
  host.appendChild(iframe);
  return iframe;
}

export function unmountGhlEmbed(host: HTMLElement | null): void {
  host?.replaceChildren();
}

export function mountAndBindGhlForm(host: HTMLElement, config: GhlFormConfig): () => void {
  const iframe = mountGhlForm(host, config);
  return bindGhlIframe(iframe);
}

export function mountAndBindGhlCalendar(
  host: HTMLElement,
  config: GhlCalendarConfig,
): () => void {
  const iframe = mountGhlCalendar(host, config);
  return bindGhlIframe(iframe);
}
