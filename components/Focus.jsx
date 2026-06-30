"use client";
import { useI18n } from "../i18n.jsx";
import { TECH } from "../data.js";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";
export default function Focus() {
  const { t } = useI18n();
  return (
    <section id="focus" className="mx-auto max-w-container px-5 py-20 sm:px-8 lg:px-[72px] lg:py-32">
      <SectionHead index={t.focus.index} kicker={t.focus.kicker} meta="3 pillars · 18 tools" />
      <Reveal as="h2" className="mb-10 max-w-[18ch] font-display text-[clamp(30px,5vw,62px)] font-bold leading-[1.02] tracking-[-.025em] lg:mb-14">{t.focus.title}</Reveal>
      <Reveal className="mb-10 overflow-x-auto rounded-2xl bg-ink-bg p-6 font-mono text-[13px] leading-[1.9] text-paper/85 shadow-[0_30px_60px_-40px_rgba(28,14,26,.9)] lg:mb-14 lg:p-8 lg:text-[14px]">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
          <span className="h-2.5 w-2.5 rounded-full bg-ochre" />
          <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
          <span className="ms-3 text-paper/40">nagham@9xai — current stack</span>
        </div>
        <div className="text-paper/50">$ stack ai <span className="text-terracotta">--status</span></div>
        <div>&nbsp;&nbsp;<span className="text-ochre">llm</span> &nbsp;&nbsp;&nbsp;fine-tuning · rag · prompt-engineering &nbsp;<span className="text-terracotta">[active]</span></div>
        <div>&nbsp;&nbsp;<span className="text-ochre">data</span> &nbsp;&nbsp;python · pandas · numpy · sql &nbsp;<span className="text-terracotta">[expert]</span></div>
        <div>&nbsp;&nbsp;<span className="text-ochre">auto</span> &nbsp;&nbsp;uipath · python-rpa · pdf-extraction &nbsp;<span className="text-terracotta">[shipped]</span></div>
        <div>&nbsp;&nbsp;<span className="text-ochre">viz</span> &nbsp;&nbsp;&nbsp;power bi · tableau · ggplot2 &nbsp;<span className="text-terracotta">[ready]</span></div>
        <div className="text-paper/50">$ <span className="ms-0.5 inline-block w-2.5 animate-pulse bg-paper/70">&nbsp;</span></div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {t.focus.pillars.map((p, i) => (
          <Reveal key={i} delay={i * 0.1} className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-paper-2 p-8 transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_30px_50px_-34px_rgba(42,23,38,.45)]">
            <span className="absolute inset-x-0 top-0 h-[3px] w-0 bg-terracotta transition-all duration-500 group-hover:w-full" />
            <span className="font-mono text-[12px] text-terracotta">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="my-3 font-display text-[23px] font-medium tracking-[-.01em]">{p.h}</h3>
            <p className="mb-3.5 text-[15px] text-ink-2">{p.p}</p>
            <p className="font-mono text-[11.5px] text-ink-3">{p.s}</p>
          </Reveal>
        ))}
      </div>
      <div className="marquee mt-12 border-y border-ink/15 py-5 lg:mt-14">
        <div className="marquee-track" style={{ animationDuration: "38s" }}>
          {[...TECH, ...TECH].map((tech, i) => (<span key={i} className="px-7 font-display text-[clamp(22px,2.6vw,34px)] italic text-ink/60">{tech}</span>))}
        </div>
      </div>
    </section>
  );
}