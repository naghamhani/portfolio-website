"use client";
import { I18nProvider } from "../i18n.jsx";
import { LightboxProvider } from "../lightbox.jsx";

export default function Providers({ children }) {
  return (
    <I18nProvider>
      <LightboxProvider>{children}</LightboxProvider>
    </I18nProvider>
  );
}
