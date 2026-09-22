"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  ADDRESS,
  FORM_ID,
  FORM_IFRAME_ID,
  FORM_SECTION_ID,
  HOURS,
  MAPS_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SERVICE_AREA,
} from "@/lib/constants";

function parseEmbedHeight(data: unknown): number | null {
  if (typeof data === "number" && data > 0) return data;

  if (typeof data === "string") {
    const match = data.match(/height[:=]\s*(\d+)/i);
    if (match) return Number(match[1]);
  }

  if (typeof data === "object" && data !== null) {
    const payload = data as Record<string, unknown>;
    if (typeof payload.height === "number" && payload.height > 0) return payload.height;
    if (typeof payload.frameHeight === "number" && payload.frameHeight > 0) {
      return payload.frameHeight;
    }
  }

  return null;
}

export default function InquiryForm() {
  useEffect(() => {
    const resizeIframe = (height: number) => {
      const iframe = document.getElementById(FORM_IFRAME_ID) as HTMLIFrameElement | null;
      if (iframe) iframe.style.height = `${height}px`;
    };

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("4tms.com")) return;
      const height = parseEmbedHeight(event.data);
      if (height) resizeIframe(height);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section id={FORM_SECTION_ID} className="section-padding scroll-mt-28 bg-mist-2/50">
      <div className="container-main">
        <div className="embed-layout">
          <div className="space-y-5 lg:sticky lg:top-28">
            <div className="nm-section-copy">
              <p className="section-label">Get started</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Find out if you qualify</h2>
              <p className="text-lead mx-auto mt-4 max-w-xl lg:mx-0">
                Complete the form and our Seattle team will reach out. No obligation, just a clear
                next step toward care that can finally help.
              </p>
              <p className="mt-3 text-sm font-medium text-mint-deep">
                Confidential. Takes about 2 minutes.
              </p>
            </div>

            <p className="text-center text-sm font-medium text-forest lg:text-left">
              Prefer to talk first? Call or text our team.
            </p>

            <ul className="contact-list mx-auto max-w-md lg:mx-0">
              <li>
                <a href={PHONE_HREF} className="contact-item group">
                  <span className="contact-icon">
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-mint-deep">
                      Phone
                    </span>
                    <span className="mt-0.5 block font-medium text-ink group-hover:text-moss">
                      {PHONE_NUMBER}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item group"
                >
                  <span className="contact-icon">
                    <PinIcon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-mint-deep">
                      Clinic
                    </span>
                    <span className="mt-0.5 block font-medium leading-relaxed text-ink group-hover:text-moss">
                      {ADDRESS}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <div className="contact-item">
                  <span className="contact-icon">
                    <ClockIcon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-mint-deep">
                      Hours
                    </span>
                    <span className="mt-0.5 block font-medium leading-relaxed text-ink">
                      {HOURS}
                    </span>
                  </span>
                </div>
              </li>
            </ul>

            <p className="text-center text-sm text-muted lg:text-left">{SERVICE_AREA}</p>
          </div>

          <div className="embed-panel min-w-0">
            <iframe
              src={`https://go.4tms.com/widget/form/${FORM_ID}`}
              style={{
                width: "100%",
                height: "2142px",
                border: "none",
                display: "block",
                background: "transparent",
                borderRadius: "20px",
              }}
              id={FORM_IFRAME_ID}
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="TMS: New Web Inquiry + Params"
              data-height="2142"
              data-layout-iframe-id={FORM_IFRAME_ID}
              data-form-id={FORM_ID}
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="TMS: New Web Inquiry + Params"
            />
          </div>
        </div>
      </div>
      <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.08 19.08 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.08 19.08 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
    </svg>
  );
}
