"use client";

import Script from "next/script";
import { GHL_EMBED_READY_EVENT } from "@/lib/ghlEmbed";

/** Loads 4TMS form_embed.js once and notifies embeds so they init on first paint. */
export default function GhlEmbedScript() {
  return (
    <Script
      src="https://go.4tms.com/js/form_embed.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.dispatchEvent(new Event(GHL_EMBED_READY_EVENT));
      }}
    />
  );
}
