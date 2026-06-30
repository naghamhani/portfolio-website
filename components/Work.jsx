"use client";
import { useState } from "react";
import { useI18n } from "../i18n.jsx";
import { projects } from "../data.js";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";

export default function Work() {
  const { t, lang } = useI18n();
  const [pre, em] = t.work.title;
  const [active, setActive] = useState(-1); // none open by default; -1 = collapsed

  return (
    <section id="work" className="bg-ink-bg text-paper">
      <div className="mx-auto max-w-container px-5 py-20 sm:px-8 lg:px-[72px] lg:py-32">
        <SectionHead index={t.work.index} kicker={t.work.kicker} meta={`${projects.length} projects`} light />
        <Reveal as="h2" className="mb-12 font-display text-[clamp(30px,5vw,62px)] font-bold leading-[1.02] tracking-[-.025em] text-paper lg:mb-16">
          {pre}<em className="italic text-terracotta">{em}</em>
        </Reveal>

        {/* Inline accordion: each row toggles a panel beneath it */}
        <ul className="border-t border-paper/12">
          {projects.map((proj, i) => {
            const open = active === i;
            const isAward = /place|🏆|🥈|🥉/i.test(proj.cat.en);
            return (
              <li key={i} className="border-b border-paper/12">
                <button
                  onClick={() => setActive(open ? -1 : i)}
                  aria-expanded={open}
                  className={`group flex w-full items-center gap-5 py-4 text-start transition ${
                    open ? "text-paper" : "text-paper/55 hover:text-paper/85"
                  }`}
                >
                  <span className={`font-mono text-[13px] ${open ? "text-terracotta" : "text-paper/40"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-[clamp(17px,2vw,24px)] font-bold leading-tight tracking-[-.01em]">
                    {proj.h[lang]}
                  </span>
                  <span className="hidden font-mono text-[11px] text-ochre sm:block">{proj.year}</span>
                  <span className={`transition ${open ? "rotate-90 text-terracotta" : "text-paper/30 group-hover:translate-x-1"}`} aria-hidden="true">→</span>
                </button>

                {/* Expandable panel */}
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-brand"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className={`grid items-stretch gap-8 pb-10 pt-2 transition-opacity duration-500 lg:grid-cols-[1fr_1.05fr] lg:gap-14 ${open ? "opacity-100" : "opacity-0"}`}>
                      {/* Left: detail */}
                      <div className="flex flex-col justify-center">
                        <p className="mb-4 font-mono text-[12.5px] uppercase tracking-[.12em] text-ochre">
                          {proj.cat[lang]} · {proj.year}
                        </p>
                        <h3 className="mb-5 font-display text-[clamp(26px,3.8vw,46px)] font-bold leading-[1.05] tracking-[-.02em] text-paper">
                          {proj.h[lang]}
                        </h3>
                        <p className="mb-6 max-w-[48ch] text-[clamp(15px,1.25vw,17.5px)] text-paper/70">{proj.p[lang]}</p>
                        <p className="mb-7 font-mono text-[12px] text-paper/45">{proj.s}</p>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                          <a href="#contact" className="inline-flex w-fit items-center gap-2 font-mono text-[14px] font-medium text-terracotta transition hover:gap-3.5">
                            {lang === "ar" ? "لنتحدّث عن هذا" : "Ask me about it"} <span aria-hidden="true">→</span>
                          </a>
                          {proj.github && (
                            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border border-paper/25 px-4 py-2 font-mono text-[13px] font-medium text-paper/80 transition hover:border-paper hover:text-paper">
                              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
                              {lang === "ar" ? "عرض على GitHub" : "View on GitHub"}
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Right: mock terminal card */}
                      <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-paper/15 bg-gradient-to-br from-ink-bg2 to-ink-bg shadow-[0_50px_90px_-50px_rgba(0,0,0,.8)]">
                        <div className="flex items-center gap-2 border-b border-paper/10 px-4 py-3">
                          <span className="h-3 w-3 rounded-full bg-terracotta" />
                          <span className="h-3 w-3 rounded-full bg-ochre" />
                          <span className="h-3 w-3 rounded-full bg-paper/30" />
                          <span className="ms-2 font-mono text-[11px] text-paper/40">~/projects/{String(i + 1).padStart(2, "0")}</span>
                        </div>
                        <div className="flex flex-col justify-between p-7 lg:p-9">
                          <div>
                            <span className={`mb-5 inline-block rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[.1em] ${isAward ? "bg-terracotta text-white" : "border border-paper/20 text-paper/70"}`}>
                              {proj.cat[lang]}
                            </span>
                            <div className="font-display text-[clamp(40px,7vw,86px)] font-semibold leading-[.95] tracking-[-.03em] text-paper/90">
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            <div className="mt-3 font-pixel text-[12px] uppercase text-ochre">{proj.s.split(" · ")[0]}</div>
                          </div>
                          <div className="mt-8 flex flex-wrap gap-2">
                            {proj.s.split(" · ").map((chip, ci) => (
                              <span key={ci} className="rounded-full border border-paper/20 px-3 py-1 font-mono text-[11px] text-paper/60">{chip}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
