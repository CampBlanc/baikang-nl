import { Metadata } from 'next';
import { useTranslations, useLocale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isNl = locale === 'nl';

  return {
    title: isNl
      ? 'Tarieven & Vergoedingen | Bai Kang TCM Tilburg'
      : 'Rates & Reimbursements | Bai Kang TCM Tilburg',
    description: isNl
      ? 'Overzicht van actuele tarieven voor acupunctuur, cupping, guasha, reiki en lasertherapie bij Bai Kang TCM in Tilburg en vergoeding via zorgverzekeraars.'
      : 'Current fees for acupuncture, cupping, guasha, reiki, and laser therapy at Bai Kang TCM in Tilburg and insurance coverage.',
  };
}

export default function TarievenPage() {
  const t = useTranslations('RatesPage');
  const locale = useLocale();
  const isNl = locale === 'nl';

  const defaultAppointmentUrl =
    'https://witkampwellness.clientomgeving.nl/afspraak-maken';

  // 1. Acupunctuur behandelingen & trajecten
  const acupunctureRates = isNl
    ? [
        {
          title: 'Intake + Acupunctuur',
          duration: '90 minuten',
          price: '€ 85',
          priceUnit: 'per sessie',
          desc: 'Grondige intake, pols- en tongdiagnostiek en direct aansluitend je eerste volledige acupunctuurbehandeling.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=YZSzQvd0',
          featured: true,
        },
        {
          title: 'Acupunctuur vervolg',
          duration: '60 minuten',
          price: '€ 65',
          priceUnit: 'per sessie',
          desc: 'Korte evaluatie van je voortgang en gerichte vervolgbehandeling met fijne steriele naalden.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=5Hx7knSR',
          featured: false,
        },
        {
          title: 'Intake + 3x Acu',
          duration: '3 consulten',
          price: '€ 260',
          priceUnit: 'traject',
          desc: 'Compleet intakeconsult met eerste behandeling plus 3 gerichte vervolgafspraken.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?tp=tUEtMofK',
          featured: false,
        },
        {
          title: 'Acupunctuur 3 behandelingen',
          duration: '3 consulten',
          price: '€ 180',
          priceUnit: 'pakket',
          desc: 'Pakket van 3 vervolgbehandelingen (acu3) ter voortzetting en consolidatie van je hersteltraject.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?tp=ZeTBMw5w',
          featured: false,
        },
        {
          title: 'Telefonisch consult',
          duration: '10 minuten',
          price: 'Gratis',
          priceUnit: 'vrijblijvend',
          desc: 'Kort telefonisch contact om kennis te maken en rustig af te stemmen of acupunctuur bij jouw hulpvraag past.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=JVi9YaGE',
          featured: false,
        },
      ]
    : [
        {
          title: 'Intake + Acupuncture',
          duration: '90 minutes',
          price: '€ 85',
          priceUnit: 'per session',
          desc: 'In-depth consultation, TCM pulse & tongue evaluation, followed immediately by your initial acupuncture session.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=YZSzQvd0',
          featured: true,
        },
        {
          title: 'Follow-up Acupuncture',
          duration: '60 minutes',
          price: '€ 65',
          priceUnit: 'per session',
          desc: 'Brief progress evaluation and targeted acupuncture treatment calibrated to your body’s response.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=5Hx7knSR',
          featured: false,
        },
        {
          title: 'Intake + 3x Acu Plan',
          duration: '3 consultations',
          price: '€ 260',
          priceUnit: 'treatment plan',
          desc: 'Comprehensive initial intake and treatment session plus 3 consecutive follow-up treatments.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?tp=tUEtMofK',
          featured: false,
        },
        {
          title: 'Acupuncture 3 Sessions',
          duration: '3 consultations',
          price: '€ 180',
          priceUnit: 'package',
          desc: 'Follow-up package consisting of 3 treatments to maintain and deepen your progress.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?tp=ZeTBMw5w',
          featured: false,
        },
        {
          title: 'Phone Consultation',
          duration: '10 minutes',
          price: 'Free',
          priceUnit: 'no obligation',
          desc: 'A brief telephone introduction to discuss whether acupuncture is suited to your specific health concern.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=JVi9YaGE',
          featured: false,
        },
      ];

  // 2. Stoppen met roken (Laseracupunctuur)
  const smokingRates = isNl
    ? [
        {
          title: 'Rookvrij KLAAR',
          badge: 'Meest gekozen',
          duration: '60 minuten',
          price: '€ 175',
          priceUnit: 'één sessie',
          desc: 'Eén consult + intensieve laseracupunctuurbehandeling. Één complete sessie. Klaar om rookvrij verder te gaan.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=EtCpaBHX',
        },
        {
          title: 'Rookvrij SOLIDE',
          badge: 'Uitgebreid traject',
          duration: '3 consulten',
          price: '€ 255',
          priceUnit: 'compleet traject',
          desc: '1 uitgebreid consultgesprek én laserbehandeling + 2 opeenvolgende vervolgbehandelingen (30 min t.w.v. € 65 per stuk inbegrepen).',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?tp=ELLUCqtq',
        },
      ]
    : [
        {
          title: 'Rookvrij READY',
          badge: 'Most Popular',
          duration: '60 minutes',
          price: '€ 175',
          priceUnit: 'single session',
          desc: 'One in-depth consultation + focused needle-free laser acupuncture session. Complete in one appointment.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=EtCpaBHX',
        },
        {
          title: 'Rookvrij SOLID',
          badge: 'Comprehensive Track',
          duration: '3 consultations',
          price: '€ 255',
          priceUnit: 'full program',
          desc: '1 comprehensive session with laser treatment + 2 consecutive follow-up laser treatments (30 mins each, valued at € 65 each).',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?tp=ELLUCqtq',
        },
      ];

  // 3. Aanvullende behandelvormen
  const complementaryRates = isNl
    ? [
        {
          title: 'Cupping behandeling',
          duration: '60 minuten',
          price: '€ 60',
          desc: 'Plaatsing van glazen of siliconen cups om diepe spierspanningen in nek of rug los te maken en de microcirculatie krachtig aan te zetten.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=GRhtE7eI',
        },
        {
          title: 'Guasha behandeling',
          duration: '60 minuten',
          price: '€ 60',
          desc: 'Zacht schrapen over de geoliede huid met een gepolijst instrument ter ontlasting van stijf bindweefsel en stimulatie van afvalstoffenafvoer.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=luNRsUmE',
        },
        {
          title: 'Reiki behandeling',
          duration: '60 minuten',
          price: '€ 60',
          desc: 'Zachte, harmoniserende energetische behandeling gericht op diepe lichamelijke rust, ontspanning en herstel van je natuurlijke flow.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=8J4eXEqE',
        },
      ]
    : [
        {
          title: 'Cupping Therapy',
          duration: '60 minutes',
          price: '€ 60',
          desc: 'Application of glass or silicone cups to release chronic muscular tension in back and neck, stimulating localized microcirculation.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=GRhtE7eI',
        },
        {
          title: 'Guasha Therapy',
          duration: '60 minutes',
          price: '€ 60',
          desc: 'Gentle scraping technique on oiled skin using a smooth tool to relieve stagnant connective tissue and encourage detoxification.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=luNRsUmE',
        },
        {
          title: 'Reiki Treatment',
          duration: '60 minutes',
          price: '€ 60',
          desc: 'Calming and restorative energetic therapy focused on deep relaxation, inner stillness, and supporting balance from within.',
          link: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=8J4eXEqE',
        },
      ];

  const faqs = isNl
    ? [
        {
          q: 'Heb ik een verwijzing van de huisarts nodig?',
          a: 'Nee, voor een behandeling bij Bai Kang TCM heb je geen verwijzing van je huisarts nodig. Je kunt direct zelf een afspraak inplannen via de online agenda.',
        },
        {
          q: 'Wordt acupunctuur vergoed door de zorgverzekering?',
          a: 'Acupunctuur valt vaak onder de dekking van de aanvullende zorgverzekering. Omdat het uit het aanvullende pakket komt, gaat dit niet ten koste van je wettelijk eigen risico. Raadpleeg vooraf je polisvoorwaarden.',
        },
        {
          q: 'Wat gebeurt er als ik verhinderd ben of wil annuleren?',
          a: 'Mocht je verhinderd zijn, laat dit dan minimaal 24 uur van tevoren weten. Bij annulering binnen 24 uur kan de gereserveerde tijd in rekening worden gebracht.',
        },
        {
          q: 'Hoe verloopt de betaling van het consult?',
          a: 'Na de behandeling ontvang je digitaal een factuur per e-mail met een betaallink of overboekingsgegevens. Deze factuur kun je desgewenst indienen bij je zorgverzekeraar.',
        },
      ]
    : [
        {
          q: 'Do I need a doctor referral?',
          a: 'No, a referral from a general practitioner is not required for treatments at Bai Kang TCM. You can schedule an appointment directly.',
        },
        {
          q: 'Are treatments covered by Dutch health insurance?',
          a: 'Acupuncture is widely covered under supplementary health insurance plans. Because it falls under supplementary care, it does not affect your statutory deductible (eigen risico). Check your policy terms.',
        },
        {
          q: 'What is the cancellation policy?',
          a: 'If you need to reschedule or cancel, please provide at least 24 hours notice. Cancellations made within 24 hours may be invoiced for the reserved appointment.',
        },
        {
          q: 'How does payment work?',
          a: 'Following your session, you will receive a digital invoice via email with an online payment link. You can submit this invoice directly to your health insurer.',
        },
      ];

  const bookLabel = isNl ? 'Inplannen' : 'Book';

  return (
    <main className="bg-ivory text-forest-deep selection:bg-gold-antique/20">
      {/* 1. HERO MET SUBTIELE FADE-IN */}
      <section className="pt-20 pb-14 sm:pt-28 sm:pb-18 px-6 max-w-4xl mx-auto text-center transition-all duration-700 ease-out">
        <p className="eyebrow text-gold-dark mb-4 tracking-widest uppercase text-xs sm:text-sm animate-fade-in">
          {t('eyebrow')}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-deep leading-tight mb-6">
          {t('heroTitle')}
        </h1>
        <p className="font-body text-text-soft text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {t('heroSubtitle')}
        </p>
      </section>

      {/* 2. OVERZICHT TARIEVEN */}
      <section className="py-10 px-6 max-w-5xl mx-auto">
        <div className="border-t border-border-light/60 pt-10 mb-10">
          <p className="eyebrow text-gold-dark text-xs uppercase tracking-wider mb-2">
            {t('sectionRatesEyebrow')}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
            {t('sectionRatesTitle')}
          </h2>
          <p className="font-body text-sm text-text-soft mt-1">
            {t('sectionRatesSubtitle')}
          </p>
        </div>

        {/* 2A. ACUPUNCTUUR */}
        <div className="mb-14">
          <h3 className="font-display text-2xl text-forest-deep mb-6 flex items-center gap-3">
            <span>{t('catAcupuncture')}</span>
            <span className="h-px bg-border-light/80 flex-grow" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acupunctureRates.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 sm:p-7 flex flex-col justify-between border rounded-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-antique ${
                  item.featured
                    ? 'bg-surface-cream border-gold-antique/70 shadow-sm ring-1 ring-gold-antique/30 hover:border-gold-dark'
                    : 'bg-surface-cream/50 border-border-light/70 hover:border-gold-antique hover:bg-surface-cream'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-gold-dark font-medium mb-2">
                    <span>{item.duration}</span>
                    {item.featured && (
                      <span className="text-[10px] bg-forest-deep text-ivory px-2 py-0.5 font-semibold tracking-wider rounded-xs">
                        {isNl ? 'Eerste consult' : 'First Visit'}
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-2xl text-forest-deep mb-2 font-medium transition-colors group-hover:text-forest">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-text-soft leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-light/50 flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl text-forest-deep font-semibold">
                      {item.price}
                    </span>
                    <span className="text-xs text-text-soft font-body lowercase">
                      {item.priceUnit}
                    </span>
                  </div>

                  {/* Micro-knop met interactieve animatie */}
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-forest-deep group-hover:text-gold-dark transition-colors font-body uppercase tracking-wider">
                    <span>{bookLabel}</span>
                    <span className="text-sm transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 2B. STOPPEN MET ROKEN (LASERACUPUNCTUUR) */}
        <div className="mb-14">
          <h3 className="font-display text-2xl text-forest-deep mb-6 flex items-center gap-3">
            <span>{t('catSmoking')}</span>
            <span className="h-px bg-border-light/80 flex-grow" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {smokingRates.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface-cream/70 border border-border-light/70 p-6 sm:p-8 flex flex-col justify-between rounded-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-gold-antique hover:bg-surface-cream focus:outline-none focus:ring-2 focus:ring-gold-antique"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="uppercase tracking-widest text-gold-dark font-medium">
                      {item.duration}
                    </span>
                    <span className="text-[10px] bg-gold-antique text-forest-deep px-2.5 py-0.5 font-bold uppercase tracking-wider rounded-xs">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="font-display text-2xl text-forest-deep mb-3 font-medium transition-colors group-hover:text-forest">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-text-soft leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-light/50 flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl text-forest-deep font-semibold">
                      {item.price}
                    </span>
                    <span className="text-xs text-text-soft font-body lowercase">
                      {item.priceUnit}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-forest-deep group-hover:text-gold-dark transition-colors font-body uppercase tracking-wider">
                    <span>{bookLabel}</span>
                    <span className="text-sm transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 2C. AANVULLENDE BEHANDELVORMEN */}
        <div className="mb-10">
          <h3 className="font-display text-2xl text-forest-deep mb-6 flex items-center gap-3">
            <span>{t('catComplementary')}</span>
            <span className="h-px bg-border-light/80 flex-grow" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complementaryRates.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface-cream/50 border border-border-light/60 p-6 flex flex-col justify-between rounded-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-gold-antique hover:bg-surface-cream focus:outline-none focus:ring-2 focus:ring-gold-antique"
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold-dark font-medium block mb-2">
                    {item.duration}
                  </span>
                  <h4 className="font-display text-2xl text-forest-deep mb-2 font-medium transition-colors group-hover:text-forest">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-text-soft leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-light/50 flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display text-3xl text-forest-deep font-semibold">
                      {item.price}
                    </span>
                    <span className="text-xs text-text-soft font-body lowercase">
                      {t('perSession')}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-forest-deep group-hover:text-gold-dark transition-colors font-body uppercase tracking-wider">
                    <span>{bookLabel}</span>
                    <span className="text-sm transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VERGOEDING & REGISTRATIES */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="border-t border-border-light/60 pt-10 mb-8">
          <p className="eyebrow text-gold-dark text-xs uppercase tracking-wider mb-2">
            02 · {isNl ? 'Zorgverzekering' : 'Insurance'}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">
            {t('insuranceHeading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4 font-body text-text-soft text-base leading-relaxed">
            <p>{t('insuranceText1')}</p>
            <p>{t('insuranceText2')}</p>
            <div className="p-4 bg-surface-cream/80 border-l-2 border-gold-antique text-sm text-forest-deep mt-4 shadow-2xs">
              {t('insuranceNotice')}
            </div>
          </div>

          {/* Beroepsregistraties */}
          <div className="lg:col-span-5 bg-surface-cream/80 border border-border-light/60 p-6 space-y-3 rounded-sm">
            <h3 className="font-display text-lg text-forest-deep border-b border-border-light/40 pb-2">
              {isNl ? 'Beroepsregistraties & Codes' : 'Professional Registrations'}
            </h3>
            <div className="text-xs sm:text-sm font-body space-y-2 text-text-soft">
              <p>
                <strong className="text-forest-deep">
                  {isNl ? 'Beroepsvereniging:' : 'Association:'}
                </strong>{' '}
                CAT (Complementair Aanvullende Therapeuten)
              </p>
              <p>
                <strong className="text-forest-deep">
                  {isNl ? 'Klachtenregeling:' : 'Disciplinary Law:'}
                </strong>{' '}
                GAT / Wkkgz
              </p>
              <p>
                <strong className="text-forest-deep">AGB Zorgverlener:</strong>{' '}
                90122136
              </p>
              <p>
                <strong className="text-forest-deep">AGB Praktijk:</strong>{' '}
                90097044
              </p>
              <p>
                <strong className="text-forest-deep">KvK:</strong> 89643771
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BETALING */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="border-t border-border-light/60 pt-10">
          <p className="eyebrow text-gold-dark text-xs uppercase tracking-wider mb-2">
            03 · {isNl ? 'Factuur' : 'Invoicing'}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">
            {t('paymentHeading')}
          </h2>
          <p className="font-body text-text-soft max-w-2xl leading-relaxed text-base">
            {t('paymentText')}
          </p>
        </div>
      </section>

      {/* 5. VEELGESTELDE VRAGEN */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <div className="border-t border-border-light/60 pt-10 mb-8">
          <p className="eyebrow text-gold-dark text-xs uppercase tracking-wider mb-2">
            04 · {isNl ? 'Vragen' : 'Questions'}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-8">
            {t('faqHeading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-surface-cream/40 border border-border-light/50 p-6 space-y-2 rounded-sm transition-colors hover:border-gold-antique/50"
            >
              <h3 className="font-display text-xl text-forest-deep font-medium">
                {faq.q}
              </h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. AFSLUITENDE CTA */}
      <section className="bg-forest-deep text-ivory py-20 px-6 text-center border-t-4 border-gold-antique">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory leading-tight">
            {t('ctaTitle')}
          </h2>
          <p className="font-body text-text-light-soft/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {t('ctaSubtitle')}
          </p>
          <div className="pt-4">
            <a
              href={defaultAppointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold-antique hover:bg-gold text-forest-deep font-body font-semibold px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-sm"
            >
              {t('ctaButton')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}