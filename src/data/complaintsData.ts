export interface ComplaintItem {
  id: string;
  title: string;
  slug: string;
  hasDedicatedPage: boolean;
  shortDesc?: string;
  externalUrl?: string;
  /**
   * Subpagina's onder een tussenpagina (bijv. Spier- en gewrichtsklachten).
   * Ze verschijnen niet in de categorietegel op het hoofdoverzicht,
   * maar wel op de tussenpagina zelf en krijgen een eigen route zodra hasDedicatedPage true is.
   */
  children?: ComplaintItem[];
  /** Slugs van verwante klachten voor een "Zie ook"-blok. */
  relatedSlugs?: string[];
}

export interface ComplaintCategory {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  complaints: ComplaintItem[];
}

/* =======================================================================
   NEDERLANDSE CATEGORIEËN & KLACHTEN (NL)
   ======================================================================= */
export const COMPLAINT_CATEGORIES_NL: ComplaintCategory[] = [
  {
    id: 'pijn',
    title: 'Pijn & spanning',
    subtitle: 'Lichamelijke pijn, stijfheid en spanning',
    intro:
      'Lichamelijke pijn, stijfheid en spanning kunnen verschillende oorzaken hebben. Tijdens een behandeling kijken we niet alleen naar de plek waar je klachten ervaart, maar ook naar het patroon eromheen.',
    complaints: [
      {
        id: 'rugpijn',
        title: 'Rugpijn',
        slug: 'rugpijn',
        hasDedicatedPage: true,
        shortDesc: 'Onderrugklachten, stijfheid of aanhoudende spierspanning in de rug.',
      },
      {
        id: 'nekklachten',
        title: 'Nekklachten',
        slug: 'nekklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['schouderklachten', 'hoofdpijn'],
        shortDesc: 'Stijve nek, spierkrampen, bewegingsbeperking en klachten door werkhouding of stress.',
      },
      {
        id: 'schouderklachten',
        title: 'Schouderklachten',
        slug: 'schouderklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['nekklachten', 'frozen-shoulder', 'spier-gewrichtsklachten'],
        shortDesc: 'Pijn bij heffen of draaien, vastzittende schouderbladen of overbelaste pezen.',
      },
      {
        id: 'hoofdpijn',
        title: 'Hoofdpijn',
        slug: 'hoofdpijn',
        hasDedicatedPage: true,
        relatedSlugs: ['migraine', 'nekklachten'],
        shortDesc: 'Spanningshoofdpijn, een drukkende band om het hoofd of hoofdpijn vanuit nek en schouders.',
      },
      {
        id: 'migraine',
        title: 'Migraine',
        slug: 'migraine',
        hasDedicatedPage: true,
        relatedSlugs: ['hoofdpijn'],
        shortDesc: 'Aanvallen van bonzende pijn, misselijkheid of gevoeligheid voor licht en geluid.',
      },
      {
        id: 'spier-gewrichtsklachten',
        title: 'Spier- en gewrichtsklachten',
        slug: 'spier-gewrichtsklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['rugpijn', 'nekklachten', 'schouderklachten'],
        shortDesc: 'Overbelasting, peesklachten, stijve gewrichten of belemmeringen in beweging.',
        children: [
          {
            id: 'frozen-shoulder',
            title: 'Frozen shoulder',
            slug: 'frozen-shoulder',
            hasDedicatedPage: true,
            relatedSlugs: ['schouderklachten', 'nekklachten', 'peesklachten'],
            shortDesc: 'Een stijve, pijnlijke schouder waarbij heffen en draaien steeds moeilijker gaat.',
          },
          {
            id: 'knieklachten',
            title: 'Knieklachten',
            slug: 'knieklachten',
            hasDedicatedPage: true,
            relatedSlugs: ['artrose', 'peesklachten'],
            shortDesc: 'Pijn of stijfheid bij traplopen, hurken of na langdurig zitten.',
          },
          {
            id: 'artrose',
            title: 'Artrose & gewrichtsklachten',
            slug: 'artrose',
            hasDedicatedPage: true,
            relatedSlugs: ['knieklachten', 'spier-gewrichtsklachten'],
            shortDesc: 'Stijve, pijnlijke gewrichten, vooral na rust of bij het opstarten.',
          },
          {
            id: 'tennisarm',
            title: 'Tennisarm',
            slug: 'tennisarm',
            hasDedicatedPage: true,
            relatedSlugs: ['rsi', 'peesklachten'],
            shortDesc: 'Pijn aan de buitenkant van de elleboog bij tillen, grijpen of typen.',
          },
          {
            id: 'rsi',
            title: 'RSI & carpaletunnelsyndroom',
            slug: 'rsi',
            hasDedicatedPage: true,
            relatedSlugs: ['tennisarm', 'nekklachten'],
            shortDesc: 'Pijn, tintelingen of een slap gevoel in nek, arm, pols of hand door repeterende belasting.',
          },
          {
            id: 'peesklachten',
            title: 'Peesklachten & sportblessures',
            slug: 'peesklachten',
            hasDedicatedPage: true,
            relatedSlugs: ['frozen-shoulder', 'tennisarm', 'knieklachten'],
            shortDesc: 'Overbelaste pezen, zoals bij hielspoor of de achillespees, en blessures door sport.',
          },
        ],
      },
    ],
  },
  {
    id: 'stress',
    title: 'Stress & slaap',
    subtitle: 'Stress, spanning en slaapproblemen',
    intro:
      'Wanneer spanning zich langere tijd opbouwt, kan het lastig zijn om tot rust te komen. Acupunctuur kan worden ingezet om het lichaam te ondersteunen bij het hervinden van ontspanning en rust in het dagelijks ritme.',
    complaints: [
      {
        id: 'stress-spanning',
        title: 'Stress & spanning',
        slug: 'stress',
        hasDedicatedPage: false,
        shortDesc: 'Het gevoel continu "aan" te staan, innerlijke spanning en moeite met loslaten.',
      },
      {
        id: 'slaapproblemen',
        title: 'Slaapproblemen',
        slug: 'slaapproblemen',
        hasDedicatedPage: false,
        shortDesc: 'Moeilijk inslapen, onrustig slapen, vaak wakker worden of niet uitgerust opstaan.',
      },
      {
        id: 'onrust-overprikkeling',
        title: 'Onrust & overprikkeling',
        slug: 'onrust',
        hasDedicatedPage: false,
        shortDesc: 'Gevoeligheid voor externe prikkels, een vol hoofd en emotionele onrust.',
      },
    ],
  },
  {
    id: 'energie',
    title: 'Energie & herstel',
    subtitle: 'Vitaliteit en veerkracht',
    intro:
      'Wanneer je structureel te weinig energie ervaart of moeizaam herstelt, kijken we naar jouw algehele balans en leefpatroon. Acupunctuur kan ondersteuning bieden om het herstelproces op een natuurlijke wijze te begeleiden.',
    complaints: [
      {
        id: 'vermoeidheid',
        title: 'Vermoeidheid',
        slug: 'vermoeidheid',
        hasDedicatedPage: false,
        shortDesc: 'Aanhoudende moeheid die niet vanzelf verdwijnt met een nacht slaap.',
      },
      {
        id: 'weinig-energie',
        title: 'Weinig energie',
        slug: 'weinig-energie',
        hasDedicatedPage: false,
        shortDesc: 'Het gevoel door je reserves heen te zijn en moeite om de dag energiek door te komen.',
      },
      {
        id: 'herstel-veerkracht',
        title: 'Herstel & veerkracht',
        slug: 'herstel-veerkracht',
        hasDedicatedPage: false,
        shortDesc: 'Ondersteuning van het lichaam na een intensieve periode, overbelasting of ziekte.',
      },
    ],
  },
  {
    id: 'maag-darmen',
    title: 'Maag & darmen',
    subtitle: 'Spijsvertering en buikklachten',
    intro:
      'Binnen de Traditionele Chinese Geneeskunde wordt het spijsverteringssysteem gezien als een belangrijke basis voor je algehele welbevinden. We onderzoeken welke factoren bijdragen aan de onrust in de buik.',
    complaints: [
      {
        id: 'opgeblazen-gevoel',
        title: 'Opgeblazen gevoel',
        slug: 'opgeblazen-gevoel',
        hasDedicatedPage: false,
        shortDesc: 'Een gespannen, vol of zwaar gevoel in de buik na het eten.',
      },
      {
        id: 'buikklachten',
        title: 'Buikklachten',
        slug: 'buikklachten',
        hasDedicatedPage: false,
        shortDesc: 'Zeurende krampen, een gevoelige buik of wisselende reacties op voeding.',
      },
      {
        id: 'spijsverteringsklachten',
        title: 'Spijsverteringsklachten',
        slug: 'spijsverteringsklachten',
        hasDedicatedPage: false,
        shortDesc: 'Trage vertering, maagklachten of algemeen terugkerend ongemak in het spijsverteringskanaal.',
      },
    ],
  },
  {
    id: 'vrouw-hormonaal',
    title: 'Vrouw & hormonale klachten',
    subtitle: 'Menstruatie, overgang en balans',
    intro:
      'Hormonale veranderingen kunnen merkbare invloed hebben op hoe je je voelt. Acupunctuur kan worden ingezet om het lichaam te begeleiden naar meer harmonie en comfort gedurende verschillende levensfasen.',
    complaints: [
      {
        id: 'menstruatieklachten',
        title: 'Menstruatieklachten',
        slug: 'menstruatieklachten',
        hasDedicatedPage: false,
        shortDesc: 'Buikkrampen, stemmingswisselingen, PMS of een onrustig verloop van de cyclus.',
      },
      {
        id: 'overgang',
        title: 'Overgang',
        slug: 'overgang',
        hasDedicatedPage: false,
        shortDesc: 'Opvliegers, nachtelijk transpireren, onrust en veranderingen in het slaappatroon.',
      },
      {
        id: 'hormonale-klachten',
        title: 'Hormonale klachten',
        slug: 'hormonale-klachten',
        hasDedicatedPage: false,
        shortDesc: 'Ondersteuning bij algehele hormonale disbalans en daarmee samenhangend welzijn.',
      },
    ],
  },
  {
    id: 'stoppen-roken-vapen',
    title: 'Stoppen met roken & vapen',
    subtitle: 'Ondersteuning bij stoppen',
    intro:
      'Bij Bai Kang wordt laseracupunctuur en oorschelpacupunctuur aangeboden als ondersteuning bij het stoppen met roken of vapen. Het traject richt zich op het bevorderen van rust en het doorbreken van de gewoonte.',
    complaints: [
      {
        id: 'stoppen-roken',
        title: 'Stoppen met roken',
        slug: 'stoppen-met-roken',
        hasDedicatedPage: false,
        shortDesc: 'Begeleiding en gerichte acupunctuurpunten ter ondersteuning bij het stoppen met tabak.',
      },
      {
        id: 'stoppen-vapen',
        title: 'Stoppen met vapen',
        slug: 'stoppen-met-vapen',
        hasDedicatedPage: false,
        shortDesc: 'Ondersteunende behandelingen bij het afbouwen en definitief loslaten van de e-sigaret.',
      },
    ],
  },
];

/* =======================================================================
   ENGELSE CATEGORIEËN & KLACHTEN (EN)
   ======================================================================= */
export const COMPLAINT_CATEGORIES_EN: ComplaintCategory[] = [
  {
    id: 'pijn',
    title: 'Pain & tension',
    subtitle: 'Physical pain, stiffness, and tension',
    intro:
      'Physical pain, stiffness, and tension can stem from various causes. During treatment, we look not only at where you feel discomfort, but also at the broader physical pattern surrounding it.',
    complaints: [
      {
        id: 'rugpijn',
        title: 'Back pain',
        slug: 'rugpijn',
        hasDedicatedPage: true,
        shortDesc: 'Lower back discomfort, morning stiffness, or persistent muscular tension.',
      },
      {
        id: 'nekklachten',
        title: 'Neck pain',
        slug: 'nekklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['schouderklachten', 'hoofdpijn'],
        shortDesc: 'Stiff neck, muscle spasms, restricted range of motion, and desk strain.',
      },
      {
        id: 'schouderklachten',
        title: 'Shoulder complaints',
        slug: 'schouderklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['nekklachten', 'frozen-shoulder', 'spier-gewrichtsklachten'],
        shortDesc: 'Discomfort when lifting or rotating, tight shoulder blades, or strained tendons.',
      },
      {
        id: 'hoofdpijn',
        title: 'Headaches',
        slug: 'hoofdpijn',
        hasDedicatedPage: true,
        relatedSlugs: ['migraine', 'nekklachten'],
        shortDesc: 'Tension headaches, a heavy feeling, or pressure radiating from the neck and shoulders.',
      },
      {
        id: 'migraine',
        title: 'Migraine',
        slug: 'migraine',
        hasDedicatedPage: true,
        relatedSlugs: ['hoofdpijn'],
        shortDesc: 'Throbbing attacks, nausea, or sensitivity to light and sound.',
      },
      {
        id: 'spier-gewrichtsklachten',
        title: 'Muscle & joint complaints',
        slug: 'spier-gewrichtsklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['rugpijn', 'nekklachten', 'schouderklachten'],
        shortDesc: 'Overuse, tendon irritation, stiff joints, or restricted mobility.',
        children: [
          {
            id: 'frozen-shoulder',
            title: 'Frozen shoulder',
            slug: 'frozen-shoulder',
            hasDedicatedPage: true,
            relatedSlugs: ['schouderklachten', 'nekklachten', 'peesklachten'],
            shortDesc: 'A stiff, painful shoulder where lifting and rotating become increasingly difficult.',
          },
          {
            id: 'knieklachten',
            title: 'Knee complaints',
            slug: 'knieklachten',
            hasDedicatedPage: true,
            relatedSlugs: ['artrose', 'peesklachten'],
            shortDesc: 'Pain or stiffness when climbing stairs, squatting, or after sitting for long periods.',
          },
          {
            id: 'artrose',
            title: 'Osteoarthritis & joint complaints',
            slug: 'artrose',
            hasDedicatedPage: true,
            relatedSlugs: ['knieklachten', 'spier-gewrichtsklachten'],
            shortDesc: 'Stiff, achy joints, especially after rest or when getting started.',
          },
          {
            id: 'tennisarm',
            title: 'Tennis elbow',
            slug: 'tennisarm',
            hasDedicatedPage: true,
            relatedSlugs: ['rsi', 'peesklachten'],
            shortDesc: 'Pain on the outside of the elbow when lifting, gripping, or typing.',
          },
          {
            id: 'rsi',
            title: 'RSI & carpal tunnel syndrome',
            slug: 'rsi',
            hasDedicatedPage: true,
            relatedSlugs: ['tennisarm', 'nekklachten'],
            shortDesc: 'Pain, tingling, or weakness in the neck, arm, wrist, or hand from repetitive strain.',
          },
          {
            id: 'peesklachten',
            title: 'Tendon complaints & sports injuries',
            slug: 'peesklachten',
            hasDedicatedPage: true,
            relatedSlugs: ['frozen-shoulder', 'tennisarm', 'knieklachten'],
            shortDesc: 'Overloaded tendons, such as heel spur or the Achilles tendon, and injuries from sport.',
          },
        ],
      },
    ],
  },
  {
    id: 'stress',
    title: 'Stress & sleep',
    subtitle: 'Stress, tension, and sleep difficulties',
    intro:
      'When tension builds up over time, settling down can become difficult. Acupuncture can be used to support your body in rediscovering relaxation and establishing a calmer daily rhythm.',
    complaints: [
      {
        id: 'stress-spanning',
        title: 'Stress & tension',
        slug: 'stress',
        hasDedicatedPage: false,
        shortDesc: 'Constantly feeling "on", internal restlessness, and difficulty letting go.',
      },
      {
        id: 'slaapproblemen',
        title: 'Sleep problems',
        slug: 'slaapproblemen',
        hasDedicatedPage: false,
        shortDesc: 'Trouble falling asleep, waking frequently, tossing and turning, or unrefreshing sleep.',
      },
      {
        id: 'onrust-overprikkeling',
        title: 'Restlessness & sensory overload',
        slug: 'onrust',
        hasDedicatedPage: false,
        shortDesc: 'Heightened sensitivity to stimuli, a crowded mind, and emotional restlessness.',
      },
    ],
  },
  {
    id: 'energie',
    title: 'Energy & recovery',
    subtitle: 'Vitality and resilience',
    intro:
      'When you consistently feel depleted or struggle to bounce back, we look at your overall equilibrium and daily habits. Acupuncture can offer gentle support to guide your natural recovery.',
    complaints: [
      {
        id: 'vermoeidheid',
        title: 'Fatigue',
        slug: 'vermoeidheid',
        hasDedicatedPage: false,
        shortDesc: 'Persistent tiredness that does not simply fade away with a single night of rest.',
      },
      {
        id: 'weinig-energie',
        title: 'Low energy',
        slug: 'weinig-energie',
        hasDedicatedPage: false,
        shortDesc: 'Feeling drained of reserves and struggling to navigate the day with vigor.',
      },
      {
        id: 'herstel-veerkracht',
        title: 'Recovery & resilience',
        slug: 'herstel-veerkracht',
        hasDedicatedPage: false,
        shortDesc: 'Supporting physical recovery following an intensive period, prolonged strain, or illness.',
      },
    ],
  },
  {
    id: 'maag-darmen',
    title: 'Stomach & digestion',
    subtitle: 'Digestion and abdominal unrest',
    intro:
      'In Traditional Chinese Medicine, the digestive system is seen as a central pillar of your daily vitality. We explore which lifestyle and physical factors contribute to gut discomfort.',
    complaints: [
      {
        id: 'opgeblazen-gevoel',
        title: 'Bloated feeling',
        slug: 'opgeblazen-gevoel',
        hasDedicatedPage: false,
        shortDesc: 'A tight, bloated, or heavy feeling in the abdomen after meals.',
      },
      {
        id: 'buikklachten',
        title: 'Abdominal discomfort',
        slug: 'buikklachten',
        hasDedicatedPage: false,
        shortDesc: 'Dull cramps, a sensitive stomach, or fluctuating reactions to certain foods.',
      },
      {
        id: 'spijsverteringsklachten',
        title: 'Digestive issues',
        slug: 'spijsverteringsklachten',
        hasDedicatedPage: false,
        shortDesc: 'Sluggish digestion, acid reflux, mild nausea, or recurring gut sensitivity.',
      },
    ],
  },
  {
    id: 'vrouw-hormonaal',
    title: 'Women & hormonal balance',
    subtitle: 'Menstruation, menopause, and balance',
    intro:
      'Hormonal changes can have a noticeable impact on how you feel. Acupuncture can be used to guide the body toward more harmony and comfort across different stages of life.',
    complaints: [
      {
        id: 'menstruatieklachten',
        title: 'Menstrual complaints',
        slug: 'menstruatieklachten',
        hasDedicatedPage: false,
        shortDesc: 'Cramping, mood changes, PMS, or an irregular and uncomfortable cycle.',
      },
      {
        id: 'overgang',
        title: 'Menopause',
        slug: 'overgang',
        hasDedicatedPage: false,
        shortDesc: 'Hot flashes, night sweats, inner unrest, and fluctuating sleep during perimenopause.',
      },
      {
        id: 'hormonale-klachten',
        title: 'Hormonal balance',
        slug: 'hormonale-klachten',
        hasDedicatedPage: false,
        shortDesc: 'Support for overall hormonal equilibrium and general physical well-being.',
      },
    ],
  },
  {
    id: 'stoppen-roken-vapen',
    title: 'Quitting smoking & vaping',
    subtitle: 'Support with cessation',
    intro:
      'At Bai Kang, laser acupuncture and ear acupuncture are offered to assist you in quitting tobacco or e-cigarettes. The treatment focuses on fostering calm and breaking the habit.',
    complaints: [
      {
        id: 'stoppen-roken',
        title: 'Quitting smoking',
        slug: 'stoppen-met-roken',
        hasDedicatedPage: false,
        shortDesc: 'Targeted acupuncture points to help manage restlessness and tobacco cravings.',
      },
      {
        id: 'stoppen-vapen',
        title: 'Quitting vaping',
        slug: 'stoppen-met-vapen',
        hasDedicatedPage: false,
        shortDesc: 'Supportive guidance and treatments to taper off and leave vaping behind.',
      },
    ],
  },
];

/* =======================================================================
   HELPER FUNCTIES VOOR DE ROUTING & NEXT.JS
   ======================================================================= */
export function getComplaintCategories(locale: string = 'nl'): ComplaintCategory[] {
  return locale === 'en' ? COMPLAINT_CATEGORIES_EN : COMPLAINT_CATEGORIES_NL;
}

/** Alle slugs met een eigen pagina, inclusief subpagina's. Slugs zijn gelijk in NL en EN. */
export function getDedicatedSlugs(): string[] {
  const slugs: string[] = [];
  for (const cat of COMPLAINT_CATEGORIES_NL) {
    for (const c of cat.complaints) {
      if (c.hasDedicatedPage && c.slug) {
        slugs.push(c.slug);
      }
      for (const child of c.children ?? []) {
        if (child.hasDedicatedPage && child.slug) {
          slugs.push(child.slug);
        }
      }
    }
  }
  return slugs;
}

export interface ComplaintLookup {
  complaint: ComplaintItem;
  category: ComplaintCategory;
  /** Alleen gevuld bij een subpagina: de tussenpagina erboven (voor broodkruimel en terugkoppeling). */
  parent?: ComplaintItem;
}

export function getComplaint(slug: string, locale: string = 'nl'): ComplaintLookup | undefined {
  const categories = getComplaintCategories(locale);
  for (const category of categories) {
    for (const complaint of category.complaints) {
      if (complaint.slug === slug) {
        return { complaint, category };
      }
      const child = complaint.children?.find((c) => c.slug === slug);
      if (child) {
        return { complaint: child, category, parent: complaint };
      }
    }
  }
  return undefined;
}

export function getComplaintBySlug(slug: string, locale: string = 'nl'): ComplaintItem | undefined {
  return getComplaint(slug, locale)?.complaint;
}

/** Subpagina's van een tussenpagina; toon als link alleen die met hasDedicatedPage true. */
export function getChildComplaints(slug: string, locale: string = 'nl'): ComplaintItem[] {
  return getComplaintBySlug(slug, locale)?.children ?? [];
}

/** Verwante klachten voor het "Zie ook"-blok, in de volgorde van relatedSlugs. */
export function getRelatedComplaints(slug: string, locale: string = 'nl'): ComplaintItem[] {
  const related = getComplaintBySlug(slug, locale)?.relatedSlugs ?? [];
  return related
    .map((s) => getComplaintBySlug(s, locale))
    .filter((c): c is ComplaintItem => Boolean(c));
}

export const COMPLAINT_CATEGORIES = COMPLAINT_CATEGORIES_NL;