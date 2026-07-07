"use client";
import { I18nProvider } from "../i18n";
import { LightboxProvider } from "../lightbox";

export default function Providers({ children }) {
  return (
    <I18nProvider>
      <LightboxProvider>{children}</LightboxProvider>
    </I18nProvider>
  );
}
