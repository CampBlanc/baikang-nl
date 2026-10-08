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
        relatedSlugs: ['ischias', 'nekklachten', 'spier-gewrichtsklachten'],
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
            title: 'Tennisarm & golfarm',
            slug: 'tennisarm',
            hasDedicatedPage: true,
            relatedSlugs: ['rsi', 'peesklachten'],
            shortDesc: 'Pijn aan de binnen- of buitenkant van de elleboog bij tillen, grijpen of herhaalde bewegingen.',
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
          {
            id: 'ischias',
            title: 'Ischias & hernia',
            slug: 'ischias',
            hasDedicatedPage: true,
            relatedSlugs: ['rugpijn', 'peesklachten', 'spier-gewrichtsklachten'],
            shortDesc: 'Uitstralende pijn van onderrug of bil naar het been, vaak met tintelingen of een doof gevoel.',
          },
        ],
      },
    ],
  },
  {
    id: 'stress',
    title: 'Stress & slaap',
    subtitle: 'Stress, overbelasting en slaapproblemen',
    intro:
      'Wanneer spanning zich langere tijd opbouwt, kan het lastig zijn om tot rust te komen. Dat merk je vaak in je slaap, je energie en je stemming. Acupunctuur kan worden ingezet om het lichaam te ondersteunen bij het hervinden van ontspanning en rust in het dagelijks ritme.',
    complaints: [
      {
        id: 'stress-spanning',
        title: 'Stress & spanning',
        slug: 'stress',
        hasDedicatedPage: true,
        relatedSlugs: ['onrust', 'slaapproblemen', 'burn-out'],
        shortDesc: 'Het gevoel continu "aan" te staan, innerlijke spanning en moeite met loslaten.',
      },
      {
        id: 'slaapproblemen',
        title: 'Slaapproblemen',
        slug: 'slaapproblemen',
        hasDedicatedPage: true,
        relatedSlugs: ['stress', 'onrust', 'burn-out'],
        shortDesc: 'Moeilijk inslapen, onrustig slapen, vaak wakker worden of niet uitgerust opstaan.',
      },
      {
        id: 'burn-out',
        title: 'Burn-out & overbelasting',
        slug: 'burn-out',
        hasDedicatedPage: true,
        relatedSlugs: ['stress', 'slaapproblemen', 'vermoeidheid'],
        shortDesc: 'Langdurige uitputting, weinig energie en het gevoel dat je reserves op zijn, ook na rust.',
      },
      {
        id: 'onrust-overprikkeling',
        title: 'Onrust & overprikkeling',
        slug: 'onrust',
        hasDedicatedPage: true,
        relatedSlugs: ['stress', 'slaapproblemen', 'angst'],
        shortDesc: 'Gevoeligheid voor externe prikkels, een vol hoofd en emotionele onrust.',
      },
      {
        id: 'angst-paniek',
        title: 'Angst & paniek',
        slug: 'angst',
        hasDedicatedPage: true,
        relatedSlugs: ['onrust', 'stress', 'slaapproblemen'],
        shortDesc: 'Aanhoudende ongerustheid, paniekgevoelens, hartkloppingen of een beklemd gevoel op de borst.',
      },
      {
        id: 'somberheid',
        title: 'Somberheid',
        slug: 'somberheid',
        hasDedicatedPage: true,
        relatedSlugs: ['burn-out', 'slaapproblemen', 'angst'],
        shortDesc: 'Neerslachtigheid, weinig zin of energie en moeite om te genieten van het dagelijks leven.',
      },
    ],
  },
  {
    id: 'energie',
    title: 'Energie & weerstand',
    subtitle: 'Vermoeidheid, herstel en weerstand',
    intro:
      'Wanneer je structureel te weinig energie ervaart, moeizaam herstelt of steeds weer iets onder de leden hebt, kijken we naar je algehele balans en leefpatroon. Acupunctuur kan worden ingezet om het lichaam te ondersteunen in het herstel en het opbouwen van veerkracht.',
    complaints: [
      {
        id: 'vermoeidheid',
        title: 'Vermoeidheid',
        slug: 'vermoeidheid',
        hasDedicatedPage: true,
        relatedSlugs: ['burn-out', 'slaapproblemen', 'herstel-na-ziekte'],
        shortDesc: 'Aanhoudende moeheid die niet vanzelf verdwijnt met een nacht slaap, en moeite om de dag door te komen.',
      },
      {
        id: 'herstel-na-ziekte',
        title: 'Herstel na ziekte',
        slug: 'herstel-na-ziekte',
        hasDedicatedPage: false,
        relatedSlugs: ['vermoeidheid', 'weerstand', 'long-covid'],
        shortDesc: 'Langzaam opknappen na griep, een infectie, een operatie of een intensieve behandelperiode.',
      },
      {
        id: 'long-covid',
        title: 'Long covid',
        slug: 'long-covid',
        hasDedicatedPage: true,
        relatedSlugs: ['vermoeidheid', 'herstel-na-ziekte'],
        shortDesc: 'Aanhoudende vermoeidheid, kortademigheid of concentratieproblemen na een coronabesmetting.',
      },
      {
        id: 'weerstand',
        title: 'Verminderde weerstand',
        slug: 'weerstand',
        hasDedicatedPage: false,
        relatedSlugs: ['herstel-na-ziekte', 'hooikoorts', 'vermoeidheid'],
        shortDesc: 'Vaak verkouden, steeds terugkerende infecties of het gevoel dat je alles oppikt.',
      },
      {
        id: 'hooikoorts',
        title: 'Hooikoorts & allergieën',
        slug: 'hooikoorts',
        hasDedicatedPage: true,
        relatedSlugs: ['weerstand'],
        shortDesc: 'Niezen, een loopneus, jeukende ogen of een verstopt gevoel, vooral in bepaalde seizoenen.',
      },
      {
        id: 'fibromyalgie',
        title: 'Fibromyalgie',
        slug: 'fibromyalgie',
        hasDedicatedPage: true,
        relatedSlugs: ['vermoeidheid', 'slaapproblemen', 'spier-gewrichtsklachten'],
        shortDesc: 'Wijdverspreide pijn, stijfheid en vermoeidheid die vaak samengaan met slecht slapen.',
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
      'Bij Bai Kang wordt laseracupunctuur aangeboden als ondersteuning bij het stoppen met roken of vapen, ook op punten van het oor. Ooracupunctuur wordt altijd met de laser uitgevoerd, zonder naalden. Het traject richt zich op het bevorderen van rust en het doorbreken van de gewoonte.',
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
        relatedSlugs: ['ischias', 'nekklachten', 'spier-gewrichtsklachten'],
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
            title: 'Tennis elbow & golfer’s arm',
            slug: 'tennisarm',
            hasDedicatedPage: true,
            relatedSlugs: ['rsi', 'peesklachten'],
            shortDesc: 'Pain on the inside or outside of the elbow when lifting, gripping, or performing repetitive movements.',
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
          {
            id: 'ischias',
            title: 'Sciatica & herniated disc',
            slug: 'ischias',
            hasDedicatedPage: true,
            relatedSlugs: ['rugpijn', 'peesklachten', 'spier-gewrichtsklachten'],
            shortDesc: 'Radiating pain from the lower back or buttock into the leg, often with tingling or numbness.',
          },
        ],
      },
    ],
  },
  {
    id: 'stress',
    title: 'Stress & sleep',
    subtitle: 'Stress, exhaustion, and sleep difficulties',
    intro:
      'When tension builds up over time, settling down can become difficult. You often notice it in your sleep, your energy and your mood. Acupuncture can be used to support your body in rediscovering relaxation and a calmer daily rhythm.',
    complaints: [
      {
        id: 'stress-spanning',
        title: 'Stress & tension',
        slug: 'stress',
        hasDedicatedPage: true,
        relatedSlugs: ['onrust', 'slaapproblemen', 'burn-out'],
        shortDesc: 'Constantly feeling "on", internal tension, and difficulty letting go.',
      },
      {
        id: 'slaapproblemen',
        title: 'Sleep problems',
        slug: 'slaapproblemen',
        hasDedicatedPage: true,
        relatedSlugs: ['stress', 'onrust', 'burn-out'],
        shortDesc: 'Trouble falling asleep, restless sleep, waking frequently, or waking up unrefreshed.',
      },
      {
        id: 'burn-out',
        title: 'Burnout & exhaustion',
        slug: 'burn-out',
        hasDedicatedPage: true,
        relatedSlugs: ['stress', 'slaapproblemen', 'vermoeidheid'],
        shortDesc: 'Prolonged exhaustion, low energy, and the feeling your reserves are empty, even after rest.',
      },
      {
        id: 'onrust-overprikkeling',
        title: 'Restlessness & overstimulation',
        slug: 'onrust',
        hasDedicatedPage: true,
        relatedSlugs: ['stress', 'slaapproblemen', 'angst'],
        shortDesc: 'Heightened sensitivity to stimuli, a crowded mind, and emotional restlessness.',
      },
      {
        id: 'angst-paniek',
        title: 'Anxiety & panic',
        slug: 'angst',
        hasDedicatedPage: true,
        relatedSlugs: ['onrust', 'stress', 'slaapproblemen'],
        shortDesc: 'Persistent worry, feelings of panic, palpitations, or a tight feeling in the chest.',
      },
      {
        id: 'somberheid',
        title: 'Low mood',
        slug: 'somberheid',
        hasDedicatedPage: true,
        relatedSlugs: ['burn-out', 'slaapproblemen', 'angst'],
        shortDesc: 'Feeling down, low motivation or energy, and difficulty enjoying everyday life.',
      },
    ],
  },
  {
    id: 'energie',
    title: 'Energy & resilience',
    subtitle: 'Fatigue, recovery and resistance',
    intro:
      'When you consistently lack energy, recover slowly or keep catching something, we look at your overall balance and lifestyle. Acupuncture can be used to support the body in recovering and building resilience.',
    complaints: [
      {
        id: 'vermoeidheid',
        title: 'Fatigue',
        slug: 'vermoeidheid',
        hasDedicatedPage: true,
        relatedSlugs: ['burn-out', 'slaapproblemen', 'herstel-na-ziekte'],
        shortDesc: 'Persistent tiredness that does not fade with a night of sleep, and difficulty getting through the day.',
      },
      {
        id: 'herstel-na-ziekte',
        title: 'Recovery after illness',
        slug: 'herstel-na-ziekte',
        hasDedicatedPage: false,
        relatedSlugs: ['vermoeidheid', 'weerstand', 'long-covid'],
        shortDesc: 'Slow recovery after flu, an infection, surgery or an intensive course of treatment.',
      },
      {
        id: 'long-covid',
        title: 'Long COVID',
        slug: 'long-covid',
        hasDedicatedPage: true,
        relatedSlugs: ['vermoeidheid', 'herstel-na-ziekte'],
        shortDesc: 'Persistent fatigue, shortness of breath or difficulty concentrating after a COVID infection.',
      },
      {
        id: 'weerstand',
        title: 'Reduced resistance',
        slug: 'weerstand',
        hasDedicatedPage: false,
        relatedSlugs: ['herstel-na-ziekte', 'hooikoorts', 'vermoeidheid'],
        shortDesc: 'Frequent colds, recurring infections or the feeling that you catch everything.',
      },
      {
        id: 'hooikoorts',
        title: 'Hay fever & allergies',
        slug: 'hooikoorts',
        hasDedicatedPage: true,
        relatedSlugs: ['weerstand'],
        shortDesc: 'Sneezing, a runny nose, itchy eyes or a blocked feeling, especially in certain seasons.',
      },
      {
        id: 'fibromyalgie',
        title: 'Fibromyalgia',
        slug: 'fibromyalgie',
        hasDedicatedPage: true,
        relatedSlugs: ['vermoeidheid', 'slaapproblemen', 'spier-gewrichtsklachten'],
        shortDesc: 'Widespread pain, stiffness and fatigue, often accompanied by poor sleep.',
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
      'At Bai Kang, laser acupuncture, including points on the ear, is offered to assist you in quitting tobacco or e-cigarettes. Ear acupuncture is always carried out with the laser, without needles. The treatment focuses on fostering calm and breaking the habit.',
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