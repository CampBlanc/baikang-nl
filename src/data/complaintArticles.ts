export interface ComplaintArticlePattern {
  name: string;
  chineseName?: string;
  description: string;
}

export interface ComplaintArticleFaq {
  question: string;
  answer: string;
}

export interface ComplaintArticle {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  recognition: {
    title: string;
    paragraphs: string[];
  };
  tcmPerspective: {
    eyebrow: string;
    title: string;
    intro: string;
    patterns: ComplaintArticlePattern[];
  };
  treatment: {
    title: string;
    intro: string;
    steps: string[];
    safetyNote: string;
  };
  faqs: ComplaintArticleFaq[];
  cta: {
    title: string;
    text: string;
    buttonText: string;
  };
}

/* =======================================================================
   NEDERLANDSE ARTIKELEN (NL)
   ======================================================================= */
export const COMPLAINT_ARTICLES_NL: Record<string, ComplaintArticle> = {
  rugpijn: {
    slug: 'rugpijn',
    h1: 'Acupunctuur bij rugpijn in Tilburg',
    metaTitle: 'Acupunctuur bij rugpijn | Behandeling in Tilburg | Bai Kang TCM',
    metaDescription:
      'Aanhoudende lage rugpijn, spit of stijfheid? Lees hoe acupunctuur bij Bai Kang in Tilburg het herstel en diepe spierontspanning ondersteunt.',
    heroIntro:
      'Een zeurende onderrug, plotselinge spit of stijfheid bij het opstaan kan je bewegingsvrijheid flink beperken. Acupunctuur kan worden ingezet om diepe spierspanning te verminderen, de lokale doorbloeding te stimuleren en het natuurlijke herstel van het lichaam te ondersteunen.',
    recognition: {
      title: 'Herkenning en dagelijkse belasting',
      paragraphs: [
        'Rugklachten behoren tot de meest voorkomende fysieke klachten. Vaak ontstaat de pijn door een samenspel van factoren: langdurig zitten, overbelasting, fysieke vermoeidheid of stress die zich onbewust vastzet in de rugspieren.',
        'Wanneer spieren langere tijd gespannen blijven, ontstaat er een vicieuze cirkel waarin bewegen onprettig voelt en het lichaam nog meer verkrampt. Tijdens een behandeling kijken we daarom niet alleen naar de pijnplek zelf, maar naar je algehele houding en de patronen die de klacht in stand houden.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditionele Chinese Geneeskunde',
      title: 'Hoe kijkt TCM naar rugklachten?',
      intro:
        'Binnen de Chinese geneeskunde is de onderrug nauw verbonden met de basisenergie en de meridianen die langs de hele wervelkolom lopen. We onderscheiden verschillende patronen achter de pijn:',
      patterns: [
        {
          name: 'Stagnatie van Qi en Bloed',
          chineseName: '气滞血瘀',
          description:
            'Vaak de oorzaak bij acute rugpijn of plotselinge spit. Door overbelasting of een verkeerde beweging stagneert de stroom in de rugspieren, wat zorgt voor een scherpe, stekende pijn en hevige stijfheid bij bewegen.',
        },
        {
          name: 'Koude en Vocht',
          chineseName: '寒湿',
          description:
            'Kenmerkt zich door een zwaar, zeurend gevoel en stijfheid die verergert bij guur, vochtig weer of langdurig stilzitten, en juist verlicht wordt door warmte.',
        },
        {
          name: 'Leegte van de Nier-energie',
          chineseName: '肾虚',
          description:
            'Veelvoorkomend bij chronische, milde onderrugpijn die al maanden opspeelt. Deze pijn voelt dof of vermoeid aan en verergert vooral na een lange werkdag.',
        },
      ],
    },
    treatment: {
      title: 'Wat kun je verwachten tijdens de behandeling?',
      intro:
        'Tijdens een consult onderzoeken we waar de pijn vandaan komt en welke onderliggende factoren meespelen. De behandeling is altijd maatwerk:',
      steps: [
        'Persoonlijk gesprek en diagnostiek (inclusief het voelen van de pols en inspectie van de tong).',
        'Klassieke acupunctuur met flinterdunne naalden op gerichte punten om spierspanning te laten afvloeien.',
        'Optioneel aangevuld met moxa (zachte warmtebehandeling) bij koudeklachten, of cupping om vastzittend bindweefsel los te maken.',
        'Praktische adviezen voor rust, gerichte warmte en houding voor thuis.',
      ],
      safetyNote:
        'Acupunctuur is een complementaire behandelwijze en kan uitstekend samengaan met reguliere fysiotherapie of medische zorg. Ervaar je acute uitvalverschijnselen? Neem dan altijd eerst direct contact op met je huisarts.',
    },
    faqs: [
      {
        question: 'Hoeveel behandelingen zijn er gemiddeld nodig voor rugklachten?',
        answer:
          'Bij acute klachten is er vaak binnen 2 tot 4 behandelingen merkbare ontspanning. Bij chronische rugpijn adviseren we meestal een traject van 5 tot 8 sessies om een stabiele basis op te bouwen.',
      },
      {
        question: 'Doet acupunctuur in de rug pijn?',
        answer:
          'Nee, acupunctuurnaaldjes zijn uiterst dun. Het inbrengen is nauwelijks voelbaar. Wanneer een punt geactiveerd wordt, kun je een dof of loom gevoel ervaren. Veel cliënten ervaren de sessie vooral als een diep rustmoment.',
      },
    ],
    cta: {
      title: 'Ervaar je aanhoudende rugpijn?',
      text: 'Tijdens een eerste afspraak nemen we de tijd om jouw klachtpatroon rustig in kaart te brengen.',
      buttonText: 'Afspraak maken in Tilburg',
    },
  },

  nekklachten: {
    slug: 'nekklachten',
    h1: 'Acupunctuur bij nekklachten en stijfheid',
    metaTitle: 'Acupunctuur bij nekpijn & stijve nek | Bai Kang Tilburg',
    metaDescription:
      'Last van een stijve nek of spierkrampen door stress of werkhouding? Lees hoe acupunctuur bij Bai Kang in Tilburg ontspanning en bewegingsvrijheid ondersteunt.',
    heroIntro:
      'Een stijve nek, gespannen spieren of een zeurende pijn bij bepaalde bewegingen kan je dagelijkse bezigheden behoorlijk beperken. Acupunctuur kan helpen om de diepe spierspanning te verminderen en de beweeglijkheid van de nek te verbeteren.',
    recognition: {
      title: 'Herkenning: spanning en bewegingsbeperking',
      paragraphs: [
        'Nekpijn kan zich op verschillende manieren uiten. Een stijve nek, gespannen spieren of een zeurende pijn die doortrekt naar de schouders of het hoofd. Soms ontstaat de klacht plotseling na een verkeerde beweging, maar vaak bouwt de spanning zich geleidelijk op door stress of een langdurige werkhouding.',
        'Binnen onze aanpak kijken we niet alleen naar de pijnplek zelf, maar naar het hele spanningspatroon in de bovenrug, nek en schouders.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditionele Chinese Geneeskunde',
      title: 'Hoe kan acupunctuur helpen bij nekpijn?',
      intro:
        'Binnen de Traditionele Chinese Geneeskunde wordt gekeken naar het geheel van factoren die meespelen. Waar stagnatie optreedt, ontstaat pijn. We onderscheiden onder andere:',
      patterns: [
        {
          name: 'Stagnatie van Qi en Bloed',
          description:
            'Kenmerkend voor acute nekpijn of stijfheid na het slapen. De lokale weefselcirculatie blokkeert, waardoor spieren verkrampen.',
        },
        {
          name: 'Spanning door stress (Lever-Qi stagnatie)',
          description:
            'Mentale druk zorgt ervoor dat spieren rondom de nek en schouders onbewust continu aangespannen blijven. Dit gaat vaak gepaard met spanningshoofdpijn.',
        },
      ],
    },
    treatment: {
      title: 'Wat kun je verwachten tijdens de behandeling?',
      intro:
        'Tijdens de eerste behandeling bespreken we uitgebreid je klachten en factoren die de klachten beïnvloeden. De behandeling is gericht op herstel:',
      steps: [
        'Zorgvuldige intake en diagnostiek.',
        'Klassieke acupunctuur met flinterdunne naalden op specifieke punten om spanning los te laten.',
        'Optioneel aangevuld met zachte cupping om vastzittend bindweefsel los te maken.',
        'Wanneer daar aanleiding toe is, kan aanvullend leefstijl- of ontspanningsadvies worden meegegeven.',
      ],
      safetyNote:
        'Acupunctuur is een veilige, complementaire zorgvorm. Ervaar je acute uitvalverschijnselen of krachteloosheid in de armen? Neem dan altijd eerst contact op met je huisarts.',
    },
    faqs: [
      {
        question: 'Kan acupunctuur helpen als mijn nekpijn hoofdpijn veroorzaakt?',
        answer:
          'Ja, spanningshoofdpijn ontstaat zeer frequent vanuit overbelaste spieren in de nek en de schedelrand. Door deze gericht te behandelen, vermindert vaak ook de druk in het hoofd.',
      },
    ],
    cta: {
      title: 'Weer vrijer kunnen bewegen?',
      text: 'Het doel is niet alleen minder pijn, maar vooral dat je dagelijkse activiteiten weer met meer gemak kunt uitvoeren.',
      buttonText: 'Afspraak maken in Tilburg',
    },
  },

  schouderklachten: {
    slug: 'schouderklachten',
    h1: 'Acupunctuur bij schouderklachten',
    metaTitle: 'Acupunctuur bij schouderpijn & frozen shoulder | Bai Kang Tilburg',
    metaDescription:
      'Pijn bij heffen of draaien, vastzittende schouderbladen of een frozen shoulder? Bekijk de TCM-behandeling bij Bai Kang in Tilburg.',
    heroIntro:
      'Pijn of stijfheid in de schouder kan simpele handelingen zoals aankleden of iets uit een kastje pakken plotseling pijnlijk maken. Acupunctuur richt zich op het verminderen van pees- en spierirritatie en het bevorderen van een vrijere doorstroming in het schoudergewricht.',
    recognition: {
      title: 'Belemmeringen in de schouder',
      paragraphs: [
        'Schouderklachten ontwikkelen zich vaak sluipend. Het begint met een lichte irritatie of een vermoeid gevoel rond het schouderblad, dat later overgaat in een felle pijn bij het heffen of draaien van de arm.',
        'We zien in de praktijk uiteenlopende klachten: van overbelaste pezen en slijmbeursirritaties tot de complexe bewegingsbeperking van een frozen shoulder. De behandeling wordt hier specifiek op afgestemd.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditionele Chinese Geneeskunde',
      title: 'Hoe kijken we naar de schouder?',
      intro:
        'Binnen TCM is het schoudergewricht een kruispunt van verschillende belangrijke meridianen. Een stagnatie hier kan verschillende oorzaken hebben:',
      patterns: [
        {
          name: 'Wind, Koude en Vocht',
          description:
            'Dit is vaak het patroon bij een "frozen shoulder". Diepe, zware pijn en een sterk verminderde mobiliteit, die vaak erger wordt in rust of bij kou, en reageert op warmte.',
        },
        {
          name: 'Lokale Qi en Bloed Stagnatie',
          description:
            'Vaak het gevolg van een trauma of eenzijdige overbelasting (zoals een sportblessure of RSI). De pijn is scherp en goed aan te wijzen op één specifieke plek.',
        },
      ],
    },
    treatment: {
      title: 'De aanpak bij schouderklachten',
      intro:
        'Omdat schouderklachten vaak hardnekkig zijn, combineren we methodes om het weefsel zo goed mogelijk te ondersteunen:',
      steps: [
        'Uitgebreide bewegings- en palpatiediagnostiek rondom het gewricht.',
        'Acupunctuur om blokkades op te heffen en de doorbloeding rondom de pezen te verbeteren.',
        'Inzet van cupping of guasha om het omliggende bindweefsel en de schouderbladen soepel te maken.',
        'Advies over het balanceren van rust en verantwoorde beweging.',
      ],
      safetyNote:
        'Bij ernstige weefselschade zoals een volledige peesscheur is acupunctuur slechts ter ondersteuning. We adviseren altijd afstemming met je behandelend fysiotherapeut of arts.',
    },
    faqs: [
      {
        question: 'Helpt acupunctuur bij een frozen shoulder?',
        answer:
          'Een frozen shoulder heeft een lange natuurlijke hersteltijd. Acupunctuur kan dat proces vaak niet halveren, maar we kunnen wel de pijnintensiteit en de verkramping van omliggende spieren effectief helpen verminderen, wat het comfort sterk verbetert.',
      },
    ],
    cta: {
      title: 'Klaar om de schouder weer ruimte te geven?',
      text: 'Ontdek of acupunctuur verlichting kan bieden bij jouw specifieke schouderklacht.',
      buttonText: 'Afspraak inplannen',
    },
  },

  hoofdpijn: {
    slug: 'hoofdpijn',
    h1: 'Acupunctuur bij hoofdpijn',
    metaTitle: 'Acupunctuur bij spanningshoofdpijn | Bai Kang Tilburg',
    metaDescription:
      'Last van een drukkende band om het hoofd of aanhoudende spanningshoofdpijn? Ontdek de zachte acupunctuuraanpak bij Bai Kang TCM in Tilburg.',
    heroIntro:
      'Een constante, drukkende pijn, het gevoel van een strakke band om het hoofd of pijn die vanuit de nek omhoog trekt: hoofdpijn is vermoeiend en vraagt veel van je energie. Acupunctuur kan helpen om deze spanning te doorbreken en structurele verlichting te bieden.',
    recognition: {
      title: 'Een overvol en gespannen hoofd',
      paragraphs: [
        'Spanningshoofdpijn is de meest voorkomende vorm van hoofdpijn. Vaak bouwt het zich in de loop van de dag op. De pijn voelt dof en drukkend, als een knellende helm. Stress, vermoeidheid, te lang achter een scherm werken of het onbewust aanspannen van de kaken spelen hierin vaak een rol.',
        'De klacht is zelden geïsoleerd. Vaak is de nek- en schouderspiergroep overbelast. We behandelen daarom altijd het achterliggende mechanisme, en niet alleen de pijn op zich.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditionele Chinese Geneeskunde',
      title: 'De TCM visie op hoofdpijn',
      intro:
        'Binnen de Chinese Geneeskunde is het hoofd de plek waar alle Yang-meridianen samenkomen. Hoofdpijn ontstaat wanneer deze stroom verstoord is, of wanneer er onvoldoende voeding het hoofd bereikt:',
      patterns: [
        {
          name: 'Spanning en opstijgend Lever-Yang',
          description:
            'Wordt vaak uitgelokt door stress of frustratie. Kenmerkt zich door een strak of kloppend gevoel, vaak aan de zijkanten (slapen) of achter de ogen.',
        },
        {
          name: 'Qi of Bloed leegte',
          description:
            'Een meer doffe, zeurende hoofdpijn die verergert bij vermoeidheid en inspanning. De pijn verbetert na rust of slaap.',
        },
      ],
    },
    treatment: {
      title: 'De behandeling bij Bai Kang',
      intro:
        'De behandeling richt zich op het onttrekken van overmatige spanning uit het hoofd en het ontspannen van de nek:',
      steps: [
        'Pols- en tongdiagnostiek om de aard van de hoofdpijn vast te stellen.',
        'Plaatsen van dunne acupunctuurnaalden (vaak in voeten, handen en nek, om de energie naar beneden te halen).',
        'Zachte massage of cupping van de nek en schouders om lokale triggerpoints op te lossen.',
        'Bespreken van externe prikkels en leefpatroon.',
      ],
      safetyNote:
        'Bij zeer plotselinge, onverklaarbaar hevige "donderslag"-hoofdpijn dien je direct medische hulp in te schakelen.',
    },
    faqs: [
      {
        question: 'Plaats je veel naalden in het hoofd?',
        answer:
          'Dat valt erg mee. Vaak worden de punten op de armen, benen en voeten gebruikt om het overschot aan spanning (Yang) uit het hoofd naar beneden te leiden.',
      },
    ],
    cta: {
      title: 'Meer rust in je hoofd?',
      text: 'Laten we tijdens een intake kijken welke factoren jouw hoofdpijn in stand houden.',
      buttonText: 'Afspraak inplannen',
    },
  },

  migraine: {
    slug: 'migraine',
    h1: 'Acupunctuur ter preventie van migraine',
    metaTitle: 'Acupunctuur en migraine | Bai Kang TCM Tilburg',
    metaDescription:
      'Terugkerende migraineaanvallen, kloppende pijn en misselijkheid? Bekijk hoe acupunctuur de frequentie en intensiteit kan helpen verlagen in Tilburg.',
    heroIntro:
      'Migraine is geen gewone hoofdpijn. Een aanval kan je letterlijk dagenlang uitschakelen met kloppende pijn, misselijkheid en een extreme overgevoeligheid voor prikkels. Acupunctuur richt zich preventief op het reguleren van het zenuwstelsel en het verminderen van de aanvalsfrequentie.',
    recognition: {
      title: 'De ontregelende impact van migraine',
      paragraphs: [
        'Migraine kent vaak een opbouwende fase, gevolgd door een hevige (vaak eenzijdige) kloppende pijn. Soms gaat dit gepaard met een aura, braken en de absolute behoefte aan een donkere, stille kamer. Triggers variëren enorm: van hormonale schommelingen en stress tot bepaalde voeding of weersveranderingen.',
        'Wanneer migraine frequent optreedt, kan de angst voor een volgende aanval veel impact hebben. Bij Bai Kang behandelen we niet tijdens een acute aanval, maar werken we daarbuiten aan het versterken van de balans om de hevigheid en frequentie te verminderen.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditionele Chinese Geneeskunde',
      title: 'Migrainepatronen binnen TCM',
      intro:
        'Migraine heeft binnen TCM sterk te maken met de stroom van Lever- en Galblaas-energie, die het zijkant van het hoofd reguleert:',
      patterns: [
        {
          name: 'Opstijgend Lever-Vuur',
          description:
            'Dit uit zich in felle, kloppende pijn die gepaard kan gaan met rode ogen, irritatie, oorsuizen of een bittere smaak in de mond.',
        },
        {
          name: 'Hormonale en Bloed-stagnatie',
          description:
            'Migraine die zeer specifiek gekoppeld is aan de menstruatiecyclus. We richten ons hierbij op het reguleren van de hormonale en doorbloedingsbalans in het onderlichaam.',
        },
      ],
    },
    treatment: {
      title: 'Preventieve behandelaanpak',
      intro:
        'Omdat we preventief werken, plannen we de sessies in de rustige fases tussen de aanvallen door:',
      steps: [
        'Diepgaande intake om jouw persoonlijke migraine-triggers en cyclus in kaart te brengen.',
        'Acupunctuur gericht op het harmoniseren van het autonome zenuwstelsel en het ontspannen van de bloedvaten.',
        'Evaluatie na 4 tot 6 behandelingen om te kijken of de intensiteit of duur van de aanvallen afneemt.',
      ],
      safetyNote:
        'Acupunctuur is complementair. We raden af om zonder overleg met de neuroloog of huisarts te stoppen met voorgeschreven migrainemedicatie.',
    },
    faqs: [
      {
        question: 'Kan ik langskomen tijdens een migraineaanval?',
        answer:
          'Tijdens een zware, acute aanval kun je vaak niet reizen of prikkels verdragen. Het is beter om rust te nemen. De behandeling plannen we bij voorkeur in de aanvalsvrije periode om je systeem op te bouwen.',
      },
    ],
    cta: {
      title: 'Werken aan minder aanvallen?',
      text: 'Neem contact op om te bespreken hoe we jouw migrainepatroon preventief kunnen ondersteunen.',
      buttonText: 'Afspraak inplannen',
    },
  },

  'spier-gewrichtsklachten': {
    slug: 'spier-gewrichtsklachten',
    h1: 'Acupunctuur bij spier- en gewrichtsklachten',
    metaTitle: 'Acupunctuur bij spier- en gewrichtsklachten | Bai Kang Tilburg',
    metaDescription:
      'Last van stijve gewrichten, overbelasting, peesklachten of spierpijn? Lees hoe acupunctuur in Tilburg helpt bij soepeler bewegen en pijnverlichting.',
    heroIntro:
      'Stijve gewrichten, overbelaste pezen of aanhoudende spierpijn kunnen elke beweging ongemakkelijk maken. Acupunctuur richt zich op het verminderen van lokale ontstekingsreacties, het bevorderen van de doorbloeding en het herstellen van je natuurlijke bewegingsvrijheid.',
    recognition: {
      title: 'Herkenning en overbelasting',
      paragraphs: [
        'Spier- en gewrichtsklachten uiten zich vaak in stijfheid bij het opstaan (startpijn), een zeurend gevoel na inspanning of scherpe pijn bij specifieke bewegingen. Dit kan het gevolg zijn van overbelasting, slijtage (artrose), een sportblessure of langdurig repeterende bewegingen (zoals bij RSI of een tennisarm).',
        'Wanneer een gewricht of pees pijn doet, gaan we vaak onbewust compenseren. Dit zorgt voor extra spanning in de omliggende spieren, waardoor de klachten zich uitbreiden. De behandeling richt zich daarom op het hele bewegingspatroon rondom de klacht.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditionele Chinese Geneeskunde',
      title: 'De TCM visie op spieren en gewrichten',
      intro:
        'Binnen TCM worden gewrichts- en spierklachten vaak gezien als een stagnatie van Qi en Bloed in de meridianen (het Bi-syndroom). Dit kan worden verergerd door externe factoren:',
      patterns: [
        {
          name: 'Koude en Vocht',
          description:
            'Pijn die verergert bij koud en vochtig weer. De gewrichten voelen stijf, zwaar en pijnlijk aan. Warmte en zachte beweging geven vaak verlichting.',
        },
        {
          name: 'Hitte en Ontsteking',
          description:
            'Het gewricht is rood, gezwollen en voelt warm aan (zoals bij een actieve ontsteking of acute overbelasting). Koeling verlicht de pijn.',
        },
        {
          name: 'Qi en Bloed stagnatie',
          description:
            'Scherpe, stekende pijn op een vaste locatie, vaak ontstaan na een trauma (zoals een verstuiking) of chronische overbelasting.',
        },
      ],
    },
    treatment: {
      title: 'Wat kun je verwachten tijdens de behandeling?',
      intro:
        'De behandeling wordt afgestemd op de specifieke klacht en de mate van ontsteking of stijfheid:',
      steps: [
        'Lokaal en op afstand plaatsen van dunne acupunctuurnaalden om de doorbloeding in het gewricht te stimuleren.',
        'Wanneer koude en stijfheid een rol spelen, maken we vaak gebruik van moxa (warmtetherapie) om het weefsel diep te verwarmen.',
        'Bij vastzittende spieren rondom het gewricht kan cupping worden ingezet om de fascia (bindweefsel) los te maken.',
        'Advies over de balans tussen rust en verantwoorde beweging.',
      ],
      safetyNote:
        'Bij ernstige weefselschade of acute ontstekingen is acupunctuur complementair. Het kan heel goed naast fysiotherapie of een medisch traject worden ingezet om pijn te dempen en weefselherstel te bevorderen.',
    },
    faqs: [
      {
        question: 'Helpt acupunctuur bij artrose (slijtage)?',
        answer:
          'Acupunctuur kan het weggesleten kraakbeen niet terughalen. Wel is het zeer effectief in het bestrijden van de pijn, het remmen van de lokale ontstekingsreactie en het ontspannen van de spieren rondom het gewricht. Hierdoor kan het gewricht vaak weer soepeler worden bewogen.',
      },
      {
        question: 'Is acupunctuur pijnlijk bij een al gevoelige pees?',
        answer:
          'Nee. Bij een ontstoken of zeer pijnlijke pees prikken we vaak niet direct in het pijnpunt zelf, maar maken we gebruik van gerichte acupunctuurpunten op afstand (via dezelfde meridiaan) om het weefsel effectief te ontlasten.',
      },
    ],
    cta: {
      title: 'Wil je weer soepeler bewegen?',
      text: 'Neem contact op om te bespreken wat acupunctuur voor jouw specifieke klacht kan betekenen.',
      buttonText: 'Afspraak inplannen',
    },
  },
};

/* =======================================================================
   ENGELSE ARTIKELEN (EN)
   ======================================================================= */
export const COMPLAINT_ARTICLES_EN: Record<string, ComplaintArticle> = {
  rugpijn: {
    slug: 'rugpijn',
    h1: 'Acupuncture for back pain in Tilburg',
    metaTitle: 'Acupuncture for back pain | Treatment in Tilburg | Bai Kang TCM',
    metaDescription:
      'Persistent lower back pain, stiffness, or acute back sprain? Discover how acupuncture at Bai Kang in Tilburg supports natural recovery and muscular ease.',
    heroIntro:
      'A dull lower back, sudden muscle spasm, or morning stiffness can severely restrict your daily movement. Acupuncture can be used to release deep muscular tension, stimulate local circulation, and support your body’s natural recovery process.',
    recognition: {
      title: 'Recognition and everyday physical strain',
      paragraphs: [
        'Back discomfort is among the most frequent physical issues. It often stems from a combination of prolonged desk work, overload, fatigue, or stress held unconsciously in the posture.',
        'When muscles remain tense over time, an uncomfortable cycle develops where movement feels restricted and the back tenses further. During consultation, we look beyond the sore area to assess your overall posture and daily movement habits.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditional Chinese Medicine',
      title: 'How does TCM view back pain?',
      intro:
        'In Chinese medicine, the lower back is intimately connected to Kidney energy (the root reserves and structural firmness) and the Bladder meridian, which traverses the entire spine. Several patterns can underlie the complaint:',
      patterns: [
        {
          name: 'Qi and Blood Stagnation',
          chineseName: '气滞血瘀',
          description:
            'Frequently seen in acute back spasms or sudden sprains. Muscle overload obstructs local circulation, leading to sharp discomfort and pronounced stiffness during movement.',
        },
        {
          name: 'Cold and Dampness',
          chineseName: '寒湿',
          description:
            'Characterized by a heavy, achy sensation that worsens during damp or cold weather and prolonged stillness, yet improves noticeably with warmth.',
        },
        {
          name: 'Kidney Qi Deficiency',
          chineseName: '肾虚',
          description:
            'Common in chronic, long-term lower back issues. The discomfort feels dull or tired, tending to flare up toward the end of an active day or during physical depletion.',
        },
      ],
    },
    treatment: {
      title: 'What to expect during treatment?',
      intro:
        'At the clinic, we explore where your tension originates and what factors influence your wellbeing. Every session is personalized:',
      steps: [
        'Personal consultation and diagnostic evaluation (including pulse and tongue observation).',
        'Traditional acupuncture using ultra-fine, sterile needles on targeted points to soften muscular knots.',
        'Optional moxibustion (gentle heat therapy) for cold-related stiffness, or cupping to release tense fascia.',
        'Practical suggestions regarding rest, warmth, and posture for daily life.',
      ],
      safetyNote:
        'Acupuncture serves as complementary care and works effectively alongside physical therapy. If you experience acute neurological symptoms, please consult your primary physician immediately.',
    },
    faqs: [
      {
        question: 'How many sessions are typically recommended for back pain?',
        answer:
          'For acute complaints, noticeable relief often emerges within 2 to 4 sessions. For chronic or longstanding back issues, a series of 5 to 8 sessions is generally recommended.',
      },
      {
        question: 'Does acupuncture in the back hurt?',
        answer:
          'No, acupuncture needles are extremely fine and feel nothing like injection needles. Insertion is barely noticeable.',
      },
    ],
    cta: {
      title: 'Experiencing persistent back pain?',
      text: 'During an initial consultation, we take ample time to understand your individual situation.',
      buttonText: 'Schedule an appointment',
    },
  },

  nekklachten: {
    slug: 'nekklachten',
    h1: 'Acupuncture for neck pain and stiffness',
    metaTitle: 'Acupuncture for neck pain & stiff neck | Bai Kang Tilburg',
    metaDescription:
      'Suffering from a stiff neck, muscle tension, or neck pain from stress or desk work? Discover how acupuncture at Bai Kang in Tilburg restores mobility.',
    heroIntro:
      'A stiff neck, persistent muscular tightness, or sharp discomfort when turning your head can restrict your daily ease. Acupuncture helps relieve tension and restore natural mobility in the neck.',
    recognition: {
      title: 'Recognition: tension and restricted movement',
      paragraphs: [
        'Neck pain presents in varied ways: a stiff neck in the morning, tight muscles, a persistent ache, or sharp pain during specific movements. Symptoms may appear suddenly, or build gradually through stress and postural strain.',
        'Neck tension frequently co-occurs with tension headaches or shoulder discomfort. We look at the complete physical pattern.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditional Chinese Medicine',
      title: 'How does acupuncture help with neck pain?',
      intro:
        'In TCM, discomfort is understood as stagnation of Qi and blood. Typical patterns include:',
      patterns: [
        {
          name: 'Qi and Blood Stagnation',
          description:
            'Common in acute neck spasms or sudden movement strain. Microcirculation is impeded, leading to stiff muscular tension.',
        },
        {
          name: 'Stress-induced Tension (Liver Qi Stagnation)',
          description:
            'Mental pressure and overactivity cause chronic contraction of the neck and trapezius muscles.',
        },
      ],
    },
    treatment: {
      title: 'What to expect during treatment?',
      intro:
        'During your consultation, we explore the origin of your tension. Treatment focuses on relief and recovery:',
      steps: [
        'Detailed intake and TCM diagnostics.',
        'Traditional acupuncture using ultra-fine needles on specific points to release tension knots.',
        'Optional gentle cupping to release tense fascia.',
        'Practical suggestions regarding posture and relaxation techniques.',
      ],
      safetyNote:
        'Acupuncture provides safe, complementary care. If you experience sudden neurological symptoms or weakness radiating down the arms, consult your physician first.',
    },
    faqs: [
      {
        question: 'Can acupuncture help when neck pain causes headaches?',
        answer:
          'Yes, tension headaches frequently originate from overactive trigger points in the neck and skull base. Releasing these points eases both neck stiffness and pressure in the head.',
      },
    ],
    cta: {
      title: 'Regain free movement?',
      text: 'Our goal is not only to ease discomfort, but to help you move freely and comfortably throughout your daily life.',
      buttonText: 'Schedule an appointment',
    },
  },

  schouderklachten: {
    slug: 'schouderklachten',
    h1: 'Acupuncture for shoulder complaints',
    metaTitle: 'Acupuncture for shoulder pain & frozen shoulder | Bai Kang',
    metaDescription:
      'Pain when lifting or rotating, a frozen shoulder or tight tendons? Read how Bai Kang treats shoulder issues in Tilburg.',
    heroIntro:
      'Pain or stiffness in the shoulder can make simple tasks incredibly painful. Acupuncture focuses on reducing tendon irritation and promoting a freer flow of energy and circulation within the joint.',
    recognition: {
      title: 'Restricted shoulder mobility',
      paragraphs: [
        'Shoulder issues often develop gradually. What starts as a mild irritation or fatigue around the shoulder blade can evolve into sharp pain when lifting or rotating the arm.',
        'We see various complaints: from overloaded tendons to the severe restriction of a frozen shoulder. The treatment is tailored accordingly.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditional Chinese Medicine',
      title: 'Understanding the shoulder',
      intro:
        'In TCM, the shoulder is a crossroads of several major meridians. Stagnation here can be categorized as:',
      patterns: [
        {
          name: 'Wind, Cold and Damp',
          description:
            'Often seen in a "frozen shoulder". Deep, heavy pain and severely restricted mobility, which often worsens with cold and responds to warmth.',
        },
        {
          name: 'Local Qi and Blood Stagnation',
          description:
            'Usually resulting from trauma or repetitive strain. The pain is sharp and localized.',
        },
      ],
    },
    treatment: {
      title: 'The treatment approach',
      intro:
        'Because shoulder issues can be persistent, we combine methods to support the tissue optimally:',
      steps: [
        'Comprehensive assessment of joint mobility.',
        'Acupuncture to release blockages and improve circulation around the tendons.',
        'Use of cupping or guasha to soften surrounding fascia.',
        'Advice on balancing rest and responsible movement.',
      ],
      safetyNote:
        'In cases of severe tissue damage like a full tendon tear, acupuncture is only supportive. We always advise consulting with your physical therapist or doctor.',
    },
    faqs: [
      {
        question: 'Can acupuncture help a frozen shoulder?',
        answer:
          'A frozen shoulder has a long natural recovery time. While acupuncture cannot halve this duration, it can effectively reduce the pain intensity and muscle spasms, greatly improving your comfort.',
      },
    ],
    cta: {
      title: 'Ready to create more space in your shoulder?',
      text: 'Discover if acupuncture can provide relief for your specific shoulder complaint.',
      buttonText: 'Schedule an appointment',
    },
  },

  hoofdpijn: {
    slug: 'hoofdpijn',
    h1: 'Acupuncture for tension headaches',
    metaTitle: 'Acupuncture for headaches | Bai Kang Tilburg',
    metaDescription:
      'Suffering from a tight band around your head or persistent tension headaches? Discover the gentle acupuncture approach at Bai Kang.',
    heroIntro:
      'A constant, pressing pain, the sensation of a tight band around the head, or pain radiating from the neck: headaches are exhausting. Acupuncture can help break this tension and provide structural relief.',
    recognition: {
      title: 'A tense, overloaded head',
      paragraphs: [
        'Tension headache is the most common form. It often builds throughout the day, feeling dull and pressing. Stress, fatigue, prolonged screen time, or jaw clenching frequently play a role.',
        'The complaint is rarely isolated. Often, the neck and shoulder muscles are overloaded. We treat the underlying mechanism, not just the pain itself.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditional Chinese Medicine',
      title: 'TCM perspective on headaches',
      intro:
        'In Chinese Medicine, the head is where Yang meridians converge. Headaches arise when this flow is disturbed:',
      patterns: [
        {
          name: 'Rising Liver-Yang and Tension',
          description:
            'Often triggered by stress or frustration. Characterized by a tight or throbbing sensation, typically at the temples or behind the eyes.',
        },
        {
          name: 'Qi or Blood Deficiency',
          description:
            'A dull, lingering headache that worsens with fatigue and exertion, and improves after rest.',
        },
      ],
    },
    treatment: {
      title: 'The treatment process',
      intro:
        'The treatment focuses on drawing excess tension away from the head and relaxing the neck:',
      steps: [
        'Pulse and tongue diagnostics to determine the nature of the headache.',
        'Placement of thin acupuncture needles (often in the feet, hands, and neck to draw energy downwards).',
        'Gentle massage or cupping of the neck and shoulders to release local trigger points.',
        'Discussion of external stimuli and lifestyle patterns.',
      ],
      safetyNote:
        'If you experience very sudden, inexplicably severe "thunderclap" headaches, seek immediate medical attention.',
    },
    faqs: [
      {
        question: 'Are many needles placed in the head?',
        answer:
          'Not usually. Points on the arms, legs, and feet are often used to guide the excess tension (Yang) away from the head.',
      },
    ],
    cta: {
      title: 'Looking for a calmer head?',
      text: 'Let’s look at the factors sustaining your headache during an intake consultation.',
      buttonText: 'Schedule an appointment',
    },
  },

  migraine: {
    slug: 'migraine',
    h1: 'Acupuncture for migraine prevention',
    metaTitle: 'Acupuncture and migraine prevention | Bai Kang TCM',
    metaDescription:
      'Recurring migraine attacks, throbbing pain, and nausea? See how acupuncture can help lower frequency and intensity in Tilburg.',
    heroIntro:
      'Migraines can incapacitate you for days with throbbing pain, nausea, and extreme sensitivity to stimuli. Acupuncture focuses preventatively on regulating the nervous system and reducing attack frequency.',
    recognition: {
      title: 'The disruptive impact of migraines',
      paragraphs: [
        'Migraines often have a building phase, followed by intense, usually one-sided, throbbing pain. This can be accompanied by an aura, vomiting, and a need for complete darkness. Triggers vary immensely: from hormonal fluctuations and stress to dietary factors.',
        'When migraines occur frequently, the fear of the next attack has a major impact. At Bai Kang, we treat outside of the acute attacks, strengthening your balance to reduce their severity and frequency.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditional Chinese Medicine',
      title: 'Migraine patterns in TCM',
      intro:
        'Migraines in TCM are strongly related to the flow of Liver and Gallbladder energy, which regulates the sides of the head:',
      patterns: [
        {
          name: 'Rising Liver Fire',
          description:
            'Manifests in sharp, throbbing pain, sometimes accompanied by red eyes, irritability, ringing in the ears, or a bitter taste in the mouth.',
        },
        {
          name: 'Hormonal and Blood Stagnation',
          description:
            'Migraines specifically linked to the menstrual cycle. We focus on regulating hormonal and blood flow balance in the lower body.',
        },
      ],
    },
    treatment: {
      title: 'Preventative treatment approach',
      intro:
        'Because we work preventatively, we schedule sessions during the calm phases between attacks:',
      steps: [
        'In-depth consultation to map your personal migraine triggers and cycle.',
        'Acupuncture aimed at harmonizing the autonomic nervous system and relaxing blood vessels.',
        'Evaluation after 4 to 6 treatments to see if the intensity or duration of the attacks is decreasing.',
      ],
      safetyNote:
        'Acupuncture is complementary. We advise against stopping prescribed migraine medication without consulting your neurologist or GP.',
    },
    faqs: [
      {
        question: 'Can I come in during a migraine attack?',
        answer:
          'During a severe acute attack, you often cannot travel or tolerate stimuli. It is better to rest. We prefer scheduling the treatment in an attack-free period to build up your system.',
      },
    ],
    cta: {
      title: 'Working towards fewer attacks?',
      text: 'Contact us to discuss how we can support your migraine pattern preventatively.',
      buttonText: 'Schedule an appointment',
    },
  },

  'spier-gewrichtsklachten': {
    slug: 'spier-gewrichtsklachten',
    h1: 'Acupuncture for muscle and joint complaints',
    metaTitle: 'Acupuncture for muscle and joint pain | Bai Kang Tilburg',
    metaDescription:
      'Suffering from stiff joints, osteoarthritis, tendon issues, or muscle pain? Discover how acupuncture in Tilburg promotes smoother movement and pain relief.',
    heroIntro:
      'Stiff joints, overloaded tendons, or persistent muscle aches can make every movement uncomfortable. Acupuncture focuses on reducing local inflammatory responses, promoting circulation, and restoring your natural freedom of movement.',
    recognition: {
      title: 'Recognition and physical strain',
      paragraphs: [
        'Muscle and joint complaints often manifest as stiffness upon waking (morning stiffness), a dull ache after exertion, or sharp pain during specific movements. This can result from overload, wear and tear (osteoarthritis), sports injuries, or repetitive strain (like RSI or tennis elbow).',
        'When a joint or tendon hurts, we often unconsciously compensate. This causes additional tension in the surrounding muscles, spreading the discomfort. Our treatment therefore targets the entire movement pattern surrounding the core issue.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditional Chinese Medicine',
      title: 'TCM perspective on muscles and joints',
      intro:
        'In TCM, joint and muscle complaints are often viewed as a stagnation of Qi and Blood in the meridians (known as Bi-syndrome). This can be exacerbated by external factors:',
      patterns: [
        {
          name: 'Cold and Dampness',
          description:
            'Pain that worsens in cold and damp weather. The joints feel stiff, heavy, and achy. Warmth and gentle movement often provide relief.',
        },
        {
          name: 'Heat and Inflammation',
          description:
            'The joint is red, swollen, and feels warm to the touch (as seen in active inflammation or acute overload). Cooling the area relieves the pain.',
        },
        {
          name: 'Qi and Blood Stagnation',
          description:
            'Sharp, localized pain, often arising after trauma (like a sprain or fall) or due to chronic overload.',
        },
      ],
    },
    treatment: {
      title: 'What to expect during treatment?',
      intro:
        'The treatment is tailored to your specific complaint and the degree of inflammation or stiffness:',
      steps: [
        'Local and distal (remote) placement of fine acupuncture needles to stimulate blood flow within the joint or tendon.',
        'When cold and stiffness play a role, we frequently use moxa (heat therapy) to deeply warm the tissue.',
        'For tight muscles surrounding the joint, cupping may be applied to release the fascia (connective tissue).',
        'Advice on finding the right balance between rest and responsible movement.',
      ],
      safetyNote:
        'In cases of severe tissue damage or acute infection, acupuncture serves as a complementary therapy. It works excellently alongside physical therapy or medical treatment to dampen pain and support tissue recovery.',
    },
    faqs: [
      {
        question: 'Can acupuncture help with osteoarthritis (wear and tear)?',
        answer:
          'Acupuncture cannot regenerate worn cartilage. However, it is highly effective at reducing pain, curbing local inflammation, and relaxing the muscles surrounding the joint. This often allows the joint to move more smoothly and with significantly less discomfort.',
      },
      {
        question: 'Is acupuncture painful on an already sensitive tendon?',
        answer:
          'No. When a tendon is inflamed or highly sensitive, we often avoid needling the painful spot directly. Instead, we use specific distal acupuncture points (along the same meridian) to relieve tension in the area.',
      },
    ],
    cta: {
      title: 'Want to move more freely?',
      text: 'Contact us to discuss how acupuncture can assist with your muscle or joint complaints.',
      buttonText: 'Schedule an appointment',
    },
  },
};

/* =======================================================================
   HELPER FUNCTIE
   ======================================================================= */
export function getComplaintArticle(slug: string, locale: string = 'nl'): ComplaintArticle | undefined {
  const dataset = locale === 'en' ? COMPLAINT_ARTICLES_EN : COMPLAINT_ARTICLES_NL;
  return dataset[slug] || COMPLAINT_ARTICLES_NL[slug];
}