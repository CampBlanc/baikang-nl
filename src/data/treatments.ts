/* =======================================================================
   AANVULLENDE BEHANDELVORMEN (Cupping, Guasha, Reiki)
   Route: /[locale]/behandelvormen/[slug]
   ======================================================================= */

export interface TreatmentFaq {
  question: string;
  answer: string;
}

export interface TreatmentPrinciple {
  /** Originele Japanse/Chinese tekst (decoratief) */
  original: string;
  text: string;
}

export interface TreatmentContent {
  slug: string;
  /** Chinese/Japanse karakters voor de eyebrow (decoratief) */
  glyph: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroIntro: string;
  image: { src: string; alt: string; position?: string };
  about: { title: string; paragraphs: string[] };
  background: { eyebrow: string; title: string; paragraphs: string[] };
  /** Optioneel blok, bijv. de vijf leefregels bij reiki */
  principles?: {
    eyebrow: string;
    title: string;
    intro: string;
    items: TreatmentPrinciple[];
    outro: string;
  };
  indications: { title: string; intro: string; items: string[] };
  session: { title: string; intro: string; steps: string[]; afterNote: string };
  safetyNote: string;
  faqs: TreatmentFaq[];
  cta: { title: string; text: string };
  duration: string;
  price: string;
  bookingUrl: string;
}

const BOOKING = {
  cupping: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=GRhtE7eI',
  guasha: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=luNRsUmE',
  reiki: 'https://witkampwellness.clientomgeving.nl/afspraak-maken?t=8J4eXEqE',
};

/* =======================================================================
   NEDERLANDS (NL)
   ======================================================================= */

const CUPPING_NL: TreatmentContent = {
  slug: 'cupping',
  glyph: '拔罐',
  name: 'Cupping',
  metaTitle: 'Cupping in Tilburg | Bai Kang TCM',
  metaDescription:
    'Cupping is een traditionele Chinese behandelvorm waarbij cups met zuigkracht op de huid worden geplaatst. Ingezet bij spierspanning, stijfheid en een stroeve doorbloeding.',
  h1: 'Cupping',
  heroIntro:
    'Een stijve nek die maar niet losser wordt, een rug die vastzit na lange dagen achter het scherm, of spieren die blijven trekken na het sporten. Bij cupping worden cups met een milde zuigkracht op de huid geplaatst. De huid en het onderliggende weefsel worden daarbij licht opgetild, in plaats van ingedrukt zoals bij massage.',
  image: {
    src: '/images/behandelvormen/cupping.webp',
    alt: 'Glazen cups worden op de rug geplaatst tijdens een cuppingbehandeling',
  },
  about: {
    title: 'Wat is cupping?',
    paragraphs: [
      'Cupping, in het Chinees Ba Guan, is een eeuwenoude behandelvorm uit de Traditionele Chinese Geneeskunde. Glazen of siliconen cups worden op de huid geplaatst en met een vacuüm vastgezet. De zuigkracht tilt de huid, het bindweefsel (fascia) en de bovenste spierlagen op. Daardoor neemt de doorbloeding in het gebied plaatselijk toe en kan vastzittende spanning loskomen.',
      'De cups kunnen stil op één plek blijven staan, of met wat olie over de huid worden bewogen. Dat laatste heet glijdende cupping en voelt aan als een diepe, trekkende massage. Cupping wordt vooral op de rug, de schouders, de nek en de benen toegepast.',
      'Na de behandeling zijn vaak ronde, rode tot paarse verkleuringen zichtbaar op de plekken van de cups. Dat zijn geen blauwe plekken door een stoot, maar een reactie van de kleine bloedvaatjes op de zuigkracht. Ze doen meestal geen pijn en verdwijnen binnen enkele dagen tot ongeveer een week.',
    ],
  },
  background: {
    eyebrow: 'Traditionele Chinese Geneeskunde',
    title: 'Cupping vanuit de Chinese geneeskunde',
    paragraphs: [
      'Binnen de Traditionele Chinese Geneeskunde wordt pijn en stijfheid vaak gezien als een stagnatie: Qi en Bloed stromen niet vrij door een gebied. Cupping wordt ingezet om die doorstroming te ondersteunen en om Koude, Wind of Vochtigheid uit de spieren te verdrijven, bijvoorbeeld bij een stijve nek na tocht of een rug die vastzit bij koud en vochtig weer.',
      'Bij Bai Kang wordt cupping meestal gecombineerd met acupunctuur of laseracupunctuur. De acupunctuur richt zich op het onderliggende patroon, de cupping op de spanning in de spieren zelf. Cupping kan ook als losse behandeling worden geboekt.',
    ],
  },
  indications: {
    title: 'Wanneer wordt cupping ingezet?',
    intro:
      'Cupping wordt vooral toegepast bij klachten van het bewegingsapparaat en spanning. Veelvoorkomende redenen om te komen zijn:',
    items: [
      'Gespannen of stijve spieren in nek, schouders en rug',
      'Rugpijn en een vastzittende onderrug',
      'Spierpijn en stijfheid na het sporten',
      'Spanning door stress of langdurig zitten',
      'Een koud, zwaar of stroef gevoel in de spieren',
      'Als aanvulling op acupunctuur bij pijnklachten',
    ],
  },
  session: {
    title: 'Hoe verloopt een cuppingbehandeling?',
    intro:
      'Een behandeling duurt ongeveer een uur en begint altijd met een kort gesprek over je klachten, je gezondheid en eventuele medicatie.',
    steps: [
      'Je ligt ontspannen op de behandeltafel, meestal op je buik. Alleen het te behandelen gebied, zoals de rug of de schouders, wordt ontbloot.',
      'De cups worden op de huid geplaatst en met een vacuüm vastgezet. De zuigkracht wordt afgestemd op wat voor jou prettig is.',
      'De cups blijven enkele minuten staan of worden met olie over de huid bewogen. Je voelt een trekkend, warm gevoel dat de meeste mensen als ontspannend ervaren.',
      'Waar passend wordt de behandeling gecombineerd met acupunctuur, laseracupunctuur of guasha.',
    ],
    afterNote:
      'Drink na de behandeling voldoende water en houd het behandelde gebied de rest van de dag warm. Vermijd die dag een warm bad, sauna of zware inspanning. De verkleuringen van de cups trekken vanzelf weg.',
  },
  safetyNote:
    'Cupping is niet geschikt bij huidaandoeningen, wondjes of ontstekingen op de plek van behandeling, bij koorts, bij een bloedingsstoornis of het gebruik van bloedverdunners, en bij spataderen of trombose in het gebied. Bai Kang behandelt geen zwangere vrouwen. Laat pijnklachten die plotseling ontstaan, verergeren of samengaan met uitvalsverschijnselen eerst door je huisarts beoordelen. Cupping is een aanvulling op de reguliere zorg.',
  faqs: [
    {
      question: 'Doet cupping pijn?',
      answer:
        'De meeste mensen ervaren cupping als een stevig, trekkend gevoel dat ontspannend werkt. Op gespannen plekken kan het gevoelig zijn. De zuigkracht wordt altijd afgestemd op wat voor jou prettig is.',
    },
    {
      question: 'Hoe lang blijven de plekken zichtbaar?',
      answer:
        'Meestal enkele dagen tot ongeveer een week. Hoe donkerder de verkleuring, hoe langer het vaak duurt. Heb je binnenkort een gelegenheid waarbij je rug of schouders zichtbaar zijn, geef dat dan van tevoren aan.',
    },
    {
      question: 'Kan cupping gecombineerd worden met acupunctuur?',
      answer:
        'Ja, dat gebeurt vaak. Acupunctuur richt zich op het onderliggende patroon, cupping op de spanning in de spieren. Lees meer over [acupunctuur](/acupunctuur) of bekijk de [klachten](/klachten) waarbij dit wordt ingezet.',
    },
    {
      question: 'Is er onderzoek gedaan naar cupping?',
      answer:
        'Er is onderzoek gedaan naar cupping bij onder meer nek- en rugpijn. Een deel van de studies beschrijft minder pijn en stijfheid, maar de kwaliteit van het onderzoek loopt uiteen. De mate waarin mensen verandering ervaren verschilt per persoon.',
    },
  ],
  cta: {
    title: 'Spanning die maar niet loslaat?',
    text: 'Boek een cuppingbehandeling of combineer cupping met acupunctuur. Tijdens de afspraak wordt gekeken wat voor jou het meest passend is.',
  },
  duration: '60 minuten',
  price: '€ 60',
  bookingUrl: BOOKING.cupping,
};

const GUASHA_NL: TreatmentContent = {
  slug: 'guasha',
  glyph: '刮痧',
  name: 'Guasha',
  metaTitle: 'Guasha in Tilburg | Bai Kang TCM',
  metaDescription:
    'Guasha is een traditionele Chinese schraaptechniek waarbij met een glad instrument over de geoliede huid wordt gestreken. Ingezet bij spierspanning, stijfheid en vastzittend bindweefsel.',
  h1: 'Guasha',
  heroIntro:
    'Schouders die steeds hoger komen te staan, een nek die stijf aanvoelt of spieren die na een drukke periode blijven vastzitten. Bij guasha wordt met een glad instrument in lange halen over de geoliede huid gestreken. Een eenvoudige, eeuwenoude techniek die de doorbloeding stimuleert en spanning uit het weefsel haalt.',
  image: {
    src: '/images/behandelvormen/guasha.webp',
    alt: 'Guashabehandeling op de schouder met een glad schraapinstrument',
  },
  about: {
    title: 'Wat is guasha?',
    paragraphs: [
      'Guasha betekent letterlijk schrapen (gua) van sha. Met sha worden de kleine rode puntjes bedoeld die tijdens de behandeling op de huid verschijnen. Met een glad instrument van bijvoorbeeld jade, hoorn of roestvrij staal wordt in korte of lange halen over de geoliede huid gestreken, meestal op de rug, de nek, de schouders of de ledematen.',
      'Door het schrapen neemt de doorbloeding in het gebied plaatselijk toe. Vastzittend bindweefsel wordt losser en spierspanning kan afnemen. De rode verkleuring die ontstaat, is een reactie van de kleine bloedvaatjes en verdwijnt meestal binnen twee tot vier dagen.',
      'Bij Bai Kang gaat het om guasha op het lichaam, gericht op spanning en stijfheid. Dat is iets anders dan de zachte gezichtsguasha die je uit de cosmetica kent.',
    ],
  },
  background: {
    eyebrow: 'Traditionele Chinese Geneeskunde',
    title: 'Guasha vanuit de Chinese geneeskunde',
    paragraphs: [
      'Binnen de Traditionele Chinese Geneeskunde wordt guasha ingezet om stagnatie van Qi en Bloed in de oppervlakkige lagen van het lichaam op te heffen. Volgens de klassieke opvatting kan zich daar Wind, Koude of Hitte vastzetten, bijvoorbeeld aan het begin van een verkoudheid of na langdurige spanning. Door te schrapen wordt die stagnatie naar de oppervlakte gebracht en kan het gebied weer vrijer stromen.',
      'Guasha wordt vaak gecombineerd met acupunctuur of cupping. Het is ook geschikt voor mensen die liever geen naalden hebben en toch iets willen doen aan hardnekkige spierspanning.',
    ],
  },
  indications: {
    title: 'Wanneer wordt guasha ingezet?',
    intro:
      'Guasha wordt vooral toegepast bij spanning en stijfheid in spieren en bindweefsel. Veelvoorkomende redenen om te komen zijn:',
    items: [
      'Stijve, gespannen nek en schouders',
      'Spanning in de bovenrug, bijvoorbeeld door beeldschermwerk',
      'Spierpijn en stijfheid na inspanning',
      'Spanningshoofdpijn die uit nek en schouders komt',
      'Een stroef of zwaar gevoel in de spieren',
      'Als aanvulling op acupunctuur bij pijn- en spanningsklachten',
    ],
  },
  session: {
    title: 'Hoe verloopt een guashabehandeling?',
    intro:
      'Een behandeling duurt ongeveer een uur en begint met een kort gesprek over je klachten, je gezondheid en eventuele medicatie.',
    steps: [
      'Je ligt ontspannen op de behandeltafel. Alleen het te behandelen gebied, zoals de rug, de nek of de schouders, wordt ontbloot.',
      'De huid wordt ingesmeerd met olie, zodat het instrument soepel over de huid glijdt.',
      'Met het instrument wordt in vaste halen over de huid gestreken, in de richting van de spiervezels en energiebanen. De druk wordt afgestemd op wat voor jou prettig is.',
      'Waar passend wordt de behandeling gecombineerd met acupunctuur, laseracupunctuur of cupping.',
    ],
    afterNote:
      'Drink na de behandeling voldoende water en houd het behandelde gebied warm en uit de wind. Vermijd die dag een warm bad, sauna of zware inspanning. De rode verkleuring trekt binnen enkele dagen vanzelf weg.',
  },
  safetyNote:
    'Guasha is niet geschikt bij huidaandoeningen, wondjes, moedervlekken of ontstekingen op de plek van behandeling, bij koorts, bij een bloedingsstoornis of het gebruik van bloedverdunners, en bij spataderen of trombose in het gebied. Bai Kang behandelt geen zwangere vrouwen. Laat pijnklachten die plotseling ontstaan, verergeren of samengaan met uitvalsverschijnselen eerst door je huisarts beoordelen. Guasha is een aanvulling op de reguliere zorg.',
  faqs: [
    {
      question: 'Doet guasha pijn?',
      answer:
        'Guasha voelt stevig aan, vooral op gespannen plekken. De meeste mensen ervaren het als een prettige, diepe druk. De intensiteit wordt altijd afgestemd op wat voor jou prettig is.',
    },
    {
      question: 'Waarom wordt de huid rood?',
      answer:
        'De rode puntjes, sha genoemd, zijn een reactie van de kleine bloedvaatjes op het schrapen. Ze doen meestal geen pijn en verdwijnen binnen twee tot vier dagen. Hoe meer spanning er in een gebied zit, hoe duidelijker de verkleuring vaak is.',
    },
    {
      question: 'Wat is het verschil met cupping?',
      answer:
        'Bij guasha wordt over de huid geschraapt, bij cupping wordt de huid met zuigkracht opgetild. Beide stimuleren de doorbloeding en maken spanning los. Welke techniek het beste past, hangt af van de plek en het soort spanning. Lees ook over [cupping](/behandelvormen/cupping).',
    },
    {
      question: 'Is guasha hetzelfde als gezichtsguasha?',
      answer:
        'Nee. Gezichtsguasha is een zachte, cosmetische techniek. Bij Bai Kang wordt guasha op het lichaam toegepast, gericht op spierspanning en stijfheid.',
    },
  ],
  cta: {
    title: 'Vastzittende spieren?',
    text: 'Boek een guashabehandeling of combineer guasha met acupunctuur. Tijdens de afspraak wordt gekeken wat voor jou het meest passend is.',
  },
  duration: '60 minuten',
  price: '€ 60',
  bookingUrl: BOOKING.guasha,
};

const REIKI_NL: TreatmentContent = {
  slug: 'reiki',
  glyph: '霊気',
  name: 'Reiki',
  metaTitle: 'Reiki in Tilburg | Bai Kang TCM',
  metaDescription:
    'Reiki is een oorspronkelijk Japanse behandelmethode met zachte handoplegging, gericht op diepe ontspanning, rust en herstel. Je blijft gekleed en ligt comfortabel op de behandeltafel.',
  h1: 'Reiki',
  heroIntro:
    'Soms heeft het lichaam vooral rust nodig. Geen naalden, geen druk, maar een uur waarin je helemaal mag ontspannen. Reiki is een zachte, Japanse behandelmethode waarbij de handen licht op of net boven het lichaam worden gelegd. Veel mensen ervaren het als een moment van diepe rust, waarin spanning kan wegzakken en het lichaam weer ruimte krijgt om te herstellen.',
  image: {
    src: '/images/behandelvormen/reiki.webp',
    alt: 'Handen rusten zacht naast het hoofd tijdens een reikibehandeling',
    position: '40% center',
  },
  about: {
    title: 'Wat is reiki?',
    paragraphs: [
      'Reiki is een behandelmethode die begin twintigste eeuw in Japan werd ontwikkeld door Mikao Usui. Het woord is samengesteld uit rei, universeel of spiritueel, en ki, levensenergie. Ki is hetzelfde begrip als Qi in de Chinese geneeskunde.',
      'Tijdens een reikibehandeling worden de handen in een vaste volgorde licht op of net boven verschillende delen van het lichaam gelegd, zoals het hoofd, de borst, de buik, de rug en de voeten. Er wordt niet gemasseerd of gemanipuleerd. Vanuit de reikitraditie ondersteunt de behandeling de vrije stroom van levensenergie en het natuurlijke zelfherstellend vermogen van het lichaam.',
      'Mensen beschrijven het vaak als warmte, tintelingen of een zwaar, ontspannen gevoel. Sommigen vallen tijdens de behandeling in slaap. Anderen merken vooral dat het hoofd stiller wordt.',
    ],
  },
  background: {
    eyebrow: 'Rust en balans',
    title: 'Reiki binnen Bái Kāng',
    paragraphs: [
      'Reiki sluit nauw aan bij de visie van de Chinese geneeskunde, waarin gezondheid wordt gezien als een vrije stroom van levensenergie en een balans tussen activiteit en rust. Waar acupunctuur werkt via specifieke punten en energiebanen, richt reiki zich op het geheel en op ontspanning.',
      'Patrick is opgeleid in reiki en zet het in als zelfstandige behandeling of als rustgevende afsluiting van een acupunctuurbehandeling. Reiki is geschikt voor mensen die gevoelig zijn voor prikkels, die liever geen naalden hebben, of die vooral behoefte hebben aan diepe ontspanning.',
    ],
  },
  principles: {
    eyebrow: 'Gokai',
    title: 'De vijf leefregels van reiki',
    intro:
      'Mikao Usui gaf zijn leerlingen vijf eenvoudige leefregels mee, de Gokai. Ze beginnen met de woorden ‘juist vandaag’: niet als strenge regels, maar als een uitnodiging om steeds opnieuw bij het moment van nu te beginnen.',
    items: [
      { original: '怒るな', text: 'Juist vandaag: wees niet boos.' },
      { original: '心配すな', text: 'Juist vandaag: maak je geen zorgen.' },
      { original: '感謝して', text: 'Juist vandaag: wees dankbaar.' },
      { original: '業をはげめ', text: 'Juist vandaag: doe je werk met toewijding.' },
      { original: '人に親切に', text: 'Juist vandaag: wees vriendelijk voor anderen.' },
    ],
    outro:
      'Usui raadde aan deze regels ’s ochtends en ’s avonds in stilte te herhalen, met de handen tegen elkaar voor de borst.',
  },
  indications: {
    title: 'Wanneer kiezen mensen voor reiki?',
    intro:
      'Reiki wordt vooral ingezet als ondersteuning bij ontspanning en herstel. Mensen komen bijvoorbeeld bij:',
    items: [
      'Stress, spanning en een hoofd dat niet tot rust komt',
      'Onrustig slapen',
      'Vermoeidheid en het gevoel leeg te zijn',
      'Emotioneel zware periodes',
      'Overprikkeling of gevoeligheid voor aanraking en druk',
      'De wens om op een zachte manier tot rust te komen',
    ],
  },
  session: {
    title: 'Hoe verloopt een reikibehandeling?',
    intro:
      'Een behandeling duurt ongeveer een uur en begint met een kort gesprek over hoe het met je gaat en wat je nodig hebt.',
    steps: [
      'Je blijft gekleed en ligt comfortabel op de behandeltafel, eventueel met een deken.',
      'De handen worden in een rustige volgorde licht op of net boven het lichaam gelegd, van het hoofd tot de voeten. Wil je liever niet aangeraakt worden, dan kan de hele behandeling zonder aanraking.',
      'Je hoeft niets te doen. Je mag je ogen sluiten, ontspannen en eventueel in slaap vallen.',
      'Na afloop is er ruimte om rustig bij te komen en te delen wat je hebt ervaren.',
    ],
    afterNote:
      'Neem na de behandeling even de tijd voordat je weer aan de slag gaat, en drink voldoende water. Sommige mensen voelen zich direct licht en ontspannen, anderen vooral moe en toe aan rust. Beide zijn normale reacties.',
  },
  safetyNote:
    'Reiki is een zachte, ontspannende behandeling en geen medische behandeling. Het vervangt geen diagnose of behandeling door je huisarts, specialist of psycholoog. Stop niet met voorgeschreven medicatie zonder overleg met je arts. Bij ernstige psychische klachten is begeleiding door een huisarts of psycholoog nodig. Bai Kang behandelt geen zwangere vrouwen.',
  faqs: [
    {
      question: 'Moet ik me uitkleden voor reiki?',
      answer:
        'Nee. Je blijft volledig gekleed. Het is wel prettig om comfortabele kleding te dragen.',
    },
    {
      question: 'Moet ik ergens in geloven om reiki te ervaren?',
      answer:
        'Nee. Je hoeft nergens in te geloven. Veel mensen komen vooral voor de rust en ontspanning, en ervaren de behandeling op hun eigen manier.',
    },
    {
      question: 'Is er wetenschappelijk bewijs voor reiki?',
      answer:
        'Er is onderzoek gedaan naar reiki, vooral naar ontspanning, stress en welbevinden. De resultaten zijn wisselend en de kwaliteit van de studies loopt uiteen. Reiki wordt daarom gezien als een aanvullende, ontspannende behandeling en niet als een medische behandeling.',
    },
    {
      question: 'Kan reiki gecombineerd worden met acupunctuur?',
      answer:
        'Ja. Reiki kan als rustgevende afsluiting van een [acupunctuurbehandeling](/acupunctuur) worden ingezet, of als losse behandeling. Bespreek tijdens de afspraak wat voor jou het meest passend is.',
    },
  ],
  cta: {
    title: 'Toe aan een moment van rust?',
    text: 'Boek een reikibehandeling en neem een uur de tijd om helemaal tot rust te komen.',
  },
  duration: '60 minuten',
  price: '€ 60',
  bookingUrl: BOOKING.reiki,
};

/* =======================================================================
   ENGLISH (EN)
   ======================================================================= */

const CUPPING_EN: TreatmentContent = {
  ...CUPPING_NL,
  name: 'Cupping',
  metaTitle: 'Cupping Therapy in Tilburg | Bai Kang TCM',
  metaDescription:
    'Cupping is a traditional Chinese treatment in which cups with suction are placed on the skin. Used for muscle tension, stiffness and sluggish circulation.',
  h1: 'Cupping',
  heroIntro:
    'A stiff neck that just will not loosen, a back that locks up after long days at a screen, or muscles that keep pulling after exercise. In cupping, cups with gentle suction are placed on the skin. The skin and underlying tissue are lifted slightly, rather than pressed as in massage.',
  image: { ...CUPPING_NL.image, alt: 'Glass cups being placed on the back during a cupping treatment' },
  about: {
    title: 'What is cupping?',
    paragraphs: [
      'Cupping, Ba Guan in Chinese, is an age-old treatment from Traditional Chinese Medicine. Glass or silicone cups are placed on the skin and held in place by a vacuum. The suction lifts the skin, connective tissue (fascia) and upper muscle layers. This locally increases circulation in the area and can help release stuck tension.',
      'The cups can stay in one place, or be moved over the skin with some oil. The latter is called sliding cupping and feels like a deep, pulling massage. Cupping is mainly applied to the back, shoulders, neck and legs.',
      'After treatment, round red to purple marks are often visible where the cups were. These are not bruises from a knock, but a reaction of the small blood vessels to the suction. They are usually painless and fade within a few days to about a week.',
    ],
  },
  background: {
    eyebrow: 'Traditional Chinese Medicine',
    title: 'Cupping from a TCM perspective',
    paragraphs: [
      'In Traditional Chinese Medicine, pain and stiffness are often seen as stagnation: Qi and Blood do not flow freely through an area. Cupping is used to support that flow and to expel Cold, Wind or Damp from the muscles, for example with a stiff neck after a draught or a back that locks up in cold, damp weather.',
      'At Bai Kang, cupping is usually combined with acupuncture or laser acupuncture. Acupuncture addresses the underlying pattern, cupping the tension in the muscles themselves. Cupping can also be booked as a separate treatment.',
    ],
  },
  indications: {
    title: 'When is cupping used?',
    intro:
      'Cupping is mainly used for musculoskeletal complaints and tension. Common reasons to come are:',
    items: [
      'Tense or stiff muscles in the neck, shoulders and back',
      'Back pain and a locked lower back',
      'Muscle soreness and stiffness after exercise',
      'Tension from stress or prolonged sitting',
      'A cold, heavy or sluggish feeling in the muscles',
      'As a complement to acupuncture for pain',
    ],
  },
  session: {
    title: 'What happens during a cupping treatment?',
    intro:
      'A treatment takes about an hour and always starts with a short conversation about your complaints, your health and any medication.',
    steps: [
      'You lie relaxed on the treatment table, usually on your stomach. Only the area to be treated, such as the back or shoulders, is uncovered.',
      'The cups are placed on the skin and held in place by a vacuum. The suction is adjusted to what feels comfortable for you.',
      'The cups stay in place for a few minutes or are moved over the skin with oil. You feel a pulling, warm sensation that most people find relaxing.',
      'Where appropriate, the treatment is combined with acupuncture, laser acupuncture or guasha.',
    ],
    afterNote:
      'Drink enough water after treatment and keep the treated area warm for the rest of the day. Avoid a hot bath, sauna or heavy exertion that day. The marks from the cups fade on their own.',
  },
  safetyNote:
    'Cupping is not suitable with skin conditions, wounds or inflammation at the treatment site, with fever, with a bleeding disorder or when using blood thinners, or with varicose veins or thrombosis in the area. Bai Kang does not treat pregnant women. Have pain that starts suddenly, worsens or comes with neurological symptoms assessed by your GP first. Cupping is a complement to conventional care.',
  faqs: [
    {
      question: 'Does cupping hurt?',
      answer:
        'Most people experience cupping as a firm, pulling sensation that is relaxing. Tense areas can feel sensitive. The suction is always adjusted to what feels comfortable for you.',
    },
    {
      question: 'How long do the marks stay visible?',
      answer:
        'Usually a few days to about a week. The darker the mark, the longer it often takes. If you have an occasion soon where your back or shoulders will be visible, let us know in advance.',
    },
    {
      question: 'Can cupping be combined with acupuncture?',
      answer:
        'Yes, that is common. Acupuncture addresses the underlying pattern, cupping the tension in the muscles. Read more about [acupuncture](/acupunctuur) or see the [complaints](/klachten) for which it is used.',
    },
    {
      question: 'Has cupping been researched?',
      answer:
        'Cupping has been researched for neck and back pain, among other things. Some studies describe less pain and stiffness, but the quality of the research varies. The degree of change people experience differs per person.',
    },
  ],
  cta: {
    title: 'Tension that will not let go?',
    text: 'Book a cupping treatment or combine cupping with acupuncture. During the appointment we look at what suits you best.',
  },
  duration: '60 minutes',
};

const GUASHA_EN: TreatmentContent = {
  ...GUASHA_NL,
  metaTitle: 'Guasha in Tilburg | Bai Kang TCM',
  metaDescription:
    'Guasha is a traditional Chinese scraping technique in which a smooth tool is stroked over oiled skin. Used for muscle tension, stiffness and tight connective tissue.',
  heroIntro:
    'Shoulders creeping up towards your ears, a neck that feels stiff, or muscles that stay locked after a busy period. In guasha, a smooth tool is stroked in long strokes over oiled skin. A simple, age-old technique that stimulates circulation and releases tension from the tissue.',
  image: { ...GUASHA_NL.image, alt: 'Guasha treatment on the shoulder with a smooth scraping tool' },
  about: {
    title: 'What is guasha?',
    paragraphs: [
      'Guasha literally means scraping (gua) of sha. Sha refers to the small red dots that appear on the skin during treatment. A smooth tool made of, for example, jade, horn or stainless steel is stroked in short or long strokes over the oiled skin, usually on the back, neck, shoulders or limbs.',
      'Scraping locally increases circulation in the area. Tight connective tissue becomes looser and muscle tension can ease. The redness that appears is a reaction of the small blood vessels and usually fades within two to four days.',
      'At Bai Kang this is body guasha, aimed at tension and stiffness. That is different from the gentle facial guasha known from cosmetics.',
    ],
  },
  background: {
    eyebrow: 'Traditional Chinese Medicine',
    title: 'Guasha from a TCM perspective',
    paragraphs: [
      'In Traditional Chinese Medicine, guasha is used to release stagnation of Qi and Blood in the superficial layers of the body. According to the classical view, Wind, Cold or Heat can settle there, for example at the start of a cold or after prolonged tension. Scraping brings that stagnation to the surface so the area can flow more freely again.',
      'Guasha is often combined with acupuncture or cupping. It is also suitable for people who prefer not to have needles but still want to address persistent muscle tension.',
    ],
  },
  indications: {
    title: 'When is guasha used?',
    intro:
      'Guasha is mainly used for tension and stiffness in muscles and connective tissue. Common reasons to come are:',
    items: [
      'Stiff, tense neck and shoulders',
      'Tension in the upper back, for example from screen work',
      'Muscle soreness and stiffness after exertion',
      'Tension headaches originating from the neck and shoulders',
      'A sluggish or heavy feeling in the muscles',
      'As a complement to acupuncture for pain and tension',
    ],
  },
  session: {
    title: 'What happens during a guasha treatment?',
    intro:
      'A treatment takes about an hour and starts with a short conversation about your complaints, your health and any medication.',
    steps: [
      'You lie relaxed on the treatment table. Only the area to be treated, such as the back, neck or shoulders, is uncovered.',
      'The skin is coated with oil so the tool glides smoothly over it.',
      'The tool is stroked over the skin in steady strokes, following the muscle fibres and meridians. The pressure is adjusted to what feels comfortable for you.',
      'Where appropriate, the treatment is combined with acupuncture, laser acupuncture or cupping.',
    ],
    afterNote:
      'Drink enough water after treatment and keep the treated area warm and out of the wind. Avoid a hot bath, sauna or heavy exertion that day. The redness fades on its own within a few days.',
  },
  safetyNote:
    'Guasha is not suitable with skin conditions, wounds, moles or inflammation at the treatment site, with fever, with a bleeding disorder or when using blood thinners, or with varicose veins or thrombosis in the area. Bai Kang does not treat pregnant women. Have pain that starts suddenly, worsens or comes with neurological symptoms assessed by your GP first. Guasha is a complement to conventional care.',
  faqs: [
    {
      question: 'Does guasha hurt?',
      answer:
        'Guasha feels firm, especially on tense areas. Most people experience it as a pleasant, deep pressure. The intensity is always adjusted to what feels comfortable for you.',
    },
    {
      question: 'Why does the skin turn red?',
      answer:
        'The red dots, called sha, are a reaction of the small blood vessels to the scraping. They are usually painless and fade within two to four days. The more tension in an area, the more visible the redness often is.',
    },
    {
      question: 'What is the difference with cupping?',
      answer:
        'Guasha scrapes over the skin, cupping lifts the skin with suction. Both stimulate circulation and release tension. Which technique suits best depends on the area and the type of tension. Read also about [cupping](/behandelvormen/cupping).',
    },
    {
      question: 'Is guasha the same as facial guasha?',
      answer:
        'No. Facial guasha is a gentle, cosmetic technique. At Bai Kang, guasha is applied to the body, aimed at muscle tension and stiffness.',
    },
  ],
  cta: {
    title: 'Stuck muscles?',
    text: 'Book a guasha treatment or combine guasha with acupuncture. During the appointment we look at what suits you best.',
  },
  duration: '60 minutes',
};

const REIKI_EN: TreatmentContent = {
  ...REIKI_NL,
  metaTitle: 'Reiki in Tilburg | Bai Kang TCM',
  metaDescription:
    'Reiki is an originally Japanese treatment using gentle laying on of hands, aimed at deep relaxation, calm and recovery. You stay clothed and lie comfortably on the treatment table.',
  heroIntro:
    'Sometimes the body mainly needs rest. No needles, no pressure, but an hour in which you can fully relax. Reiki is a gentle Japanese treatment in which the hands are placed lightly on or just above the body. Many people experience it as a moment of deep calm, in which tension can sink away and the body gets room to recover.',
  image: { ...REIKI_NL.image, alt: 'Hands resting gently beside the head during a reiki treatment' },
  about: {
    title: 'What is reiki?',
    paragraphs: [
      'Reiki is a treatment method developed in Japan in the early twentieth century by Mikao Usui. The word combines rei, universal or spiritual, and ki, life energy. Ki is the same concept as Qi in Chinese medicine.',
      'During a reiki treatment, the hands are placed in a set sequence lightly on or just above different parts of the body, such as the head, chest, abdomen, back and feet. There is no massage or manipulation. In the reiki tradition, the treatment supports the free flow of life energy and the body’s natural capacity for self-healing.',
      'People often describe warmth, tingling or a heavy, relaxed feeling. Some fall asleep during the treatment. Others mainly notice that the mind becomes quieter.',
    ],
  },
  background: {
    eyebrow: 'Rest and balance',
    title: 'Reiki at Bái Kāng',
    paragraphs: [
      'Reiki fits closely with the view of Chinese medicine, in which health is seen as a free flow of life energy and a balance between activity and rest. Where acupuncture works through specific points and meridians, reiki focuses on the whole and on relaxation.',
      'Patrick is trained in reiki and uses it as a stand-alone treatment or as a calming close to an acupuncture treatment. Reiki suits people who are sensitive to stimuli, who prefer not to have needles, or who mainly need deep relaxation.',
    ],
  },
  principles: {
    eyebrow: 'Gokai',
    title: 'The five reiki principles',
    intro:
      'Mikao Usui gave his students five simple principles, the Gokai. They begin with the words ‘just for today’: not as strict rules, but as an invitation to start again and again in the present moment.',
    items: [
      { original: '怒るな', text: 'Just for today: do not be angry.' },
      { original: '心配すな', text: 'Just for today: do not worry.' },
      { original: '感謝して', text: 'Just for today: be grateful.' },
      { original: '業をはげめ', text: 'Just for today: do your work with dedication.' },
      { original: '人に親切に', text: 'Just for today: be kind to others.' },
    ],
    outro:
      'Usui advised repeating these principles in silence morning and evening, with the hands held together in front of the chest.',
  },
  indications: {
    title: 'When do people choose reiki?',
    intro:
      'Reiki is mainly used as support for relaxation and recovery. People come, for example, with:',
    items: [
      'Stress, tension and a mind that will not settle',
      'Restless sleep',
      'Fatigue and a feeling of being drained',
      'Emotionally difficult periods',
      'Overstimulation or sensitivity to touch and pressure',
      'The wish to come to rest in a gentle way',
    ],
  },
  session: {
    title: 'What happens during a reiki treatment?',
    intro:
      'A treatment takes about an hour and starts with a short conversation about how you are and what you need.',
    steps: [
      'You stay clothed and lie comfortably on the treatment table, with a blanket if you like.',
      'The hands are placed in a calm sequence lightly on or just above the body, from head to feet. If you prefer not to be touched, the whole treatment can be done without touch.',
      'You do not have to do anything. You can close your eyes, relax and even fall asleep.',
      'Afterwards there is room to come round quietly and share what you experienced.',
    ],
    afterNote:
      'Take a moment after the treatment before getting back to work, and drink enough water. Some people feel light and relaxed straight away, others mainly tired and in need of rest. Both are normal reactions.',
  },
  safetyNote:
    'Reiki is a gentle, relaxing treatment and not a medical treatment. It does not replace diagnosis or treatment by your GP, specialist or psychologist. Do not stop prescribed medication without consulting your doctor. Serious mental health complaints require guidance from a GP or psychologist. Bai Kang does not treat pregnant women.',
  faqs: [
    {
      question: 'Do I need to undress for reiki?',
      answer: 'No. You stay fully clothed. Comfortable clothing is recommended.',
    },
    {
      question: 'Do I need to believe in anything to experience reiki?',
      answer:
        'No. You do not need to believe in anything. Many people come mainly for the calm and relaxation, and experience the treatment in their own way.',
    },
    {
      question: 'Is there scientific evidence for reiki?',
      answer:
        'Reiki has been researched, mainly for relaxation, stress and wellbeing. The results are mixed and the quality of the studies varies. Reiki is therefore seen as a complementary, relaxing treatment and not as a medical treatment.',
    },
    {
      question: 'Can reiki be combined with acupuncture?',
      answer:
        'Yes. Reiki can be used as a calming close to an [acupuncture treatment](/acupunctuur), or as a separate treatment. Discuss during the appointment what suits you best.',
    },
  ],
  cta: {
    title: 'Ready for a moment of rest?',
    text: 'Book a reiki treatment and take an hour to come fully to rest.',
  },
  duration: '60 minutes',
};

/* =======================================================================
   HELPERS
   ======================================================================= */

const TREATMENTS_NL: Record<string, TreatmentContent> = {
  cupping: CUPPING_NL,
  guasha: GUASHA_NL,
  reiki: REIKI_NL,
};

const TREATMENTS_EN: Record<string, TreatmentContent> = {
  cupping: CUPPING_EN,
  guasha: GUASHA_EN,
  reiki: REIKI_EN,
};

export const TREATMENT_SLUGS = Object.keys(TREATMENTS_NL);

export function getTreatment(slug: string, locale: string = 'nl'): TreatmentContent | undefined {
  return (locale === 'en' ? TREATMENTS_EN : TREATMENTS_NL)[slug];
}

export function getTreatments(locale: string = 'nl'): TreatmentContent[] {
  const set = locale === 'en' ? TREATMENTS_EN : TREATMENTS_NL;
  return TREATMENT_SLUGS.map((s) => set[s]);
}
