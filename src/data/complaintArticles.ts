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
        'Binnen de Chinese geneeskunde is de onderrug nauw verbonden met de Nier-energie (de basisreserves en stevigheid van het skelet) en de Blaas-meridiaan, die langs de hele wervelkolom loopt. We onderscheiden verschillende patronen achter de pijn:',
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
            'Kenmerkt zich door een zwaar, zeurend gevoel en stijfheid die verergert bij guur, vochtig weer of langdurig stilzitten, en juist verlicht wordt door warmte (zoals een warme douche of kruik).',
        },
        {
          name: 'Leegte van de Nier-energie',
          chineseName: '肾虚',
          description:
            'Veelvoorkomend bij chronische, milde onderrugpijn die al maanden opspeelt. Deze pijn voelt dof of vermoeid aan en verergert vooral na een lange werkdag of bij algehele uitputting.',
        },
      ],
    },
    treatment: {
      title: 'Wat kun je verwachten tijdens de behandeling?',
      intro:
        'Tijdens een consult aan de Weteringlaan in Tilburg onderzoeken we waar de pijn vandaan komt en welke onderliggende factoren meespelen. De behandeling is altijd maatwerk:',
      steps: [
        'Persoonlijk gesprek en diagnostiek (inclusief het voelen van de pols en inspectie van de tong).',
        'Klassieke acupunctuur met flinterdunne, steriele naalden op gerichte punten om spierspanning te laten afvloeien en meridianen te harmoniseren.',
        'Optioneel aangevuld met moxa (zachte warmtebehandeling) bij koudeklachten, of cupping om vastzittend bindweefsel los te maken.',
        'Praktische adviezen voor rust, gerichte warmte en ademhaling voor thuis.',
      ],
      safetyNote:
        'Acupunctuur is een complementaire behandelwijze en kan uitstekend samengaan met reguliere fysiotherapie of medische zorg. Ervaar je acute uitvalverschijnselen (zoals krachtsverlies in een been of verlies van controle over blaas of darmen)? Neem dan altijd eerst direct contact op met je huisarts of specialist.',
    },
    faqs: [
      {
        question: 'Hoeveel behandelingen zijn er gemiddeld nodig voor rugklachten?',
        answer:
          'Bij acute klachten (zoals recente spit) is er vaak binnen 2 tot 4 behandelingen merkbare ontspanning en verlichting. Bij langdurige of chronische rugpijn die al maanden of jaren aanwezig is, adviseren we meestal een traject van 5 tot 8 sessies om een stabiele basis op te bouwen.',
      },
      {
        question: 'Doet acupunctuur in de rug pijn?',
        answer:
          'Nee, acupunctuurnaaldjes zijn uiterst dun en niet te vergelijken met injectienaaldjes. Het inbrengen is nauwelijks voelbaar. Wanneer een punt geactiveerd wordt, kun je een dof, tintelend of loom gevoel ervaren (het zogeheten DeQi-gevoel). Veel cliënten ervaren de sessie vooral als een diep rustmoment.',
      },
      {
        question: 'Kan acupunctuur helpen bij een hernia of ischias?',
        answer:
          'Acupunctuur herstelt geen fysieke uitstulping van een tussenwervelschijf, maar kan wel de vaak extreme reflexmatige spierspanning rondom de wervelkolom verlagen, de doorbloeding stimuleren en de ervaren uitstralingspijn helpen dempen.',
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
    h1: 'Acupunctuur bij nekpijn en stijfheid in Tilburg',
    metaTitle: 'Acupunctuur bij nekpijn & stijve nek | Bai Kang Tilburg',
    metaDescription:
      'Last van een stijve nek, spierkrampen of nekpijn door stress of werkhouding? Lees hoe acupunctuur bij Bai Kang in Tilburg ontspanning en bewegingsvrijheid ondersteunt.',
    heroIntro:
      'Een stijve nek, gespannen spieren of een zeurende pijn bij bepaalde bewegingen kan je dagelijkse bezigheden behoorlijk beperken. Acupunctuur kan helpen om spanning te verminderen, de natuurlijke doorbloeding te stimuleren en de beweeglijkheid van de nek te verbeteren.',
    recognition: {
      title: 'Herkenning: spanning, stijfheid en bewegingsbeperking',
      paragraphs: [
        'Nekpijn kan zich op verschillende manieren uiten. Een stijve nek, gespannen spieren, een zeurende pijn of juist een scherpe pijn bij bepaalde bewegingen. Soms ontstaat de klacht plotseling, bijvoorbeeld na een verkeerde beweging of een ongeval (zoals een whiplash). In andere gevallen bouwt de spanning zich geleidelijk op door stress, een langdurige werkhouding of overbelasting.',
        'Nekklachten kunnen ook samengaan met hoofdpijn, schouderklachten, pijn tussen de schouderbladen of een beperkte bewegingsvrijheid van de nek. Binnen onze aanpak kijken we daarom niet alleen naar de pijnplek, maar naar het hele spanningspatroon.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditionele Chinese Geneeskunde',
      title: 'Hoe kan acupunctuur helpen bij nekpijn?',
      intro:
        'Binnen de Traditionele Chinese Geneeskunde wordt niet alleen gekeken naar de plaats waar de pijn zich bevindt, maar ook naar het geheel van factoren die meespelen. Waar stagnatie optreedt in de meridianen, ontstaat pijn. We onderscheiden onder andere de volgende patronen:',
      patterns: [
        {
          name: 'Stagnatie van Qi en Bloed',
          chineseName: '气滞血瘀',
          description:
            'Kenmerkend voor acute nekpijn, plotselinge stijfheid na het slapen of klachten na een verkeerde beweging. De lokale weefselcirculatie blokkeert, waardoor spieren verkrampen en pijnlijk gefixeerd raken.',
        },
        {
          name: 'Invasie van Wind en Koude',
          chineseName: '风寒袭络',
          description:
            'Veroorzaakt door tocht of kou op de nek (zoals tochtstroom of airconditioning). Dit leidt tot een strakke, samentrekkende stijfheid die merkbaar verlicht wordt door warmtetherapie.',
        },
        {
          name: 'Spanning door stress en overbelasting',
          chineseName: '肝气郁结',
          description:
            'Mentale druk zorgt ervoor dat spieren rondom de nek en trapezius onbewust continu aangespannen blijven. Dit gaat dikwijls gepaard met oppervlakkige ademhaling en spanningshoofdpijn.',
        },
      ],
    },
    treatment: {
      title: 'Wat kun je verwachten tijdens de behandeling?',
      intro:
        'Tijdens de eerste behandeling bespreken we uitgebreid je klachten: wanneer de nekpijn is ontstaan, waar je de pijn voelt, welke bewegingen klachten geven en welke factoren de klachten beïnvloeden. De behandeling is gericht op ontspanning en herstel:',
      steps: [
        'Zorgvuldige intake en diagnostiek (inclusief het voelen van de pols en inspectie van de tong).',
        'Klassieke acupunctuur met flinterdunne naalden op specifieke punten om spanning los te laten en circulatie te herstellen.',
        'Optioneel aangevuld met moxa (weldadige warmtetherapie met bijvoetkruid) bij koudeklachten, of zachte cupping om vastzittend bindweefsel los te maken.',
        'Wanneer daar aanleiding toe is, kan aanvullend leefstijl- of ontspanningsadvies worden meegegeven.',
      ],
      safetyNote:
        'Acupunctuur is een veilige, complementaire zorgvorm die uitstekend gecombineerd kan worden met reguliere fysiotherapie. Ervaar je acute uitvalverschijnselen, uitstralende krachteloosheid in de armen of duizeligheid? Neem dan altijd eerst contact op met je huisarts.',
    },
    faqs: [
      {
        question: 'Hoeveel behandelingen zijn nodig voor nekklachten?',
        answer:
          'Iedere klacht en ieder lichaam reageert anders. Bij een recente, acute nekklacht kan relatief snel verandering worden ervaren (vaak binnen 2 tot 4 sessies). Langer bestaande klachten, artrose of nekpijn door chronische overbelasting vragen meestal 5 tot 8 behandelingen om een stabiele verbetering op te bouwen.',
      },
      {
        question: 'Kan acupunctuur helpen als mijn nekpijn hoofdpijn veroorzaakt?',
        answer:
          'Ja, spanningshoofdpijn ontstaat zeer frequent vanuit overbelaste spieren en triggerpoints in de nek en de schedelrand. Door deze punten gericht te behandelen, vermindert zowel de nekstijfheid als de drukkende spanning in het hoofd.',
      },
      {
        question: 'Doet een acupunctuurbehandeling in de nek pijn?',
        answer:
          'Nee. De gebruikte naalden zijn uiterst dun. Het inzetten voel je nauwelijks; wanneer het punt geactiveerd wordt, kun je een dof, warm of tintelend gevoel ervaren dat snel overgaat in diepe fysieke ontspanning.',
      },
    ],
    cta: {
      title: 'Weer vrijer kunnen bewegen zonder nekpijn?',
      text: 'Het doel van de behandeling is niet alleen minder pijn, maar vooral dat je je nek weer vrijer kunt bewegen en dagelijkse activiteiten met meer gemak kunt uitvoeren.',
      buttonText: 'Afspraak maken in Tilburg',
    },
  },
};

COMPLAINT_ARTICLES_NL['nek-schouderklachten'] = COMPLAINT_ARTICLES_NL['nekklachten'];

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
        'At the clinic on Weteringlaan in Tilburg, we explore where your tension originates and what factors influence your wellbeing. Every session is personalized:',
      steps: [
        'Personal consultation and diagnostic evaluation (including pulse and tongue observation).',
        'Traditional acupuncture using ultra-fine, sterile needles on targeted points to soften muscular knots and restore balanced circulation.',
        'Optional moxibustion (gentle heat therapy) for cold-related stiffness, or cupping to release tense fascia.',
        'Practical suggestions regarding rest, warmth, and posture for daily life.',
      ],
      safetyNote:
        'Acupuncture serves as complementary care and works effectively alongside physical therapy or conventional medical treatment. If you experience acute neurological symptoms (such as loss of leg strength or loss of bladder/bowel control), please consult your primary physician or emergency services immediately.',
    },
    faqs: [
      {
        question: 'How many sessions are typically recommended for back pain?',
        answer:
          'For acute complaints (such as a sudden back sprain), noticeable relief often emerges within 2 to 4 sessions. For chronic or longstanding back issues, a series of 5 to 8 sessions is generally recommended to build sustainable stability.',
      },
      {
        question: 'Does acupuncture in the back hurt?',
        answer:
          'No, acupuncture needles are extremely fine and feel nothing like injection needles. Insertion is barely noticeable. As a point activates, you may feel a mild, dull, or heavy sensation (known as DeQi). Most patients find the experience deeply calming.',
      },
      {
        question: 'Can acupuncture assist with sciatica or a disc herniation?',
        answer:
          'Acupuncture does not reverse physical anatomical disc displacement, but it can significantly reduce reactive muscle spasms around the spine, improve local blood flow, and help alleviate radiated nerve discomfort.',
      },
    ],
    cta: {
      title: 'Experiencing persistent back pain?',
      text: 'During an initial consultation, we take ample time to understand your individual situation.',
      buttonText: 'Schedule an appointment in Tilburg',
    },
  },

  nekklachten: {
    slug: 'nekklachten',
    h1: 'Acupuncture for neck pain and stiffness in Tilburg',
    metaTitle: 'Acupuncture for neck pain & stiff neck | Bai Kang Tilburg',
    metaDescription:
      'Suffering from a stiff neck, muscle tension, or neck pain from stress or desk work? Discover how acupuncture at Bai Kang in Tilburg restores mobility and ease.',
    heroIntro:
      'A stiff neck, persistent muscular tightness, or sharp discomfort when turning your head can restrict your daily ease. Acupuncture helps relieve tension, stimulate local circulation, and restore natural mobility in the neck.',
    recognition: {
      title: 'Recognition: tension, stiffness, and restricted movement',
      paragraphs: [
        'Neck pain presents in varied ways: a stiff neck in the morning, tight muscles, a persistent ache, or sharp pain during specific movements. Symptoms may appear suddenly after an awkward posture or trauma (such as whiplash), or build gradually through stress, prolonged computer work, and postural strain.',
        'Neck tension frequently co-occurs with tension headaches, shoulder discomfort, pain between the shoulder blades, or limited range of motion. We look at the complete physical pattern.',
      ],
    },
    tcmPerspective: {
      eyebrow: 'Traditional Chinese Medicine',
      title: 'How does acupuncture help with neck pain?',
      intro:
        'In Traditional Chinese Medicine, discomfort is understood as stagnation of Qi and blood: "where there is free flow, there is no pain; where there is stagnation, pain arises". The neck is a vital junction for energy pathways. Typical patterns include:',
      patterns: [
        {
          name: 'Qi and Blood Stagnation',
          chineseName: '气滞血瘀',
          description:
            'Common in acute neck spasms, waking with a locked neck, or sudden movement strain. Microcirculation is impeded, leading to stiff, locked muscular tension.',
        },
        {
          name: 'Wind and Cold Invasion',
          chineseName: '风寒袭络',
          description:
            'Triggered by exposure to drafts or air conditioning. Cold contracts local tissue, producing sharp tightness that responds favorably to warming therapies.',
        },
        {
          name: 'Stress-induced Tension (Liver Qi Stagnation)',
          chineseName: '肝气郁结',
          description:
            'Mental pressure and overactivity cause chronic contraction of the neck and trapezius muscles, often accompanied by shallow breathing and headaches.',
        },
      ],
    },
    treatment: {
      title: 'What to expect during treatment?',
      intro:
        'During your consultation, we explore the origin of your tension, the movements that trigger it, and influencing lifestyle factors. Treatment focuses on relief and recovery:',
      steps: [
        'Detailed intake and TCM diagnostics (pulse and tongue evaluation).',
        'Traditional acupuncture using ultra-fine needles on specific points to release tension knots and harmonize energy circulation.',
        'Optional moxibustion (soothing heat therapy) for cold-induced stiffness, or gentle cupping to release tense fascia.',
        'Practical suggestions regarding posture, warmth, and relaxation techniques for daily life.',
      ],
      safetyNote:
        'Acupuncture provides safe, complementary care that integrates smoothly with conventional physical therapy. If you experience sudden neurological symptoms or weakness radiating down the arms, consult your physician first.',
    },
    faqs: [
      {
        question: 'How many sessions are recommended for neck pain?',
        answer:
          'Each individual responds uniquely. For recent or acute neck stiffness, relief is often experienced within 2 to 4 sessions. Longstanding tension or degenerative stiffness typically benefits from a series of 5 to 8 sessions.',
      },
      {
        question: 'Can acupuncture help when neck pain causes headaches?',
        answer:
          'Yes, tension headaches frequently originate from overactive trigger points in the neck and skull base. Releasing these points eases both neck stiffness and pressure in the head.',
      },
      {
        question: 'Does neck acupuncture hurt?',
        answer:
          'No. The needles are extremely fine and barely felt upon insertion. When activated, a mild warming, tingling, or heavy sensation (DeQi) may occur, leading quickly into deep physical relaxation.',
      },
    ],
    cta: {
      title: 'Regain free movement without neck pain',
      text: 'Our goal is not only to ease discomfort, but to help you move freely and comfortably throughout your daily life.',
      buttonText: 'Schedule an appointment in Tilburg',
    },
  },
};

COMPLAINT_ARTICLES_EN['nek-schouderklachten'] = COMPLAINT_ARTICLES_EN['nekklachten'];

export function getComplaintArticle(slug: string, locale: string = 'nl'): ComplaintArticle | undefined {
  const dataset = locale === 'en' ? COMPLAINT_ARTICLES_EN : COMPLAINT_ARTICLES_NL;
  return dataset[slug] || COMPLAINT_ARTICLES_NL[slug];
}