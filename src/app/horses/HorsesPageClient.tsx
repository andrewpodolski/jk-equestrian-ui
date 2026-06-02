'use client';

import { useMemo, useState } from 'react';
import { FadeUp } from '@/components/ui/FadeUp';
import { LocaleLink } from '@/components/ui/LocaleLink';
import type { Messages } from '@/i18n/types';

type FilterKey =
  | 'all'
  | 'beginner'
  | 'children'
  | 'intermediate'
  | 'advanced'
  | 'dressage'
  | 'jumping';

const horseKeys = [
  'apollo',
  'luna',
  'storm',
  'bella',
  'maestro',
  'daisy',
  'thunder',
  'cleo',
] as const;

function horseMatchesFilter(
  horse: { discipline: string; level: string },
  filter: FilterKey,
  f: Messages['filter'],
  allLevelsLabel: string,
  versatileLabel: string,
): boolean {
  if (filter === 'all') return true;
  const { discipline, level } = horse;
  switch (filter) {
    case 'beginner':
      return (
        level === f.beginner ||
        discipline === f.beginner ||
        discipline === f.children
      );
    case 'children':
      return discipline === f.children;
    case 'intermediate':
      return level === f.intermediate || level === allLevelsLabel;
    case 'advanced':
      return level === f.advanced || level === allLevelsLabel;
    case 'dressage':
      return discipline === f.dressage || discipline === versatileLabel;
    case 'jumping':
      return discipline === f.jumping || discipline === versatileLabel;
    default:
      return true;
  }
}

interface Props {
  messages: Messages;
}

export function HorsesPageClient({ messages: m }: Props) {
  const horses = useMemo(
    () =>
      horseKeys.map((key) => ({
        key,
        ...m.horses[key],
      })),
    [m],
  );

  const allLevelsLabel = m.horses.luna.level;
  const versatileLabel = m.horses.cleo.discipline;

  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filteredHorses = useMemo(
    () =>
      horses.filter((horse) =>
        horseMatchesFilter(
          horse,
          activeFilter,
          m.filter,
          allLevelsLabel,
          versatileLabel,
        ),
      ),
    [activeFilter, allLevelsLabel, horses, m.filter, versatileLabel],
  );

  return (
    <>
      <section className="relative pt-48 pb-24 bg-blue-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 hero-glow"
          style={{ "--hero-glow-x": "70%", "--hero-glow-y": "50%" } as React.CSSProperties}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
              {m.herd.eyebrow}
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-semibold text-cream leading-[1.07] mb-6">
              {m.herd.title}
              <br />
              <em className="text-gold not-italic">{m.herd.titleEmphasis}</em>
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="bg-blue-dark border-t border-gold/10 sticky top-[72px] z-50">
        <div className="max-w-6xl mx-auto px-10 lg:px-16 py-4 flex items-center gap-3 overflow-x-auto scrollbar-none">
          <span className="shrink-0 text-[0.62rem] tracking-[0.18em] uppercase text-cream/40">
            {m.filter.label}
          </span>
          {(
            [
              ['all', m.filter.all],
              ['beginner', m.filter.beginner],
              ['children', m.filter.children],
              ['intermediate', m.filter.intermediate],
              ['advanced', m.filter.advanced],
              ['dressage', m.filter.dressage],
              ['jumping', m.filter.jumping],
            ] as const satisfies readonly (readonly [FilterKey, string])[]
          ).map(([key, label]) => {
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(key)}
                className={[
                  'shrink-0 text-[0.68rem] tracking-[0.12em] uppercase px-4 py-1.5 rounded-[2px] border transition-colors duration-200 cursor-pointer bg-transparent',
                  isActive
                    ? 'border-gold text-gold'
                    : 'border-gold/20 text-cream/60 hover:border-gold hover:text-gold',
                ].join(' ')}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="bg-offwhite py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {filteredHorses.map((horse) => (
              <FadeUp key={horse.key} threshold={0.05}>
                <article className="group bg-surface-card rounded-[2px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-400">
                  <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-blue-dark to-blue-mid overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-serif text-[5rem] text-cream/15 select-none">
                        {horse.name[0]}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-dark/80 to-transparent">
                      <span className="text-[0.6rem] tracking-[0.14em] uppercase text-gold/90">
                        {horse.discipline} · {horse.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-[1.3rem] font-semibold text-text-dark mb-1">
                      {horse.name}
                    </h2>
                    <p className="text-[0.78rem] text-text-muted mb-3">{horse.breed}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gold" />
                      <p className="text-[0.75rem] text-text-mid italic font-light">
                        {horse.temperament}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-24 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto px-10 lg:px-16 text-center">
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-semibold text-text-dark leading-[1.12] mb-6">
              {m.cta.horses.title}
              <br />
              <em className="text-gold not-italic">{m.cta.horses.titleEmphasis}</em>
            </h2>
            <p className="text-[0.95rem] text-text-mid leading-[1.85] font-light mb-12 max-w-xl mx-auto">
              {m.cta.horses.body}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LocaleLink
                href="/contact"
                className="inline-flex text-[0.78rem] tracking-[0.12em] uppercase font-medium text-blue-dark bg-gold hover:bg-gold-light px-10 py-4 rounded-[2px] transition-colors duration-200 no-underline"
              >
                {m.cta.horses.primary}
              </LocaleLink>
              <LocaleLink
                href="/facilities"
                className="inline-flex text-[0.78rem] tracking-[0.12em] uppercase font-medium text-text-dark border border-text-dark/20 hover:border-gold hover:text-gold px-10 py-4 rounded-[2px] transition-colors duration-200 no-underline"
              >
                {m.cta.horses.secondary}
              </LocaleLink>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
