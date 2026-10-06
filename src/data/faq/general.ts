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
      nl: 'De praktijk van Bai Kang is gevestigd in Tilburg. De behandelruimte is rustig ingericht, met aandacht voor privacy, ontspanning en persoonlijke aandacht.',
      en: 'The Bai Kang clinic is located in Tilburg. The treatment space is designed to provide a calm and private environment, with room for relaxation and personal attention.',
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
      nl: 'Draag bij voorkeur comfortabele, loszittende kleding zodat armen en onderbenen gemakkelijk vrijgemaakt kunnen worden. Zorg dat je vooraf niet met een lege maag komt, maar vermijd vlak voor de afspraak een zware maaltijd of grote hoeveelheden cafeïne.',
      en: 'We recommend wearing loose, comfortable clothing so your lower arms and legs can be easily reached. Try not to arrive on an empty stomach, but avoid a heavy meal or large amounts of caffeine shortly before your appointment.',
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
      nl: 'Je persoonlijke en medische gegevens worden vertrouwelijk verwerkt en volgens de geldende privacywetgeving, waaronder de AVG, beveiligd opgeslagen in een patiëntendossier. Als CAT-therapeut geldt een geheimhoudingsplicht. Gegevens worden niet zonder passende grondslag of, waar vereist, jouw toestemming met derden gedeeld.',
      en: 'Your personal and medical data is handled confidentially and securely stored in a patient record in accordance with applicable privacy legislation, including the GDPR. As a CAT therapist, I am bound by professional confidentiality. Information is not shared with third parties without an appropriate legal basis or, where required, your consent.',
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
      nl: 'Nee, je kunt zonder verwijzing van de huisarts een afspraak maken. Een formele verwijsbrief van een arts is niet vereist.',
      en: 'No, you can book an appointment without a referral from your doctor. A formal referral letter from a physician is not required.',
    },
  },
];