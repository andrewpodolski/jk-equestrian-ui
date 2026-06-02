import { LocaleLink } from "@/components/ui/LocaleLink";
import { FadeUp } from "@/components/ui/FadeUp";
import type { Locale } from "@/i18n/config";
import { getNestedMessages } from "@/i18n/server";

async function HomePageContent({ locale }: { locale: Locale }) {
  const m = await getNestedMessages(locale);

  const horses = [
    m.horses.apollo,
    m.horses.luna,
    m.horses.storm,
    m.horses.bella,
    m.horses.maestro,
    m.horses.daisy,
    m.horses.thunder,
    m.horses.cleo,
  ];

  const trainers = [m.team.trainers.robert, m.team.trainers.matylda];
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[100svh] overflow-hidden md:min-h-screen md:flex md:items-end md:pb-24 lg:pb-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-20 hero-glow-home" />
        {/* Scroll indicator — desktop */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex lg:bottom-8">
          <span className="text-[0.6rem] tracking-[0.25em] uppercase text-cream/40">
            {m.hero.scrollHint}
          </span>
          <div className="w-px h-12 bg-gold/40 animate-scroll-pulse origin-top" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-10 pt-28 pb-24 md:pt-0 md:pb-0 lg:px-16">
          <FadeUp>
            <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
              {m.hero.eyebrow}
            </p>
          </FadeUp>
          <FadeUp threshold={0.05}>
            <h1 className="font-serif text-[3rem] leading-[1.05] font-semibold text-cream mb-8 max-w-[11em] md:max-w-3xl md:text-[clamp(3rem,8vw,6.5rem)]">
              {m.hero.title}
              <em className="text-gold not-italic">{m.hero.titleEmphasis}</em>
              {m.hero.titleSuffix}
            </h1>
          </FadeUp>
          <FadeUp threshold={0.05}>
            <p className="text-[1rem] text-cream/60 leading-[1.8] max-w-xl mb-12 font-light">
              {m.hero.subtitle}
            </p>
          </FadeUp>
          <FadeUp threshold={0.05}>
            <div className="flex flex-wrap gap-4">
              <LocaleLink
                href="/horses"
                className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.12em] uppercase font-medium text-blue-dark bg-gold hover:bg-gold-light px-8 py-4 rounded-[2px] transition-colors duration-200 no-underline"
              >
                {m.hero.ctaPrimary}
              </LocaleLink>
              <LocaleLink
                href="/facilities"
                className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.12em] uppercase font-medium text-cream border border-cream/30 hover:border-cream/60 px-8 py-4 rounded-[2px] transition-colors duration-200 no-underline"
              >
                {m.hero.ctaSecondary}
              </LocaleLink>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-blue-dark border-t border-gold/10">
        <div className="max-w-6xl mx-auto px-10 lg:px-16 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {(
            [
              [m.stats.horsesCount, m.stats.horses],
              [m.stats.experienceCount, m.stats.experience],
              [m.stats.trainersCount, m.stats.trainers],
              [m.stats.arenasCount, m.stats.arenas],
            ] as [string, string][]
          ).map(([count, label]) => (
            <div key={label} className="text-center">
              <div className="font-serif text-[2.8rem] font-semibold text-gold leading-none mb-1">
                {count}
              </div>
              <div className="text-[0.7rem] tracking-[0.16em] uppercase text-cream/45">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section className="bg-offwhite py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeUp>
            <div>
              <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
                {m.about.eyebrow}
              </p>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-text-dark leading-[1.12] mb-8">
                {m.about.title}
                <br />
                <em className="text-gold not-italic">
                  {m.about.titleEmphasis}
                </em>
              </h2>
              <p className="text-[0.95rem] text-text-mid leading-[1.85] mb-5 font-light">
                {m.about.p1}
              </p>
              <p className="text-[0.95rem] text-text-mid leading-[1.85] mb-10 font-light">
                {m.about.p2}
              </p>
              <LocaleLink
                href="/team"
                className="inline-flex items-center gap-3 text-[0.78rem] tracking-[0.12em] uppercase font-medium text-blue-dark border-b border-blue-dark/30 pb-1 no-underline hover:border-gold hover:text-gold transition-colors duration-200"
              >
                {m.about.cta}
              </LocaleLink>
            </div>
          </FadeUp>

          <FadeUp threshold={0.1}>
            <div className="relative">
              {/* Placeholder for image */}
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-blue-mid to-blue-dark rounded-[2px] flex items-end p-8">
                <div className="bg-gold text-blue-dark px-6 py-4 text-center">
                  <div className="font-serif text-[3rem] font-semibold leading-none">
                    {m.about.badgeValue}
                  </div>
                  <div className="text-[0.65rem] tracking-[0.16em] uppercase mt-1">
                    {m.about.badge}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-gold/30 rounded-[2px] -z-10" />
            </div>
          </FadeUp>
        </div>
      </section>
      <section className="bg-cream-dark py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
              <div>
                <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
                  {m.herd.eyebrow}
                </p>
                <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-text-dark leading-[1.12]">
                  {m.herd.title}
                  <br />
                  <em className="text-gold not-italic">
                    {m.herd.titleEmphasis}
                  </em>
                </h2>
              </div>
              <LocaleLink
                href="/horses"
                className="shrink-0 text-[0.75rem] tracking-[0.12em] uppercase font-medium text-blue-dark border-b border-blue-dark/30 pb-1 no-underline hover:border-gold hover:text-gold transition-colors duration-200"
              >
                {m.herd.cta}
              </LocaleLink>
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {horses.map((horse) => (
              <FadeUp key={horse.name} threshold={0.05}>
                <div className="group bg-offwhite rounded-[2px] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="w-full aspect-[3/4] bg-gradient-to-br from-blue-dark/80 to-blue-mid/60 flex items-center justify-center">
                    <span className="font-serif text-[3rem] text-cream/30">
                      {horse.name[0]}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-serif text-[1.1rem] font-semibold text-text-dark">
                        {horse.name}
                      </h3>
                      <span className="text-[0.6rem] tracking-[0.1em] uppercase text-gold bg-gold/10 px-2 py-0.5 rounded-[1px]">
                        {horse.discipline}
                      </span>
                    </div>
                    <p className="text-[0.75rem] text-text-muted mb-2">
                      {horse.breed}
                    </p>
                    <p className="text-[0.72rem] text-text-muted/70 italic">
                      {horse.temperament}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-offwhite py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <div className="text-center mb-16">
              <p className="eyebrow-line inline-flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
                {m.team.eyebrow}
              </p>
              <h2 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-semibold text-text-dark leading-[1.12]">
                {m.team.title}{" "}
                <em className="text-gold not-italic">{m.team.titleEmphasis}</em>
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {trainers.map((trainer) => (
              <FadeUp key={trainer.name} threshold={0.05}>
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-mid to-blue-dark mx-auto mb-5 flex items-center justify-center">
                    <span className="font-serif text-[2rem] text-cream/60">
                      {trainer.name[0]}
                    </span>
                  </div>
                  <h3 className="font-serif text-[1.15rem] font-semibold text-text-dark mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-[0.75rem] text-gold mb-3">
                    {trainer.title}
                  </p>
                  <p className="text-[0.85rem] text-text-mid leading-[1.7] font-light">
                    {trainer.bio}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <div className="text-center">
              <LocaleLink
                href="/team"
                className="inline-flex text-[0.78rem] tracking-[0.12em] uppercase font-medium text-blue-dark border-b border-blue-dark/30 pb-1 no-underline hover:border-gold hover:text-gold transition-colors duration-200"
              >
                {m.team.cta}
              </LocaleLink>
            </div>
          </FadeUp>
        </div>
      </section>
      <section className="bg-blue-dark py-24 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto px-10 lg:px-16 text-center">
            <div className="font-serif text-[4rem] text-gold/30 leading-none mb-4">
              &ldquo;
            </div>
            <blockquote className="font-serif text-[clamp(1.4rem,3vw,2rem)] font-light italic text-cream/85 leading-[1.55] mb-8">
              {m.quote.text}
            </blockquote>
            <cite className="text-[0.72rem] tracking-[0.18em] uppercase text-cream/35 not-italic">
              {m.quote.author}
            </cite>
          </div>
        </FadeUp>
      </section>
      <section className="bg-offwhite py-28 lg:py-36">
        <FadeUp>
          <div className="max-w-3xl mx-auto px-10 lg:px-16 text-center">
            <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-semibold text-text-dark leading-[1.12] mb-6">
              {m.cta.home.title}
              <br />
              <em className="text-gold not-italic">
                {m.cta.home.titleEmphasis}
              </em>
            </h2>
            <p className="text-[0.95rem] text-text-mid leading-[1.85] font-light mb-12 max-w-xl mx-auto">
              {m.cta.home.body}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LocaleLink
                href="/contact"
                className="inline-flex text-[0.78rem] tracking-[0.12em] uppercase font-medium text-blue-dark bg-gold hover:bg-gold-light px-10 py-4 rounded-[2px] transition-colors duration-200 no-underline"
              >
                {m.cta.home.primary}
              </LocaleLink>
              <a
                href={`tel:${m.cta.home.secondary.replace(/\s/g, "")}`}
                className="inline-flex text-[0.78rem] tracking-[0.12em] uppercase font-medium text-text-dark border border-text-dark/20 hover:border-gold hover:text-gold px-10 py-4 rounded-[2px] transition-colors duration-200 no-underline"
              >
                {m.cta.home.secondary}
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}

export default function HomePage() {
  return HomePageContent({ locale: "pl" });
}

export function EnHomePage() {
  return HomePageContent({ locale: "en" });
}
