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
        relatedSlugs: ['burn-out', 'slaapproblemen', 'long-covid'],
        shortDesc: 'Aanhoudende moeheid die niet vanzelf verdwijnt met een nacht slaap, en moeite om de dag door te komen.',
      },
      {
        id: 'long-covid',
        title: 'Long covid',
        slug: 'long-covid',
        hasDedicatedPage: true,
        relatedSlugs: ['vermoeidheid', 'fibromyalgie'],
        shortDesc: 'Aanhoudende vermoeidheid, kortademigheid of concentratieproblemen na een coronabesmetting.',
      },
      {
        id: 'fibromyalgie',
        title: 'Fibromyalgie',
        slug: 'fibromyalgie',
        hasDedicatedPage: true,
        relatedSlugs: ['vermoeidheid', 'slaapproblemen', 'spier-gewrichtsklachten'],
        shortDesc: 'Wijdverspreide pijn, stijfheid en vermoeidheid die vaak samengaan met slecht slapen.',
      },
      {
        id: 'hooikoorts',
        title: 'Hooikoorts & allergieën',
        slug: 'hooikoorts',
        hasDedicatedPage: true,
        relatedSlugs: ['chronische-verkoudheid'],
        shortDesc: 'Niezen, een loopneus, jeukende ogen of een verstopt gevoel, vooral in bepaalde seizoenen.',
      },
      {
        id: 'chronische-verkoudheid',
        title: 'Chronische verkoudheid & bijholteontsteking',
        slug: 'chronische-verkoudheid',
        hasDedicatedPage: true,
        relatedSlugs: ['hooikoorts', 'vermoeidheid'],
        shortDesc: 'Een steeds verstopte neus, terugkerende verkoudheid of druk rond voorhoofd en wangen.',
      },
      {
        id: 'gordelroos',
        title: 'Gordelroos',
        slug: 'gordelroos',
        hasDedicatedPage: true,
        relatedSlugs: ['neuropathie', 'vermoeidheid', 'fibromyalgie'],
        shortDesc: 'Brandende, stekende pijn of overgevoeligheid van de huid, tijdens of na gordelroos.',
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
        hasDedicatedPage: true,
        relatedSlugs: ['prikkelbare-darm', 'darmklachten', 'maagklachten-reflux'],
        shortDesc: 'Een gespannen, vol of zwaar gevoel in de buik na het eten.',
      },
      {
        id: 'maagklachten-reflux',
        title: 'Maagklachten & reflux',
        slug: 'maagklachten-reflux',
        hasDedicatedPage: true,
        relatedSlugs: ['prikkelbare-darm', 'stress', 'onrust'],
        shortDesc: 'Brandend maagzuur, oprispingen of een drukkend gevoel in de maagstreek.',
      },
      {
        id: 'prikkelbare-darm',
        title: 'Prikkelbare darm (PDS)',
        slug: 'prikkelbare-darm',
        hasDedicatedPage: true,
        relatedSlugs: ['darmklachten', 'maagklachten-reflux', 'stress'],
        shortDesc: 'Krampen, een gevoelige buik en een wisselende stoelgang die reageert op voeding of spanning.',
      },
      {
        id: 'darmklachten',
        title: 'Darmklachten',
        slug: 'darmklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['prikkelbare-darm', 'maagklachten-reflux', 'stress'],
        shortDesc: 'Verstopping, diarree of een onregelmatige stoelgang.',
      },
      {
        id: 'misselijkheid',
        title: 'Misselijkheid',
        slug: 'misselijkheid',
        hasDedicatedPage: true,
        relatedSlugs: ['maagklachten-reflux', 'migraine', 'stress'],
        shortDesc: 'Een aanhoudend of terugkerend misselijk gevoel, met of zonder duidelijke aanleiding.',
      },
      {
        id: 'spijsverteringsklachten',
        title: 'Spijsverteringsklachten',
        slug: 'spijsverteringsklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['opgeblazen-gevoel', 'maagklachten-reflux', 'prikkelbare-darm', 'vermoeidheid'],
        shortDesc: 'Trage vertering of algemeen terugkerend ongemak in het spijsverteringskanaal.',
      },
    ],
  },
  {
    id: 'zenuwstelsel',
    title: 'Zenuwen & zintuigen',
    subtitle: 'Zenuwpijn, duizeligheid en oorsuizen',
    intro:
      'Klachten van zenuwen en zintuigen kunnen veel invloed hebben op het dagelijks leven, juist omdat ze vaak lang aanhouden. Binnen de Traditionele Chinese Geneeskunde wordt gekeken naar de energiebanen die door het aangedane gebied lopen en naar wat de klachten in stand houdt.',
    complaints: [
      {
        id: 'neuropathie',
        title: 'Neuropathie',
        slug: 'neuropathie',
        hasDedicatedPage: true,
        relatedSlugs: ['gordelroos', 'ischias', 'rsi'],
        shortDesc: 'Tintelingen, een doof gevoel, branderige pijn of krachtverlies in handen en voeten.',
      },
      {
        id: 'aangezichtspijn',
        title: 'Aangezichtspijn',
        slug: 'aangezichtspijn',
        hasDedicatedPage: true,
        relatedSlugs: ['neuropathie', 'hoofdpijn'],
        shortDesc: 'Scherpe, schietende of zeurende pijn in het gezicht, zoals bij trigeminusneuralgie.',
      },
      {
        id: 'aangezichtsverlamming',
        title: 'Aangezichtsverlamming',
        slug: 'aangezichtsverlamming',
        hasDedicatedPage: true,
        relatedSlugs: ['aangezichtspijn', 'neuropathie'],
        shortDesc: 'Een plotseling hangende mondhoek of oog aan één kant van het gezicht, zoals bij de ziekte van Bell.',
      },
      {
        id: 'duizeligheid',
        title: 'Duizeligheid',
        slug: 'duizeligheid',
        hasDedicatedPage: true,
        relatedSlugs: ['tinnitus', 'nekklachten'],
        shortDesc: 'Een draaierig of licht gevoel in het hoofd, of moeite met evenwicht.',
      },
      {
        id: 'tinnitus',
        title: 'Tinnitus & oorsuizen',
        slug: 'tinnitus',
        hasDedicatedPage: true,
        relatedSlugs: ['duizeligheid', 'stress'],
        shortDesc: 'Piepen, ruisen of suizen in één of beide oren, vaak het hardst in stilte.',
      },
    ],
  },
  {
    id: 'vrouw-man',
    title: 'Vrouw, man & hormonen',
    subtitle: 'Cyclus, overgang, vruchtbaarheid en mannenklachten',
    intro:
      'Hormonen, cyclus en vitaliteit hebben merkbare invloed op hoe je je voelt, bij vrouwen én mannen. Binnen de Traditionele Chinese Geneeskunde worden deze klachten bekeken in samenhang met je energie, slaap en spanning, in elke levensfase.',
    complaints: [
      {
        id: 'menstruatieklachten',
        title: 'Menstruatieklachten & PMS',
        slug: 'menstruatieklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['endometriose', 'overgang', 'hoofdpijn'],
        shortDesc: 'Pijnlijke, hevige of onregelmatige menstruaties, PMS en gespannen borsten.',
      },
      {
        id: 'endometriose',
        title: 'Endometriose',
        slug: 'endometriose',
        hasDedicatedPage: true,
        relatedSlugs: ['menstruatieklachten', 'vruchtbaarheid', 'darmklachten'],
        shortDesc: 'Hevige menstruatiepijn, bekkenpijn of pijn bij het vrijen, ook naast je reguliere behandeling.',
      },
      {
        id: 'overgang',
        title: 'Overgangsklachten',
        slug: 'overgang',
        hasDedicatedPage: true,
        relatedSlugs: ['slaapproblemen', 'onrust', 'blaasklachten'],
        shortDesc: 'Opvliegers, nachtzweten, stemmingswisselingen en onrustig slapen.',
      },
      {
        id: 'vruchtbaarheid',
        title: 'Vruchtbaarheid & kinderwens',
        slug: 'vruchtbaarheid',
        hasDedicatedPage: true,
        relatedSlugs: ['menstruatieklachten', 'mannenklachten', 'stress'],
        shortDesc: 'Ondersteuning bij een kinderwens, voor vrouw en man, ook naast IUI, IVF of ICSI.',
      },
      {
        id: 'mannenklachten',
        title: 'Mannenklachten',
        slug: 'mannenklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['blaasklachten', 'vruchtbaarheid', 'stress'],
        shortDesc: 'Erectieproblemen, minder zin in seks, prostaat- en bekkenklachten.',
      },
      {
        id: 'blaasklachten',
        title: 'Blaasklachten',
        slug: 'blaasklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['overgang', 'mannenklachten'],
        shortDesc: 'Terugkerende blaasontstekingen, een overactieve blaas of vaak ’s nachts plassen.',
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
        relatedSlugs: ['burn-out', 'slaapproblemen', 'long-covid'],
        shortDesc: 'Persistent tiredness that does not fade with a night of sleep, and difficulty getting through the day.',
      },
      {
        id: 'long-covid',
        title: 'Long COVID',
        slug: 'long-covid',
        hasDedicatedPage: true,
        relatedSlugs: ['vermoeidheid', 'fibromyalgie'],
        shortDesc: 'Persistent fatigue, shortness of breath or difficulty concentrating after a COVID infection.',
      },
      {
        id: 'fibromyalgie',
        title: 'Fibromyalgia',
        slug: 'fibromyalgie',
        hasDedicatedPage: true,
        relatedSlugs: ['vermoeidheid', 'slaapproblemen', 'spier-gewrichtsklachten'],
        shortDesc: 'Widespread pain, stiffness and fatigue, often accompanied by poor sleep.',
      },
      {
        id: 'hooikoorts',
        title: 'Hay fever & allergies',
        slug: 'hooikoorts',
        hasDedicatedPage: true,
        relatedSlugs: ['chronische-verkoudheid'],
        shortDesc: 'Sneezing, a runny nose, itchy eyes or a blocked feeling, especially in certain seasons.',
      },
      {
        id: 'chronische-verkoudheid',
        title: 'Chronic colds & sinusitis',
        slug: 'chronische-verkoudheid',
        hasDedicatedPage: true,
        relatedSlugs: ['hooikoorts', 'vermoeidheid'],
        shortDesc: 'A constantly blocked nose, recurring colds or pressure around the forehead and cheeks.',
      },
      {
        id: 'gordelroos',
        title: 'Shingles',
        slug: 'gordelroos',
        hasDedicatedPage: true,
        relatedSlugs: ['neuropathie', 'vermoeidheid', 'fibromyalgie'],
        shortDesc: 'Burning, stabbing pain or skin hypersensitivity during or after shingles.',
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
        hasDedicatedPage: true,
        relatedSlugs: ['prikkelbare-darm', 'darmklachten', 'maagklachten-reflux'],
        shortDesc: 'A tight, bloated, or heavy feeling in the abdomen after meals.',
      },
      {
        id: 'maagklachten-reflux',
        title: 'Stomach complaints & reflux',
        slug: 'maagklachten-reflux',
        hasDedicatedPage: true,
        relatedSlugs: ['prikkelbare-darm', 'stress', 'onrust'],
        shortDesc: 'Heartburn, acid regurgitation, or a pressing feeling in the stomach area.',
      },
      {
        id: 'prikkelbare-darm',
        title: 'Irritable bowel syndrome (IBS)',
        slug: 'prikkelbare-darm',
        hasDedicatedPage: true,
        relatedSlugs: ['darmklachten', 'maagklachten-reflux', 'stress'],
        shortDesc: 'Cramps, a sensitive abdomen, and changing bowel habits that react to food or stress.',
      },
      {
        id: 'darmklachten',
        title: 'Bowel complaints',
        slug: 'darmklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['prikkelbare-darm', 'maagklachten-reflux', 'stress'],
        shortDesc: 'Constipation, diarrhoea, or irregular bowel movements.',
      },
      {
        id: 'misselijkheid',
        title: 'Nausea',
        slug: 'misselijkheid',
        hasDedicatedPage: true,
        relatedSlugs: ['maagklachten-reflux', 'migraine', 'stress'],
        shortDesc: 'A persistent or recurring feeling of nausea, with or without a clear cause.',
      },
      {
        id: 'spijsverteringsklachten',
        title: 'Digestive issues',
        slug: 'spijsverteringsklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['opgeblazen-gevoel', 'maagklachten-reflux', 'prikkelbare-darm', 'vermoeidheid'],
        shortDesc: 'Sluggish digestion or recurring discomfort in the digestive tract.',
      },
    ],
  },
  {
    id: 'zenuwstelsel',
    title: 'Nerves & senses',
    subtitle: 'Nerve pain, dizziness and ringing in the ears',
    intro:
      'Complaints of the nerves and senses can have a major impact on daily life, precisely because they often last a long time. Traditional Chinese Medicine looks at the meridians running through the affected area and at what keeps the symptoms going.',
    complaints: [
      {
        id: 'neuropathie',
        title: 'Neuropathy',
        slug: 'neuropathie',
        hasDedicatedPage: true,
        relatedSlugs: ['gordelroos', 'ischias', 'rsi'],
        shortDesc: 'Tingling, numbness, burning pain or loss of strength in the hands and feet.',
      },
      {
        id: 'aangezichtspijn',
        title: 'Facial pain',
        slug: 'aangezichtspijn',
        hasDedicatedPage: true,
        relatedSlugs: ['neuropathie', 'hoofdpijn'],
        shortDesc: 'Sharp, shooting or aching pain in the face, as with trigeminal neuralgia.',
      },
      {
        id: 'aangezichtsverlamming',
        title: 'Facial paralysis',
        slug: 'aangezichtsverlamming',
        hasDedicatedPage: true,
        relatedSlugs: ['aangezichtspijn', 'neuropathie'],
        shortDesc: 'A suddenly drooping corner of the mouth or eye on one side of the face, as with Bell’s palsy.',
      },
      {
        id: 'duizeligheid',
        title: 'Dizziness',
        slug: 'duizeligheid',
        hasDedicatedPage: true,
        relatedSlugs: ['tinnitus', 'nekklachten'],
        shortDesc: 'A spinning or light-headed feeling, or difficulty with balance.',
      },
      {
        id: 'tinnitus',
        title: 'Tinnitus',
        slug: 'tinnitus',
        hasDedicatedPage: true,
        relatedSlugs: ['duizeligheid', 'stress'],
        shortDesc: 'Ringing, hissing or buzzing in one or both ears, often loudest in silence.',
      },
    ],
  },
  {
    id: 'vrouw-man',
    title: 'Women, men & hormones',
    subtitle: 'Cycle, menopause, fertility and men’s health',
    intro:
      'Hormones, the cycle and vitality have a noticeable impact on how you feel, in women and men alike. In Traditional Chinese Medicine these complaints are viewed in connection with your energy, sleep and tension, at every stage of life.',
    complaints: [
      {
        id: 'menstruatieklachten',
        title: 'Menstrual complaints & PMS',
        slug: 'menstruatieklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['endometriose', 'overgang', 'hoofdpijn'],
        shortDesc: 'Painful, heavy or irregular periods, PMS and tender breasts.',
      },
      {
        id: 'endometriose',
        title: 'Endometriosis',
        slug: 'endometriose',
        hasDedicatedPage: true,
        relatedSlugs: ['menstruatieklachten', 'vruchtbaarheid', 'darmklachten'],
        shortDesc: 'Severe period pain, pelvic pain or pain during sex, also alongside conventional treatment.',
      },
      {
        id: 'overgang',
        title: 'Menopause symptoms',
        slug: 'overgang',
        hasDedicatedPage: true,
        relatedSlugs: ['slaapproblemen', 'onrust', 'blaasklachten'],
        shortDesc: 'Hot flushes, night sweats, mood swings and restless sleep.',
      },
      {
        id: 'vruchtbaarheid',
        title: 'Fertility & trying to conceive',
        slug: 'vruchtbaarheid',
        hasDedicatedPage: true,
        relatedSlugs: ['menstruatieklachten', 'mannenklachten', 'stress'],
        shortDesc: 'Support when trying to conceive, for women and men, also alongside IUI, IVF or ICSI.',
      },
      {
        id: 'mannenklachten',
        title: 'Men’s health',
        slug: 'mannenklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['blaasklachten', 'vruchtbaarheid', 'stress'],
        shortDesc: 'Erectile problems, reduced libido, prostate and pelvic complaints.',
      },
      {
        id: 'blaasklachten',
        title: 'Bladder complaints',
        slug: 'blaasklachten',
        hasDedicatedPage: true,
        relatedSlugs: ['overgang', 'mannenklachten'],
        shortDesc: 'Recurrent bladder infections, an overactive bladder or frequent urination at night.',
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