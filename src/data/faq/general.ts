import { BilingualFaqEntry } from './types';

export const GENERAL_FAQS: BilingualFaqEntry[] = [
  {
    id: 'praktijk-locatie',
    category: 'algemeen',
    question: {
      nl: 'Waar is de praktijk van Bai Kang gevestigd?',
      en: 'Where is the Bai Kang clinic located?',
    },
    answer: {
      nl: 'De praktijk is gevestigd in Tilburg. De ruimte is rustig ingericht om een ontspannen en persoonlijke sfeer te bieden zonder afleiding of haast.',
      en: 'The clinic is located in Tilburg. The treatment space is designed to offer a serene and private environment, free from distraction or rush.',
    },
  },
  {
    id: 'voorbereiding-afspraak',
    category: 'algemeen',
    question: {
      nl: 'Moet ik mij op een specifieke manier voorbereiden op een consult?',
      en: 'Do I need to prepare in any specific way for a consultation?',
    },
    answer: {
      nl: 'Draag bij voorkeur comfortabele, loszittende kleding zodat armen en onderbenen gemakkelijk vrijgemaakt kunnen worden. Zorg dat je vooraf niet met een lege maag komt, maar vermijd vlak voor de afspraak een hele zware maaltijd of grote hoeveelheden cafeïne.',
      en: 'We recommend wearing loose, comfortable clothing so your lower arms and legs can be easily reached. Please ensure you haven’t skipped a meal, but avoid heavy food or large amounts of caffeine right before your appointment.',
    },
  },
  {
    id: 'privacy-dossier',
    category: 'algemeen',
    question: {
      nl: 'Hoe gaat Bai Kang om met mijn medische en persoonlijke gegevens?',
      en: 'How does Bai Kang handle my personal and medical data?',
    },
    answer: {
      nl: 'Je gegevens worden vertrouwelijk en volgens de geldende AVG-richtlijnen opgeslagen in een beveiligd patiëntendossier. Als CAT-therapeut geldt een strikte geheimhoudingsplicht; gegevens worden nooit zonder jouw uitdrukkelijke toestemming gedeeld met derden.',
      en: 'Your data is stored confidentially in a secure patient record in accordance with GDPR regulations. As a CAT therapist, I adhere to strict professional confidentiality; information is never shared with third parties without your explicit consent.',
    },
  },
  {
    id: 'geen-doorverwijzing',
    category: 'algemeen',
    question: {
      nl: 'Heb ik een verwijzing van mijn huisarts nodig om een afspraak te maken?',
      en: 'Do I need a referral from my doctor to book an appointment?',
    },
    answer: {
      nl: 'Nee, je kunt direct en zelfstandig een afspraak inplannen via het contactformulier of per e-mail. Een formele verwijsbrief van een arts is niet vereist.',
      en: 'No, you can schedule an appointment independently via the contact form or email. A formal referral letter from a physician is not required.',
    },
  },
];