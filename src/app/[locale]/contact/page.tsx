import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import AtmosphericBamboo from '@/components/AtmosphericBamboo';

/* =======================================================================
   PRAKTIJKGEGEVENS (één plek om aan te passen)
   ======================================================================= */
const BOOKING_URL = 'https://witkampwellness.clientomgeving.nl/afspraak-maken';
const WHATSAPP_URL = 'https://wa.me/31683498042';
const EMAIL = 'info@baikang.nl';
const ADDRESS_LINE_1 = 'Weteringlaan 150';
const ADDRESS_LINE_2 = '5032 XV Tilburg';
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Weteringlaan+150+5032+XV+Tilburg';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Contact & Appointments | Bai Kang TCM Tilburg'
      : 'Contact & afspraak maken | Bai Kang TCM Tilburg',
    description: isEn
      ? 'Book an acupuncture appointment at Bai Kang TCM in Tilburg online, or get in touch via WhatsApp or email. Appointment times by arrangement.'
      : 'Maak online een afspraak voor acupunctuur bij Bai Kang TCM in Tilburg, of neem contact op via WhatsApp of e-mail. Afspraaktijden in overleg.',
    alternates: { canonical: `https://baikang.nl/${locale}/contact` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === 'en';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Bai Kang TCM',
    alternateName: 'Bái Kāng 白康',
    url: 'https://baikang.nl',
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_LINE_1,
      postalCode: '5032 XV',
      addressLocality: 'Tilburg',
      addressCountry: 'NL',
    },
    parentOrganization: { '@type': 'Organization', name: 'Witkamp Wellness' },
  };

  const channels = [
    {
      key: 'booking',
      glyph: '约',
      title: isEn ? 'Book online' : 'Online afspraak maken',
      text: isEn
        ? 'Choose a treatment and a time that suits you in the online booking system. You will receive a confirmation by email.'
        : 'Kies in het online afsprakensysteem een behandeling en een moment dat jou uitkomt. Je ontvangt een bevestiging per e-mail.',
      cta: isEn ? 'Book an appointment' : 'Afspraak maken',
      href: BOOKING_URL,
      primary: true,
    },
    {
      key: 'whatsapp',
      glyph: '信',
      title: 'WhatsApp',
      text: isEn
        ? 'A question first, or no suitable time available online? Send a message and we will find a moment together.'
        : 'Eerst een vraag, of geen passend moment online? Stuur een bericht, dan zoeken we samen een moment.',
      cta: isEn ? 'Send a WhatsApp' : 'Stuur een WhatsApp',
      href: WHATSAPP_URL,
      primary: false,
    },
    {
      key: 'email',
      glyph: '函',
      title: isEn ? 'Email' : 'E-mail',
      text: isEn
        ? 'For longer questions, for example about your complaint or reimbursement by your health insurer.'
        : 'Voor uitgebreidere vragen, bijvoorbeeld over je klacht of vergoeding door je zorgverzekeraar.',
      cta: EMAIL,
      href: `mailto:${EMAIL}`,
      primary: false,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative overflow-hidden bg-ivory text-forest-deep selection:bg-gold-antique/30">
        {/* 1. HERO */}
        <section className="relative overflow-hidden border-b border-border-light/30 pt-16 pb-14 sm:pt-24 sm:pb-20 px-6 sm:px-10 lg:px-16">
          <AtmosphericBamboo variant="leaves" position="top-right" opacity="opacity-15 lg:opacity-25" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="eyebrow text-gold-dark mb-4">Contact</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-deep leading-[1.15] mb-6">
              {isEn ? 'Book an appointment' : 'Afspraak maken'}
            </h1>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-2xl mx-auto">
              {isEn
                ? 'There are no fixed opening hours: appointments are made by arrangement. Book online, or send a message and we will find a moment that suits you.'
                : 'Er zijn geen vaste openingstijden: afspraken worden in overleg gemaakt. Boek online, of stuur een bericht, dan zoeken we samen een moment dat jou uitkomt.'}
            </p>
          </div>
        </section>

        {/* 2. CONTACTKANALEN */}
        <section className="py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((c) => {
              const external = c.href.startsWith('http');
              return (
                <div
                  key={c.key}
                  className={`flex flex-col border p-7 sm:p-8 ${
                    c.primary
                      ? 'border-forest-deep bg-forest-deep text-text-light'
                      : 'border-border-light/60 bg-surface-cream/40'
                  }`}
                >
                  <span
                    className="font-chinese text-xl block mb-3 text-gold-antique"
                    aria-hidden="true"
                  >
                    {c.glyph}
                  </span>
                  <h2 className={`font-display text-2xl sm:text-3xl mb-3 ${c.primary ? 'text-ivory' : 'text-forest-deep'}`}>
                    {c.title}
                  </h2>
                  <p className={`font-body text-sm sm:text-base leading-relaxed mb-6 ${c.primary ? 'text-text-light/80' : 'text-text-soft'}`}>
                    {c.text}
                  </p>
                  <a
                    href={c.href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 font-body text-xs font-semibold transition-all ${
                      c.primary
                        ? 'uppercase tracking-widest bg-ivory text-forest-deep hover:bg-gold-antique'
                        : c.key === 'email'
                          ? 'tracking-wide border border-forest-deep/40 text-forest-deep hover:bg-forest-deep/5'
                          : 'uppercase tracking-widest border border-forest-deep/40 text-forest-deep hover:bg-forest-deep/5'
                    }`}
                  >
                    <span>{c.cta}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. LOCATIE */}
        <section className="border-y border-border-light/40 bg-surface-cream/40 py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="eyebrow text-gold-dark">{isEn ? 'Location' : 'Locatie'}</p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
                {isEn ? 'The practice in Tilburg' : 'De praktijk in Tilburg'}
              </h2>
              <address className="not-italic font-body text-base sm:text-lg text-forest-deep leading-relaxed">
                <span className="font-semibold block">Bái Kāng TCM</span>
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </address>
              <p className="font-body text-sm sm:text-base text-text-soft leading-relaxed">
                {isEn
                  ? 'Treatments take place by appointment only; there is no walk-in. You are welcome in a quiet treatment room where there is time for your story.'
                  : 'Behandelingen vinden alleen plaats op afspraak; er is geen vrije inloop. Je bent welkom in een rustige behandelruimte waar tijd is voor jouw verhaal.'}
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-forest-deep/40 px-6 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:bg-forest-deep/5 transition-all"
              >
                <span>{isEn ? 'Plan your route' : 'Plan je route'}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full border border-border-light/60 p-3 bg-ivory shadow-sm">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/behandel-ruimte.png"
                    alt={isEn ? 'Treatment room at Bai Kang TCM in Tilburg' : 'Behandelruimte van Bai Kang TCM in Tilburg'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. GOED OM TE WETEN */}
        <section className="py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
              {isEn ? 'Good to know' : 'Goed om te weten'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-gold-antique bg-surface-cream/40 p-6 space-y-2">
                <h3 className="font-display text-xl text-forest-deep">
                  {isEn ? 'Your first appointment' : 'Je eerste afspraak'}
                </h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {isEn
                    ? 'Before your first visit you will receive an intake form. The first treatment starts with a conversation and pulse diagnosis.'
                    : 'Voor je eerste bezoek ontvang je een intakeformulier. De eerste behandeling begint met een gesprek en polsdiagnostiek.'}{' '}
                  <Link href="/methode" className="font-medium text-gold-dark underline underline-offset-2 hover:text-forest-deep">
                    {isEn ? 'How a treatment works' : 'Zo verloopt een behandeling'}
                  </Link>
                </p>
              </div>
              <div className="border-l-2 border-gold-antique bg-surface-cream/40 p-6 space-y-2">
                <h3 className="font-display text-xl text-forest-deep">
                  {isEn ? 'Rates & reimbursement' : 'Tarieven & vergoeding'}
                </h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {isEn
                    ? 'No referral needed. Many supplementary insurance policies partly reimburse treatments by a CAT-registered therapist.'
                    : 'Een verwijzing is niet nodig. Veel aanvullende verzekeringen vergoeden behandelingen door een CAT-therapeut gedeeltelijk.'}{' '}
                  <Link href="/tarieven" className="font-medium text-gold-dark underline underline-offset-2 hover:text-forest-deep">
                    {isEn ? 'View rates' : 'Bekijk tarieven'}
                  </Link>
                </p>
              </div>
              <div className="border-l-2 border-gold-antique bg-surface-cream/40 p-6 space-y-2">
                <h3 className="font-display text-xl text-forest-deep">
                  {isEn ? 'Cancelling' : 'Afzeggen'}
                </h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {isEn
                    ? 'Appointments can be cancelled or rescheduled free of charge up to 24 hours in advance, by phone, WhatsApp or email. Later cancellations are charged at 50% of the rate, and missed appointments in full.'
                    : 'Afzeggen of verzetten kan kosteloos tot 24 uur voor je afspraak, telefonisch, via WhatsApp of per e-mail. Bij later afzeggen wordt 50% van het tarief in rekening gebracht, bij niet verschijnen het volledige tarief.'}{' '}
                  <Link href="/voorwaarden" className="font-medium text-gold-dark underline underline-offset-2 hover:text-forest-deep">
                    {isEn ? 'Terms and conditions' : 'Algemene voorwaarden'}
                  </Link>
                </p>
              </div>
              <div className="border-l-2 border-gold-antique bg-surface-cream/40 p-6 space-y-2">
                <h3 className="font-display text-xl text-forest-deep">
                  {isEn ? 'Urgent complaints' : 'Acute klachten'}
                </h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  {isEn
                    ? 'Bai Kang is not an emergency practice. With acute or serious complaints, contact your GP or the out-of-hours GP service; in life-threatening situations, call 112.'
                    : 'Bai Kang is geen spoedpraktijk. Neem bij acute of ernstige klachten contact op met je huisarts of de huisartsenpost; bel bij levensbedreigende situaties 112.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. REGISTRATIES */}
        <section className="border-t border-border-light/40 bg-surface-cream/40 py-14 sm:py-16 px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl flex flex-col md:flex-row gap-8 md:items-center">
            <div className="flex items-center gap-4 shrink-0">
              <div className="relative h-16 w-16">
                <Image src="/images/CATvirtueelschild.png" alt="CAT-therapeut schild" fill sizes="64px" className="object-contain" />
              </div>
              <div className="relative h-16 w-16">
                <Image src="/images/GATVirtueelschild.png" alt="GAT Geschilleninstantie schild" fill sizes="64px" className="object-contain" />
              </div>
            </div>
            <div className="font-body text-sm text-text-soft leading-relaxed space-y-1">
              <p className="text-forest-deep font-medium">
                Bai Kang TCM · {isEn ? 'trade name of Witkamp Wellness' : 'handelsnaam van Witkamp Wellness'}
              </p>
              <p>
                KvK 89643771 · AGB {isEn ? 'provider' : 'zorgverlener'} 90122136 · AGB {isEn ? 'practice' : 'praktijk'} 90097044
              </p>
              <p>
                {isEn
                  ? 'Member of professional association CAT and affiliated with the GAT for complaints and disciplinary law.'
                  : 'Aangesloten bij beroepsvereniging CAT en bij de GAT voor klacht- en tuchtrecht.'}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
