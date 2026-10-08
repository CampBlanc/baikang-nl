/* =======================================================================
   TARIEVEN — één bron voor de tarievenpagina én de virtuele assistent
   ======================================================================= */

export interface Rate {
  title: string;
  badge?: string;
  duration: string;
  price: string;
  priceUnit?: string;
  desc: string;
  link: string;
  featured?: boolean;
}

export interface RateGroups {
  acupuncture: Rate[];
  smoking: Rate[];
  complementary: Rate[];
}

const RATES_NL: RateGroups = {
  acupuncture: [
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
  ],
  smoking: [
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
  ],
  complementary: [
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
  ],
};

const RATES_EN: RateGroups = {
  acupuncture: [
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
  ],
  smoking: [
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
  ],
  complementary: [
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
  ],
};

export const DEFAULT_APPOINTMENT_URL = 'https://witkampwellness.clientomgeving.nl/afspraak-maken';

export function getRates(locale: string = 'nl'): RateGroups {
  return locale === 'en' ? RATES_EN : RATES_NL;
}
