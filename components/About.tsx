"use client";
import { useI18n } from "../i18n";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
export default function About() {
  const { t } = useI18n();
  const [pre, em] = t.about.title;
  return (
    <section id="about" className="mx-auto max-w-container px-5 py-20 sm:px-8 lg:px-[72px] lg:py-32">
      <SectionHead index={t.about.index} kicker={t.about.kicker} meta="Amman, Jordan · since 2021" />
      <div className="grid items-start gap-9 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal><h2 className="font-display text-[clamp(30px,4.6vw,56px)] font-bold leading-[1.02] tracking-[-.025em]">{pre}<em className="italic text-terracotta">{em}</em></h2></Reveal>
        <Reveal delay={0.1}>
          {t.about.p.map((para, i) => (<p key={i} className="mb-5 text-[clamp(15px,1.25vw,17.5px)] text-ink-2">{para}</p>))}
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {t.about.pills.map((p, i) => (<li key={i} className="rounded-full border border-ink/15 bg-paper-2 px-3.5 py-1.5 font-mono text-[12px] text-ink-2">{p}</li>))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}