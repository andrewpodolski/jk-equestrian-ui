import { FadeUp } from "@/components/ui/FadeUp";
import type { Locale } from "@/i18n/config";
import { getNestedMessages } from "@/i18n/server";

async function ContactPageContent({ locale }: { locale: Locale }) {
  const messages = await getNestedMessages(locale);
  const m = messages.contact;

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-48 pb-24 bg-blue-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 40%, #C9A84C 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
              {m.eyebrow}
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-semibold text-cream leading-[1.07] mb-6">
              {m.pageTitle}{" "}
              <em className="text-gold not-italic">{m.pageTitleEmphasis}</em>
            </h1>
            <p className="text-[0.95rem] text-cream/55 leading-[1.85] max-w-xl font-light">
              {m.pageDesc}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="bg-offwhite py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-20">
          {/* Info column */}
          <FadeUp threshold={0.1}>
            <div className="lg:pt-[9rem]">
              <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
                {m.info.eyebrow}
              </p>
              <h2 className="font-serif text-[1.6rem] font-semibold text-text-dark mb-1">
                {m.info.title}
              </h2>
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                  {/* Address */}
                  <div>
                    <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-2">
                      {m.info.address.label}
                    </p>
                    <p className="text-[0.9rem] text-text-dark font-light whitespace-pre-line leading-[1.75]">
                      {m.info.address.value}
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-2">
                      {m.info.phone.label}
                    </p>
                    <a
                      href={`tel:${m.info.phone.value.replace(/\s/g, "")}`}
                      className="text-[0.9rem] text-text-dark hover:text-gold transition-colors duration-200 no-underline font-light"
                    >
                      {m.info.phone.value}
                    </a>
                  </div>

                  <div>
                    <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-2">
                      {m.info.phone2.label}
                    </p>
                    <a
                      href={`tel:${m.info.phone2.value.replace(/\s/g, "")}`}
                      className="text-[0.9rem] text-text-dark hover:text-gold transition-colors duration-200 no-underline font-light"
                    >
                      {m.info.phone2.value}
                    </a>
                  </div>

                  <div>
                    <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-2">
                      {m.info.email.label}
                    </p>
                    <a
                      href={`mailto:${m.info.email.value}`}
                      className="text-[0.9rem] text-text-dark hover:text-gold transition-colors duration-200 no-underline font-light"
                    >
                      {m.info.email.value}
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-3">
                    {m.info.hours.label}
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[0.85rem] font-light">
                      <span className="text-text-muted">
                        {m.info.hours.weekdays}
                      </span>
                      <span className="text-text-dark">
                        {m.info.hours.weekdayHours}
                      </span>
                    </div>
                    <div className="h-px bg-cream-dark" />
                    <div className="flex justify-between text-[0.85rem] font-light">
                      <span className="text-text-muted">
                        {m.info.hours.weekend}
                      </span>
                      <span className="text-text-dark">
                        {m.info.hours.weekendHours}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative mt-2 w-full aspect-[4/3] overflow-hidden rounded-[2px] border border-cream-dark">
                  <iframe
                    title={m.info.mapIframeTitle}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.2925410850553!2d20.983685058216214!3d52.14094543996822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471933067d77ea55%3A0x4ce9894f65a6efcb!2sJe%C5%BAdziecki%20Klub%20Sportowy%20RK%20Warszawa!5e0!3m2!1sen!2spl!4v1777669125763!5m2!1sen!2spl"
                    className="absolute inset-0 h-full w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return ContactPageContent({ locale: 'pl' });
}

export function EnContactPage() {
  return ContactPageContent({ locale: 'en' });
}
