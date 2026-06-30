"use client";
import { useI18n } from "../i18n.jsx";
import CountUp from "./CountUp.jsx";
export default function Stats() {
  const { t } = useI18n();
  return (
    <section className="bg-ink-bg text-paper" aria-label="By the numbers">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-7 px-5 py-12 sm:px-8 md:grid-cols-4 lg:px-[72px] lg:py-16">
        {t.stats.map((s, i) => (
          <div key={i} className="flex flex-col gap-2">
            <span className="font-display text-[clamp(38px,5vw,62px)] leading-none text-ochre"><CountUp value={s.n} /></span>
            <span className="max-w-[22ch] text-[13.5px] text-paper/65">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}