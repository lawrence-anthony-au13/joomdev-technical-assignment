// pages/_app.tsx
import "../styles/globals.css"; // existing global styles
import "@n8n/chat/style.css";
import "../styles/n8n-chat-custom.css";
import type { AppProps } from "next/app";
import "../lib/i18n";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
