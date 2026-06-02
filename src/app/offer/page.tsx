import { LocaleLink } from "@/components/ui/LocaleLink";
import { FadeUp } from "@/components/ui/FadeUp";
import type { Locale } from "@/i18n/config";
import { getNestedMessages } from "@/i18n/server";

type OfferData = {
  tag: string;
  name: string;
  desc: string;
  duration?: string;
  price?: string;
  note?: string;
  items: string[];
};

async function OfertaPageContent({ locale }: { locale: Locale }) {
  const messages = await getNestedMessages(locale);
  const m = messages.oferta;
  const cta = messages.cta.oferta;

  const offers: { data: OfferData; gradient: string }[] = [
    { data: m.firstSteps, gradient: "from-blue-dark to-blue-mid" },
    { data: m.pzjInstructor, gradient: "from-blue-deep to-blue-soft" },
    { data: m.sport, gradient: "from-blue-mid to-blue-bright" },
  ];

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-48 pb-24 bg-blue-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10 hero-glow" />
        <div className="relative z-10 max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
              {m.eyebrow}
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-semibold text-cream leading-[1.07] mb-6">
              {m.title}
              {m.titleEmphasis ? (
                <>
                  <br />
                  <em className="text-gold not-italic">{m.titleEmphasis}</em>
                </>
              ) : null}
            </h1>
            <p className="text-[0.95rem] text-cream/55 leading-[1.85] max-w-2xl font-light">
              {m.pageDesc}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Offers ── */}
      <section className="bg-offwhite py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-10 lg:px-16 flex flex-col gap-24">
          {offers.map(({ data, gradient }, i) => (
            <FadeUp key={data.name} threshold={0.08}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              >
                <div
                  className={`bg-gradient-to-br ${gradient} rounded-[2px] aspect-[4/3] flex items-end p-6 lg:[direction:ltr]`}
                >
                  <span className="text-[0.62rem] tracking-[0.18em] uppercase text-cream/40">
                    {data.tag}
                  </span>
                </div>

                <div className="lg:[direction:ltr]">
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-gold mb-4">
                    {data.tag}
                  </p>
                  <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-semibold text-text-dark leading-[1.15] mb-5">
                    {data.name}
                  </h2>
                  <p className="text-[0.92rem] text-text-mid leading-[1.85] font-light mb-6">
                    {data.desc}
                  </p>
                  {(data.duration || data.price) && (
                    <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8">
                      {data.duration && (
                        <p className="text-[0.78rem] font-light">
                          <span className="tracking-[0.12em] uppercase text-gold mr-2">
                            {m.durationLabel}
                          </span>
                          <span className="text-text-dark">{data.duration}</span>
                        </p>
                      )}
                      {data.price && (
                        <p className="text-[0.78rem] font-light">
                          <span className="tracking-[0.12em] uppercase text-gold mr-2">
                            {m.priceLabel}
                          </span>
                          <span className="text-text-dark">{data.price}</span>
                        </p>
                      )}
                    </div>
                  )}
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-4">
                    {m.itemsHeading}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {data.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[0.82rem] text-text-mid"
                      >
                        <span className="mt-[0.35rem] shrink-0 w-1.5 h-1.5 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {data.note && (
                    <p className="text-[0.85rem] text-text-muted italic font-light mt-6">
                      {data.note}
                    </p>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
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
                href="/team"
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

export default function OfertaPage() {
  return OfertaPageContent({ locale: "pl" });
}

export function EnOfertaPage() {
  return OfertaPageContent({ locale: "en" });
}
