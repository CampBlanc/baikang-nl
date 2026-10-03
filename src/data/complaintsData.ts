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

export const COMPLAINT_CATEGORIES: ComplaintCategory[] = [
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