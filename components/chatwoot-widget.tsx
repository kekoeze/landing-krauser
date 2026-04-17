"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSettings?: Record<string, unknown>;
    chatwootSDK?: { run: (opts: { websiteToken: string; baseUrl: string }) => void };
  }
}

const BASE_URL = "https://chatbot.krauser.com.ar";
const SDK_ID = "chatwoot-sdk-krauser";

export default function ChatwootWidget() {
  useEffect(() => {
    if (typeof window === "undefined" || document.getElementById(SDK_ID)) return;

    window.chatwootSettings = {
      position: "right",
      type: "standard",
      launcherTitle: "",
    };

    const g = document.createElement("script");
    g.id = SDK_ID;
    g.src = `${BASE_URL}/packs/js/sdk.js`;
    g.async = true;
    g.onload = () => {
      window.chatwootSDK?.run({
        websiteToken: "aHQF3f6jFTq5wzvvPrggeCqA",
        baseUrl: BASE_URL,
      });
    };

    document.body.appendChild(g);
  }, []);

  return null;
}
