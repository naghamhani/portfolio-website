"use client";
import { useI18n } from "../i18n.jsx";
import { timeline } from "../data.js";
import { asset } from "../asset.js";
import { useLightbox } from "../lightbox.jsx";
import SectionHead from "./SectionHead.jsx";
import Reveal from "./Reveal.jsx";

export default function Timeline() {
  const { t, lang } = useI18n();
  const { open } = useLightbox();
  const [pre, em] = t.experience.title;
  const group = timeline.map((e) => ({ src: e.img, cap: e.h }));
  return (
    <section id="experience" className="mx-auto max-w-container px-5 py-20 sm:px-8 lg:px-[72px] lg:py-32">
      <SectionHead index={t.experience.index} kicker={t.experience.kicker} meta="active since 2021" />
      <Reveal as="h2" className="font-display text-[clamp(30px,5vw,62px)] font-bold leading-[1.02] tracking-[-.025em]">{pre}<em className="italic text-terracotta">{em}</em></Reveal>
      <Reveal as="p" delay={0.08} className="mt-4 max-w-[60ch] text-[clamp(15px,1.3vw,18px)] text-ink-2">{t.experience.intro}</Reveal>
      <ol className="relative mt-12 lg:mt-16">
        <span className="absolute bottom-1.5 top-1.5 start-0 w-0.5 bg-ink/15" aria-hidden="true" />
        {timeline.map((e, i) => (
          <Reveal as="li" key={i} className="relative ps-9 pb-9 lg:ps-20 lg:pb-12">
            <span className={`absolute top-1.5 h-3.5 w-3.5 rounded-full border-2 ${e.accent ? "border-terracotta bg-terracotta shadow-[0_0_0_5px_rgba(199,41,94,.16)]" : "border-terracotta bg-paper"}`} style={{ insetInlineStart: "-6px" }} aria-hidden="true" />
            <div className="mb-3 font-mono text-[13px] text-terracotta">{e.date[lang]}</div>
            <div className="grid items-center gap-5 rounded-2xl border border-ink/10 bg-paper-2 p-6 transition duration-300 hover:bg-white hover:shadow-[0_26px_48px_-34px_rgba(42,23,38,.4)] md:grid-cols-[1fr_230px] md:gap-9 md:p-8">
              <div>
                {e.tag && <span className="mb-3 inline-block rounded-full bg-terracotta px-3 py-1 font-mono text-[11px] uppercase tracking-[.12em] text-white">{e.tag[lang]}</span>}
                <h3 className="mb-2.5 font-display text-[clamp(20px,2.2vw,27px)] font-medium tracking-[-.01em]">{e.h[lang]}</h3>
                <p className="text-[15px] text-ink-2">{e.p[lang]}</p>
              </div>
              <button onClick={() => open(group, i)} className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-[0_14px_30px_-22px_rgba(42,23,38,.5)]">
                <img src={asset(e.img)} alt={e.h[lang]} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </button>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}