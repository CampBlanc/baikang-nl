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
      nl: 'Acupunctuur kan vanuit een aanvullende verzekering geheel of gedeeltelijk worden vergoed, afhankelijk van je zorgverzekeraar en polis. Omdat vergoeding vanuit de aanvullende verzekering valt, gaat deze niet ten koste van je wettelijke eigen risico. Controleer altijd vooraf de voorwaarden van je eigen zorgverzekering.',
      en: 'Acupuncture may be partially or fully reimbursed through supplementary health insurance, depending on your insurer and policy. Because this reimbursement comes from supplementary insurance, it does not affect your statutory deductible. Always check the conditions of your own health insurance policy in advance.',
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
      nl: 'Bai Kang is aangesloten bij beroepsvereniging CAT en geschilleninstantie GAT. Of een behandeling voor vergoeding in aanmerking komt, hangt vervolgens af van de voorwaarden van je aanvullende zorgverzekering.',
      en: 'Bai Kang is affiliated with the professional association CAT and the GAT dispute resolution body. Whether a treatment qualifies for reimbursement depends on the conditions of your supplementary health insurance policy.',
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
      nl: 'Na afloop van de behandeling kun je eenvoudig per pin of contant betalen. De factuur ontvang je per e-mail. Als je behandeling volgens je polis voor vergoeding in aanmerking komt, kun je de factuur zelf indienen bij je zorgverzekeraar.',
      en: 'You can pay by card or cash after your treatment. You will receive the invoice by email. If your treatment is eligible for reimbursement under your policy, you can submit the invoice to your health insurer yourself.',
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