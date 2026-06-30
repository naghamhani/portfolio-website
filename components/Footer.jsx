"use client";
import { useEffect, useState } from "react";
import { useI18n } from "../i18n.jsx";

export default function Footer() {
  const { t } = useI18n();
  const [clock, setClock] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(
        d.toLocaleTimeString("en-GB") +
          " · " +
          d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
          " · Amman"
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <footer className="bg-ink-bg2 text-paper/70">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-x-8 gap-y-2.5 border-t border-paper/10 px-5 py-8 text-[13px] sm:px-8 lg:px-[72px]">
        <button
          onClick={() => window.dispatchEvent(new Event("cmdk:open"))}
          className="flex items-center gap-2 font-mono text-[12px] text-paper/60 transition hover:text-ochre"
        >
          <kbd className="rounded border border-paper/20 px-1.5 py-0.5">⌘K</kbd>
          {t.dir === "rtl" ? "للتنقّل" : "to navigate"}
        </button>
        <span className="order-3 w-full text-center sm:order-none sm:w-auto">© {new Date().getFullYear()} · {t.footer.credit}</span>
        <span className="font-mono text-[12px] tabular-nums text-ochre" aria-live="off">{clock}</span>
      </div>
    </footer>
  );
}
