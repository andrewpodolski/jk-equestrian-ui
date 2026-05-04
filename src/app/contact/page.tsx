'use client';

import { FadeUp } from '@/components/ui/FadeUp';
import messages from '@/i18n/messages/pl.json';

const m = messages.contact;

const subjects = [
  { value: 'lessons',  label: m.form.subjects.lessons },
  { value: 'children', label: m.form.subjects.children },
  { value: 'livery',   label: m.form.subjects.livery },
  { value: 'visit',    label: m.form.subjects.visit },
  { value: 'other',    label: m.form.subjects.other },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative pt-48 pb-24 bg-blue-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(ellipse at 50% 40%, #C9A84C 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-10 lg:px-16">
          <FadeUp>
            <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
              {m.eyebrow}
            </p>
            <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-semibold text-cream leading-[1.07] mb-6">
              {m.pageTitle} <em className="text-gold not-italic">{m.pageTitleEmphasis}</em>
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

          {/* Form */}
          <FadeUp>
            <div>
              <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
                {m.form.eyebrow}
              </p>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-semibold text-text-dark leading-[1.12] mb-2">
                {m.form.title}
              </h2>
              <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-[1.12] mb-6">
                <em className="text-gold not-italic">{m.form.titleEmphasis}</em>
              </h2>
              <p className="text-[0.88rem] text-text-muted font-light mb-10">{m.form.intro}</p>

              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[0.7rem] tracking-[0.14em] uppercase text-text-muted">{m.form.name}</span>
                    <input
                      type="text"
                      placeholder={m.form.namePlaceholder}
                      className="border border-cream-dark bg-white px-4 py-3 text-[0.9rem] text-text-dark placeholder:text-text-muted/50 rounded-[2px] outline-none focus:border-gold transition-colors duration-200"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-[0.7rem] tracking-[0.14em] uppercase text-text-muted">{m.form.email}</span>
                    <input
                      type="email"
                      placeholder={m.form.emailPlaceholder}
                      className="border border-cream-dark bg-white px-4 py-3 text-[0.9rem] text-text-dark placeholder:text-text-muted/50 rounded-[2px] outline-none focus:border-gold transition-colors duration-200"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-1.5">
                  <span className="text-[0.7rem] tracking-[0.14em] uppercase text-text-muted">
                    {m.form.phone} <span className="text-text-muted/50 normal-case tracking-normal">{m.form.phoneOptional}</span>
                  </span>
                  <input
                    type="tel"
                    placeholder={m.form.phonePlaceholder}
                    className="border border-cream-dark bg-white px-4 py-3 text-[0.9rem] text-text-dark placeholder:text-text-muted/50 rounded-[2px] outline-none focus:border-gold transition-colors duration-200"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-[0.7rem] tracking-[0.14em] uppercase text-text-muted">{m.form.subject}</span>
                  <select
                    defaultValue=""
                    className="border border-cream-dark bg-white px-4 py-3 text-[0.9rem] text-text-dark rounded-[2px] outline-none focus:border-gold transition-colors duration-200 appearance-none"
                  >
                    <option value="" disabled>{m.form.subjectPlaceholder}</option>
                    {subjects.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-[0.7rem] tracking-[0.14em] uppercase text-text-muted">{m.form.message}</span>
                  <textarea
                    placeholder={m.form.messagePlaceholder}
                    rows={6}
                    className="border border-cream-dark bg-white px-4 py-3 text-[0.9rem] text-text-dark placeholder:text-text-muted/50 rounded-[2px] outline-none focus:border-gold transition-colors duration-200 resize-none"
                  />
                </label>

                <button
                  type="submit"
                  className="self-start text-[0.78rem] tracking-[0.12em] uppercase font-medium text-blue-dark bg-gold hover:bg-gold-light px-10 py-4 rounded-[2px] transition-colors duration-200 cursor-pointer"
                >
                  {m.form.submit}
                </button>
              </form>
            </div>
          </FadeUp>

          {/* Info column */}
          <FadeUp threshold={0.1}>
            <div className="lg:pt-[9rem]">
              <p className="eyebrow-line flex items-center gap-3 text-[0.65rem] tracking-[0.25em] uppercase text-gold mb-6">
                {m.info.eyebrow}
              </p>
              <h2 className="font-serif text-[1.6rem] font-semibold text-text-dark mb-1">
                {m.info.title}
              </h2>
              <h2 className="font-serif text-[1.6rem] font-semibold text-gold mb-10">
                <em className="not-italic">{m.info.titleEmphasis}</em>
              </h2>

              <div className="flex flex-col gap-8">
                {/* Address */}
                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-2">{m.info.address.label}</p>
                  <p className="text-[0.9rem] text-text-dark font-light whitespace-pre-line leading-[1.75]">{m.info.address.value}</p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-2">{m.info.phone.label}</p>
                  <a href={`tel:${m.info.phone.value.replace(/\s/g, '')}`} className="text-[0.9rem] text-text-dark hover:text-gold transition-colors duration-200 no-underline font-light">
                    {m.info.phone.value}
                  </a>
                </div>

                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-2">{m.info.phone2.label}</p>
                  <a href={`tel:${m.info.phone2.value.replace(/\s/g, '')}`} className="text-[0.9rem] text-text-dark hover:text-gold transition-colors duration-200 no-underline font-light">
                    {m.info.phone2.value}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-2">{m.info.email.label}</p>
                  <a href={`mailto:${m.info.email.value}`} className="text-[0.9rem] text-text-dark hover:text-gold transition-colors duration-200 no-underline font-light">
                    {m.info.email.value}
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-text-muted mb-3">{m.info.hours.label}</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[0.85rem] font-light">
                      <span className="text-text-muted">{m.info.hours.weekdays}</span>
                      <span className="text-text-dark">{m.info.hours.weekdayHours}</span>
                    </div>
                    <div className="h-px bg-cream-dark" />
                    <div className="flex justify-between text-[0.85rem] font-light">
                      <span className="text-text-muted">{m.info.hours.weekend}</span>
                      <span className="text-text-dark">{m.info.hours.weekendHours}</span>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
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
