import { BilingualFaqEntry } from './types';

export const TARIEVEN_FAQS: BilingualFaqEntry[] = [
  {
    id: 'vergoeding-verzekering',
    category: 'tarieven',
    question: {
      nl: 'Wordt acupunctuur vergoed door de zorgverzekering?',
      en: 'Is acupuncture covered by health insurance?',
    },
    answer: {
      nl: 'Acupunctuur wordt door de meeste zorgverzekeraars gedeeltelijk of geheel vergoed vanuit de aanvullende verzekering. Omdat het onder de aanvullende zorg valt, gaat dit niet ten koste van je eigen risico.',
      en: 'Acupuncture is partially or fully covered by most health insurers under supplementary packages. Because it falls under supplementary care, it does not affect your statutory deductible (eigen risico).',
    },
  },
  {
    id: 'verwijzing-nodig',
    category: 'tarieven',
    question: {
      nl: 'Heb ik een verwijzing van de huisarts nodig?',
      en: 'Do I need a referral from a general practitioner (GP)?',
    },
    answer: {
      nl: 'Nee, je hebt geen verwijsbrief van een huisarts of specialist nodig om een afspraak te maken bij Bai Kang.',
      en: 'No, you do not need a referral letter from a GP or medical specialist to schedule an appointment at Bai Kang.',
    },
  },
  {
    id: 'beroepsvereniging',
    category: 'tarieven',
    question: {
      nl: 'Bij welke beroepsvereniging is Bai Kang aangesloten?',
      en: 'Which professional association is Bai Kang affiliated with?',
    },
    answer: {
      nl: 'De praktijk is aangesloten bij de beroepsvereniging CAT en geschilleninstantie GAT, waardoor consulten in aanmerking komen voor vergoeding bij erkende zorgverzekeraars.',
      en: 'The clinic is registered with professional association CAT and dispute body GAT, ensuring eligible consultations qualify for reimbursement with participating insurers.',
    },
  },
  {
    id: 'betaling-declaratie',
    category: 'tarieven',
    question: {
      nl: 'Hoe verloopt de betaling en facturatie?',
      en: 'How do payment and invoicing work?',
    },
    answer: {
      nl: 'Na afloop van de behandeling kun je eenvoudig pinnen of contant betalen. De factuur ontvang je direct per e-mail, welke je kunt indienen bij je zorgverzekeraar.',
      en: 'You can pay by card or cash immediately following your session. You will receive an invoice by email, which you can submit directly to your health insurer.',
    },
  },
  {
    id: 'annuleren',
    category: 'tarieven',
    question: {
      nl: 'Wat gebeurt er als ik mijn afspraak moet annuleren?',
      en: 'What happens if I need to cancel my appointment?',
    },
    answer: {
      nl: 'Afspraken kunnen tot 24 uur van tevoren kosteloos worden gewijzigd of geannuleerd. Bij annuleringen binnen 24 uur kan de gereserveerde tijd in rekening worden gebracht.',
      en: 'Appointments can be rescheduled or cancelled free of charge up to 24 hours in advance. For cancellations within 24 hours, the reserved time may be billed.',
    },
  },
];