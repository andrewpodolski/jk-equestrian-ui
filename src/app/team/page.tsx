import { LocaleLink } from "@/components/ui/LocaleLink";
import { FadeUp } from "@/components/ui/FadeUp";
import type { Locale } from "@/i18n/config";
import { getNestedMessages } from "@/i18n/server";

async function TeamPageContent({ locale }: { locale: Locale }) {
  const messages = await getNestedMessages(locale);
  const m = messages.team;
  const cta = messages.cta.team;

  const trainers = [m.trainers.anna, m.trainers.karolina];

  const stableTeam = [m.stableTeam.krzysztof, m.stableTeam.agnieszka];

  const values = [m.values.horse, m.values.learning, m.values.openToAll];
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-48 pb-24 bg-blue-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 60% 40%, #C9A84C 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
              {m.eyebrow}
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-semibold text-cream leading-[1.07] mb-6">
              {m.title}{" "}
              <em className="text-gold not-italic">{m.titleEmphasis}</em>
            </h1>
            <p className="text-[0.95rem] text-cream/55 leading-[1.85] max-w-2xl font-light">
              {m.subtitle}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Trainers grid ── */}
      <section className="bg-offwhite py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {trainers.map((trainer, i) => (
              <FadeUp key={trainer.name} threshold={0.05}>
                <article
                  className={`flex flex-col gap-5 ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-mid to-blue-dark flex items-center justify-center shrink-0">
                    <span className="font-serif text-[1.7rem] text-cream/60">
                      {trainer.name[0]}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-serif text-[1.2rem] font-semibold text-text-dark mb-1">
                      {trainer.name}
                    </h2>
                    <p className="text-[0.72rem] tracking-[0.1em] uppercase text-gold mb-4">
                      {trainer.title}
                    </p>
                    <p className="text-[0.88rem] text-text-mid leading-[1.8] font-light mb-5">
                      {trainer.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.62rem] tracking-[0.08em] uppercase text-gold border border-gold/30 px-3 py-1 rounded-[2px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stable team ── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <div className="mb-14">
              <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
                {m.stableTeam.eyebrow}
              </p>
              <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-semibold text-text-dark leading-[1.12]">
                {m.stableTeam.title}{" "}
                <em className="text-gold not-italic">
                  {m.stableTeam.titleEmphasis}
                </em>
              </h2>
              <p className="text-[0.92rem] text-text-mid leading-[1.85] font-light mt-5 max-w-2xl">
                {m.stableTeam.intro}
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stableTeam.map((member) => (
              <FadeUp key={member.name} threshold={0.05}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-dark to-blue-mid mx-auto mb-4 flex items-center justify-center">
                    <span className="font-serif text-[1.3rem] text-cream/50">
                      {member.name[0]}
                    </span>
                  </div>
                  <p className="font-serif text-[0.95rem] font-semibold text-text-dark">
                    {member.name}
                  </p>
                  <p className="text-[0.72rem] text-text-muted mt-1">
                    {member.role}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-blue-dark py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <div className="mb-14">
              <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
                {m.values.eyebrow}
              </p>
              <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-semibold text-cream leading-[1.12]">
                {m.values.title}{" "}
                <em className="text-gold not-italic">
                  {m.values.titleEmphasis}
                </em>
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
            {values.map((v) => (
              <FadeUp key={v.num} threshold={0.05}>
                <div className="bg-blue-dark p-10">
                  <div className="font-serif text-[3rem] font-semibold text-gold/20 leading-none mb-6">
                    {v.num}
                  </div>
                  <h3 className="font-serif text-[1.15rem] font-semibold text-cream mb-4">
                    {v.name}
                  </h3>
                  <p className="text-[0.87rem] text-cream/50 leading-[1.8] font-light">
                    {v.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-offwhite py-24 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto px-10 lg:px-16 text-center">
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-semibold text-text-dark leading-[1.12] mb-6">
              {cta.title}
              <br />
              <em className="text-gold not-italic">{cta.titleEmphasis}</em>
            </h2>
            <p className="text-[0.95rem] text-text-mid leading-[1.85] font-light mb-12 max-w-xl mx-auto">
              {cta.body}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LocaleLink
                href="/contact"
                className="inline-flex text-[0.78rem] tracking-[0.12em] uppercase font-medium text-blue-dark bg-gold hover:bg-gold-light px-10 py-4 rounded-[2px] transition-colors duration-200 no-underline"
              >
                {cta.primary}
              </LocaleLink>
              <LocaleLink
                href="/horses"
                className="inline-flex text-[0.78rem] tracking-[0.12em] uppercase font-medium text-text-dark border border-text-dark/20 hover:border-gold hover:text-gold px-10 py-4 rounded-[2px] transition-colors duration-200 no-underline"
              >
                {cta.secondary}
              </LocaleLink>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}

export default function TeamPage() {
  return TeamPageContent({ locale: 'pl' });
}

export function EnTeamPage() {
  return TeamPageContent({ locale: 'en' });
}
