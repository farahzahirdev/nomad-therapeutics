"use client";

import { useEffect } from "react";
import { CallButton, QualifyButton } from "@/components/CTAButtons";
import {
  BOOKING_SECTION_ID,
  CALENDAR_IFRAME_ID,
  CALENDAR_SRC,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";
import { bindGhlIframe } from "@/lib/ghlEmbed";

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

export default function BookingCalendar() {
  useEffect(() => {
    const iframe = document.getElementById(CALENDAR_IFRAME_ID) as HTMLIFrameElement | null;
    if (!iframe) return;

    const unbind = bindGhlIframe(iframe);

    const resizeIframe = (height: number) => {
      iframe.style.height = `${height}px`;
    };

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("4tms.com")) return;
      const height = parseEmbedHeight(event.data);
      if (height) resizeIframe(height);
    };

    window.addEventListener("message", handleMessage);
    return () => {
      unbind();
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <section id={BOOKING_SECTION_ID} className="section-padding scroll-mt-28">
      <div className="container-main">
        <div className="embed-layout">
          <div className="space-y-5 text-center lg:sticky lg:top-28 lg:text-left">
            <div className="nm-section-copy">
              <p className="section-label justify-center lg:justify-start">Free consultation</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
                Book your Free Consultation
              </h2>
              <p className="text-lead mx-auto mt-4 max-w-xl lg:mx-0">
                Pick a time that works for you. No obligation, just a conversation about whether
                at-home IM ketamine is the right next step.
              </p>
              <p className="mt-3 text-sm text-muted">
                Prefer to talk first? Call or text{" "}
                <a href={PHONE_HREF} className="font-semibold text-forest hover:text-moss">
                  {PHONE_NUMBER}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <CallButton variant="outline" />
              <QualifyButton variant="outline" />
            </div>
          </div>

          <div className="embed-panel min-w-0">
            <iframe
              src={CALENDAR_SRC}
              allow="payment"
              style={{
                width: "100%",
                height: "720px",
                minHeight: "720px",
                border: "none",
                overflow: "hidden",
                display: "block",
                background: "transparent",
              }}
              scrolling="no"
              id={CALENDAR_IFRAME_ID}
              title="Book a free consultation with Nomad Therapeutics"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
