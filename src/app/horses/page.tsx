import Link from 'next/link';
import { FadeUp } from '@/components/ui/FadeUp';
import messages from '@/i18n/messages/pl.json';

const m = messages;

const horses = [
  { key: 'apollo',  ...m.horses.apollo },
  { key: 'luna',    ...m.horses.luna },
  { key: 'storm',   ...m.horses.storm },
  { key: 'bella',   ...m.horses.bella },
  { key: 'maestro', ...m.horses.maestro },
  { key: 'daisy',   ...m.horses.daisy },
  { key: 'thunder', ...m.horses.thunder },
  { key: 'cleo',    ...m.horses.cleo },
];

export default function HorsesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-48 pb-24 bg-blue-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 70% 50%, #C9A84C 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
              {m.herd.eyebrow}
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-semibold text-cream leading-[1.07] mb-6">
              {m.herd.title}<br /><em className="text-gold not-italic">{m.herd.titleEmphasis}</em>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <section className="bg-blue-dark border-t border-gold/10 sticky top-[72px] z-50">
        <div className="max-w-6xl mx-auto px-10 lg:px-16 py-4 flex items-center gap-3 overflow-x-auto scrollbar-none">
          <span className="shrink-0 text-[0.62rem] tracking-[0.18em] uppercase text-cream/40">{m.filter.label}</span>
          {([
            ['all',          m.filter.all],
            ['beginner',     m.filter.beginner],
            ['children',     m.filter.children],
            ['intermediate', m.filter.intermediate],
            ['advanced',     m.filter.advanced],
            ['dressage',     m.filter.dressage],
            ['jumping',      m.filter.jumping],
          ] as [string, string][]).map(([key, label]) => (
            <button
              key={key}
              className="shrink-0 text-[0.68rem] tracking-[0.12em] uppercase px-4 py-1.5 rounded-[2px] border border-gold/20 text-cream/60 hover:border-gold hover:text-gold transition-colors duration-200 cursor-pointer bg-transparent first-of-type:border-gold first-of-type:text-gold"
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Horse Grid ── */}
      <section className="bg-offwhite py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {horses.map((horse) => (
              <FadeUp key={horse.key} threshold={0.05}>
                <article className="group bg-white rounded-[2px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-400">
                  <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-blue-dark to-blue-mid overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-[5rem] text-cream/15 select-none">{horse.name[0]}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-dark/80 to-transparent">
                      <span className="text-[0.6rem] tracking-[0.14em] uppercase text-gold/90">{horse.discipline} · {horse.level}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-[1.3rem] font-semibold text-text-dark mb-1">{horse.name}</h2>
                    <p className="text-[0.78rem] text-text-muted mb-3">{horse.breed}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold" />
                      <p className="text-[0.75rem] text-text-mid italic font-light">{horse.temperament}</p>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto px-10 lg:px-16 text-center">
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-semibold text-text-dark leading-[1.12] mb-6">
              {m.cta.horses.title}<br /><em className="text-gold not-italic">{m.cta.horses.titleEmphasis}</em>
            </h2>
            <p className="text-[0.95rem] text-text-mid leading-[1.85] font-light mb-12 max-w-xl mx-auto">
              {m.cta.horses.body}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex text-[0.78rem] tracking-[0.12em] uppercase font-medium text-blue-dark bg-gold hover:bg-gold-light px-10 py-4 rounded-[2px] transition-colors duration-200 no-underline"
              >
                {m.cta.horses.primary}
              </Link>
              <Link
                href="/facilities"
                className="inline-flex text-[0.78rem] tracking-[0.12em] uppercase font-medium text-text-dark border border-text-dark/20 hover:border-gold hover:text-gold px-10 py-4 rounded-[2px] transition-colors duration-200 no-underline"
              >
                {m.cta.horses.secondary}
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
