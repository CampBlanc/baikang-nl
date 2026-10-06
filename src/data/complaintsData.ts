export interface ComplaintItem {
  id: string;
  title: string;
  slug: string;
  hasDedicatedPage: boolean;
  shortDesc?: string;
}

export interface ComplaintCategory {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  complaints: ComplaintItem[];
}

export const COMPLAINT_CATEGORIES_NL: ComplaintCategory[] = [
  {
    id: 'pijn',
    title: 'Pijn & spanning',
    subtitle: 'Lichamelijke pijn, stijfheid en spanning',
    intro:
      'Lichamelijke pijn, stijfheid en spanning kunnen verschillende oorzaken hebben. Tijdens een behandeling kijken we niet alleen naar de plek waar je klachten ervaart, maar ook naar het bredere patroon en de samenhang van verschillende signalen.',
    complaints: [
      {
        id: 'rugpijn',
        title: 'Rugpijn',
        slug: 'rugpijn',
        hasDedicatedPage: false,
        shortDesc: 'Onderrugklachten, stijfheid of aanhoudende spierspanning in de rug.',
      },
      {
        id: 'nek-schouderklachten',
        title: 'Nek- en schouderklachten',
        slug: 'nek-schouderklachten',
        hasDedicatedPage: false,
        shortDesc: 'Vastzittende spieren, stijfheid door werkhouding of aanhoudende spanning.',
      },
      {
        id: 'hoofdpijn',
        title: 'Hoofdpijn & migraine',
        slug: 'hoofdpijn',
        hasDedicatedPage: false,
        shortDesc: 'Spanningshoofdpijn, een drukkend gevoel of terugkerende migraine.',
      },
      {
        id: 'spier-gewrichtsklachten',
        title: 'Spier- en gewrichtsklachten',
        slug: 'spier-gewrichtsklachten',
        hasDedicatedPage: false,
        shortDesc: 'Overbelasting, peesklachten, stijve gewrichten of belemmeringen in beweging.',
      },
    ],
  },
  {
    id: 'stress',
    title: 'Stress & slaap',
    subtitle: 'Stress, spanning en slaapproblemen',
    intro:
      'Wanneer spanning zich langere tijd opbouwt, kan het lastig zijn om tot rust te komen. Acupunctuur kan binnen de praktijk worden ingezet als ondersteuning bij ontspanning en rust in het dagelijks ritme.',
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
      'Wanneer je structureel weinig energie ervaart of merkt dat je moeilijk herstelt, kijken we naar jouw algehele situatie, leefpatroon en de signalen die je lichaam geeft. Acupunctuur kan hierbij als aanvullende ondersteuning worden ingezet.',
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
        shortDesc: 'Ondersteuning bij het omgaan met een intensieve periode, overbelasting of herstel na ziekte.',
      },
    ],
  },
  {
    id: 'maag-darmen',
    title: 'Maag & darmen',
    subtitle: 'Spijsvertering en buikklachten',
    intro:
      'Binnen de Traditionele Chinese Geneeskunde wordt het spijsverteringssysteem gezien als een belangrijk onderdeel van het algehele functioneren. Tijdens de intake kijken we naar je spijsverteringsklachten en naar factoren die volgens het TCM-behandelpatroon hiermee samen kunnen hangen.',
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
      'Hormonale veranderingen kunnen merkbare invloed hebben op hoe je je voelt. Acupunctuur kan binnen de praktijk worden ingezet als aanvullende ondersteuning bij klachten die tijdens verschillende levensfasen kunnen optreden.',
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
        shortDesc: 'Ondersteuning bij klachten die samenhangen met hormonale veranderingen en het bijbehorende welzijn.',
      },
    ],
  },
  {
    id: 'stoppen-roken-vapen',
    title: 'Stoppen met roken & vapen',
    subtitle: 'Ondersteuning bij stoppen',
    intro:
      'Bij Bai Kang worden laseracupunctuur en oorschelpacupunctuur aangeboden als ondersteuning bij het stoppen met roken of vapen. De behandeling is gericht op ondersteuning bij het omgaan met onrust en het veranderen van het bestaande rook- of vapegewoontepatroon.',
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
        shortDesc: 'Ondersteunende behandelingen bij het stoppen met het gebruik van de e-sigaret.',
      },
    ],
  },
];

export const COMPLAINT_CATEGORIES_EN: ComplaintCategory[] = [
  {
    id: 'pijn',
    title: 'Pain & tension',
    subtitle: 'Physical pain, stiffness, and tension',
    intro:
      'Physical pain, stiffness, and tension can have various causes. During treatment, we look not only at where you experience discomfort, but also at the broader pattern and the relationship between different signs and symptoms.',
    complaints: [
      {
        id: 'rugpijn',
        title: 'Back pain',
        slug: 'rugpijn',
        hasDedicatedPage: false,
        shortDesc: 'Lower back discomfort, stiffness, or persistent muscular tension.',
      },
      {
        id: 'nek-schouderklachten',
        title: 'Neck & shoulder tension',
        slug: 'nek-schouderklachten',
        hasDedicatedPage: false,
        shortDesc: 'Tight muscles, stiffness related to posture or work, or persistent tension.',
      },
      {
        id: 'hoofdpijn',
        title: 'Headaches & migraine',
        slug: 'hoofdpijn',
        hasDedicatedPage: false,
        shortDesc: 'Tension headaches, a heavy or pressing sensation, or recurring migraine.',
      },
      {
        id: 'spier-gewrichtsklachten',
        title: 'Muscle & joint complaints',
        slug: 'spier-gewrichtsklachten',
        hasDedicatedPage: false,
        shortDesc: 'Overuse, tendon complaints, stiff joints, or restricted movement.',
      },
    ],
  },
  {
    id: 'stress',
    title: 'Stress & sleep',
    subtitle: 'Stress, tension, and sleep difficulties',
    intro:
      'When tension builds up over time, it can become difficult to relax. Acupuncture can be used within the practice as complementary support for relaxation and a calmer daily rhythm.',
    complaints: [
      {
        id: 'stress-spanning',
        title: 'Stress & tension',
        slug: 'stress',
        hasDedicatedPage: false,
        shortDesc: 'Constantly feeling "on", internal tension, and difficulty letting go.',
      },
      {
        id: 'slaapproblemen',
        title: 'Sleep problems',
        slug: 'slaapproblemen',
        hasDedicatedPage: false,
        shortDesc: 'Difficulty falling asleep, restless sleep, frequent waking, or waking unrefreshed.',
      },
      {
        id: 'onrust-overprikkeling',
        title: 'Restlessness & sensory overload',
        slug: 'onrust',
        hasDedicatedPage: false,
        shortDesc: 'Sensitivity to external stimuli, a crowded mind, and emotional restlessness.',
      },
    ],
  },
  {
    id: 'energie',
    title: 'Energy & recovery',
    subtitle: 'Vitality and resilience',
    intro:
      'When you consistently experience low energy or feel that recovery is difficult, we look at your overall situation, daily habits, and the signals your body is giving you. Acupuncture can be used as complementary support.',
    complaints: [
      {
        id: 'vermoeidheid',
        title: 'Fatigue',
        slug: 'vermoeidheid',
        hasDedicatedPage: false,
        shortDesc: 'Persistent tiredness that does not simply disappear after a night of sleep.',
      },
      {
        id: 'weinig-energie',
        title: 'Low energy',
        slug: 'weinig-energie',
        hasDedicatedPage: false,
        shortDesc: 'Feeling depleted and finding it difficult to get through the day with enough energy.',
      },
      {
        id: 'herstel-veerkracht',
        title: 'Recovery & resilience',
        slug: 'herstel-veerkracht',
        hasDedicatedPage: false,
        shortDesc: 'Support when dealing with an intensive period, prolonged strain, or recovery after illness.',
      },
    ],
  },
  {
    id: 'maag-darmen',
    title: 'Stomach & digestion',
    subtitle: 'Digestion and abdominal complaints',
    intro:
      'Within Traditional Chinese Medicine, the digestive system is considered an important part of overall functioning. During the consultation, we look at your digestive complaints and at factors that may be related to them within the TCM treatment pattern.',
    complaints: [
      {
        id: 'opgeblazen-gevoel',
        title: 'Bloating',
        slug: 'opgeblazen-gevoel',
        hasDedicatedPage: false,
        shortDesc: 'A tight, full, or heavy feeling in the abdomen after eating.',
      },
      {
        id: 'buikklachten',
        title: 'Abdominal discomfort',
        slug: 'buikklachten',
        hasDedicatedPage: false,
        shortDesc: 'Dull cramps, a sensitive abdomen, or changing reactions to food.',
      },
      {
        id: 'spijsverteringsklachten',
        title: 'Digestive complaints',
        slug: 'spijsverteringsklachten',
        hasDedicatedPage: false,
        shortDesc: 'Sluggish digestion, stomach complaints, or recurring discomfort in the digestive tract.',
      },
    ],
  },
  {
    id: 'vrouw-hormonaal',
    title: 'Women & hormonal complaints',
    subtitle: 'Menstruation, menopause, and balance',
    intro:
      'Hormonal changes can have a noticeable influence on how you feel. Within the practice, acupuncture can be used as complementary support for complaints that may occur during different stages of life.',
    complaints: [
      {
        id: 'menstruatieklachten',
        title: 'Menstrual complaints',
        slug: 'menstruatieklachten',
        hasDedicatedPage: false,
        shortDesc: 'Abdominal cramps, mood changes, PMS, or an unsettled menstrual cycle.',
      },
      {
        id: 'overgang',
        title: 'Menopause',
        slug: 'overgang',
        hasDedicatedPage: false,
        shortDesc: 'Hot flashes, night sweats, restlessness, and changes in sleep patterns.',
      },
      {
        id: 'hormonale-klachten',
        title: 'Hormonal complaints',
        slug: 'hormonale-klachten',
        hasDedicatedPage: false,
        shortDesc: 'Support for complaints associated with hormonal changes and related well-being.',
      },
    ],
  },
  {
    id: 'stoppen-roken-vapen',
    title: 'Quitting smoking & vaping',
    subtitle: 'Support with quitting',
    intro:
      'At Bai Kang, laser acupuncture and auricular acupuncture are offered as support when quitting smoking or vaping. The treatment focuses on supporting you in managing restlessness and changing established smoking or vaping habits.',
    complaints: [
      {
        id: 'stoppen-roken',
        title: 'Quitting smoking',
        slug: 'stoppen-met-roken',
        hasDedicatedPage: false,
        shortDesc: 'Guidance and targeted acupuncture points as support when quitting tobacco.',
      },
      {
        id: 'stoppen-vapen',
        title: 'Quitting vaping',
        slug: 'stoppen-met-vapen',
        hasDedicatedPage: false,
        shortDesc: 'Supportive treatments when stopping the use of e-cigarettes.',
      },
    ],
  },
];

export function getComplaintCategories(locale: string = 'nl'): ComplaintCategory[] {
  return locale === 'en' ? COMPLAINT_CATEGORIES_EN : COMPLAINT_CATEGORIES_NL;
}

export const COMPLAINT_CATEGORIES = COMPLAINT_CATEGORIES_NL;