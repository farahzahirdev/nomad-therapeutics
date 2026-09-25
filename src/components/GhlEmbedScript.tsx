"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GHL_EMBED_READY_EVENT, isGhlEmbedReady, notifyGhlEmbedReady } from "@/lib/ghlEmbed";

/** Loads 4TMS form_embed.js once and notifies form + calendar embeds. */
export default function GhlEmbedScript() {
  useEffect(() => {
    if (isGhlEmbedReady()) {
      notifyGhlEmbedReady();
    }
  }, []);

  return (
    <Script
      id="ghl-form-embed"
      src="https://go.4tms.com/js/form_embed.js"
      strategy="afterInteractive"
      onLoad={() => {
        notifyGhlEmbedReady();
        // Second pulse — helps when calendar + form both mount around the same time
        window.setTimeout(() => notifyGhlEmbedReady(), 250);
        window.setTimeout(() => notifyGhlEmbedReady(), 900);
      }}
      onReady={() => {
        if (isGhlEmbedReady()) notifyGhlEmbedReady();
      }}
    />
  );
}

// Re-export for any listeners that import the event name from here historically
export { GHL_EMBED_READY_EVENT };
