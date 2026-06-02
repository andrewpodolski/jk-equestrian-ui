import { LocaleLink } from "@/components/ui/LocaleLink";
import { FadeUp } from "@/components/ui/FadeUp";
import type { Locale } from "@/i18n/config";
import { getNestedMessages } from "@/i18n/server";

async function FacilitiesPageContent({ locale }: { locale: Locale }) {
  const messages = await getNestedMessages(locale);
  const m = messages.facilities;
  const cta = messages.cta.facilities;

  const mainFacilities = [
    { data: m.indoor, gradient: "from-blue-dark to-blue-mid" },
    { data: m.outdoor, gradient: "from-blue-deep to-blue-soft" },
    { data: m.stables, gradient: "from-blue-mid to-blue-bright" },
  ];

  const amenities = [
    m.amenities.lounge,
    m.amenities.paddocks,
    m.amenities.parking,
    m.amenities.solarium,
    m.amenities.vet,
    m.amenities.warmUp,
  ];

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-48 pb-24 bg-blue-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 hero-glow"
          style={{ "--hero-glow-x": "30%", "--hero-glow-y": "50%" } as React.CSSProperties}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
              {m.eyebrow}
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-semibold text-cream leading-[1.07] mb-6">
              {m.title}
              <br />
              <em className="text-gold not-italic">{m.titleEmphasis}</em>
            </h1>
            <p className="text-[0.95rem] text-cream/55 leading-[1.85] max-w-2xl font-light">
              {m.pageDesc}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Main facilities ── */}
      <section className="bg-offwhite py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-10 lg:px-16 flex flex-col gap-24">
          {mainFacilities.map(({ data, gradient }, i) => (
            <FadeUp key={data.name} threshold={0.08}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Image placeholder */}
                <div
                  className={`bg-gradient-to-br ${gradient} rounded-[2px] aspect-[4/3] flex items-end p-6 lg:[direction:ltr]`}
                >
                  <span className="text-[0.62rem] tracking-[0.18em] uppercase text-cream/40">
                    {data.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:[direction:ltr]">
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-gold mb-4">
                    {data.tag}
                  </p>
                  <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-semibold text-text-dark leading-[1.15] mb-5">
                    {data.name}
                  </h2>
                  <p className="text-[0.92rem] text-text-mid leading-[1.85] font-light mb-8">
                    {data.desc}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {data.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-start gap-3 text-[0.82rem] text-text-mid"
                      >
                        <span className="mt-[0.35rem] shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── Amenities ── */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <div className="mb-14">
              <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
                {m.amenities.eyebrow}
              </p>
              <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-semibold text-text-dark leading-[1.12]">
                {m.amenities.title}
                <br />
                <em className="text-gold not-italic">
                  {m.amenities.titleEmphasis}
                </em>
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item) => (
              <FadeUp key={item.name} threshold={0.05}>
                <div className="bg-offwhite p-8 rounded-[2px]">
                  <div className="w-10 h-px bg-gold mb-6" />
                  <h3 className="font-serif text-[1.1rem] font-semibold text-text-dark mb-3">
                    {item.name}
                  </h3>
                  <p className="text-[0.85rem] text-text-mid leading-[1.75] font-light">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-blue-dark py-24 lg:py-32">
        <FadeUp>
          <div className="max-w-3xl mx-auto px-10 lg:px-16 text-center">
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-semibold text-cream leading-[1.12] mb-6">
              {cta.title}
              <br />
              <em className="text-gold not-italic">{cta.titleEmphasis}</em>
            </h2>
            <p className="text-[0.95rem] text-cream/55 leading-[1.85] font-light mb-12 max-w-xl mx-auto">
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
                className="inline-flex text-[0.78rem] tracking-[0.12em] uppercase font-medium text-cream border border-cream/30 hover:border-cream/60 px-10 py-4 rounded-[2px] transition-colors duration-200 no-underline"
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

export default function FacilitiesPage() {
  return FacilitiesPageContent({ locale: 'pl' });
}

export function EnFacilitiesPage() {
  return FacilitiesPageContent({ locale: 'en' });
}
