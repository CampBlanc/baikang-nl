import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';

// Dynamische SEO-metadata op basis van de taal
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return {
      title: 'Privacy Policy | Bai Kang TCM Tilburg',
      description:
        'Privacy policy of Bái Kāng TCM. Learn how we handle your personal data and medical records in accordance with GDPR and WGBO.',
    };
  }

  return {
    title: 'Privacyverklaring | Bai Kang TCM Tilburg',
    description:
      'Privacyverklaring van Bái Kāng TCM. Lees hoe wij omgaan met uw persoonsgegevens en medisch dossier conform de AVG en WGBO.',
  };
}

// Hoofdpagina die kiest tussen Nederlands en Engels
export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale === 'en') {
    return <PrivacyPolicyEnglish />;
  }

  return <PrivacyPolicyDutch />;
}

/* =========================================================================
   NEDERLANDSE VERSIE
   ========================================================================= */
function PrivacyPolicyDutch() {
  return (
    <main className="bg-ivory min-h-screen py-16 sm:py-24 selection:bg-gold-antique/30">
      <article className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="border-b border-border-light/60 pb-10 mb-12">
          <span className="font-chinese text-gold text-2xl tracking-widest block mb-3">
            白康
          </span>
          <p className="eyebrow text-gold-dark mb-3">
            Juridisch &amp; Gegevensbescherming
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-forest-deep leading-tight mb-4">
            Privacyverklaring
          </h1>
          <p className="font-body text-xs sm:text-sm text-text-soft/80 uppercase tracking-widest">
            Bái Kāng 白康 TCM • Laatste update: juni 2025
          </p>
        </header>

        {/* Inhoud */}
        <div className="space-y-12 font-body text-text-soft leading-relaxed">
          {/* 1. Wie is verantwoordelijk */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              1. Wie is verantwoordelijk voor uw gegevens?
            </h2>
            <p>
              Bái Kāng TCM is een handelsnaam van <strong>Witkamp Wellness</strong>, gevestigd te Tilburg en ingeschreven bij de Kamer van Koophandel onder nummer 89643771. Witkamp Wellness is de officiële verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
            </p>
            <div className="bg-surface-cream/70 border border-border-light/60 p-6 space-y-1 text-sm text-forest-deep">
              <p className="font-semibold text-base text-forest-deep mb-2">
                Bái Kāng TCM | Witkamp Wellness
              </p>
              <p>Patrick Witkamp</p>
              <p>Weteringlaan 150</p>
              <p>5032 XV Tilburg</p>
              <p className="pt-2">
                E-mail:{' '}
                <a href="mailto:info@baikang.nl" className="text-gold-dark hover:underline">
                  info@baikang.nl
                </a>
              </p>
              <p>Telefoon: 06-83498042</p>
              <p>KvK-nummer: 89643771</p>
              <p>BTW-nummer: NL004749930B58</p>
            </div>
          </section>

          {/* 2. Welke persoonsgegevens */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              2. Welke persoonsgegevens verwerk ik?
            </h2>
            <div className="space-y-4 text-base">
              <div>
                <h3 className="font-semibold text-forest-deep">Contactgegevens</h3>
                <p>Naam, adres, telefoonnummer en e-mailadres.</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest-deep">Gezondheidsgegevens</h3>
                <p>
                  Klachten, medische voorgeschiedenis, medicijngebruik en overige informatie die u deelt tijdens de intake of behandelingen. Dit betreft bijzondere persoonsgegevens in de zin van de Algemene Verordening Gegevensbescherming (AVG).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-forest-deep">Administratieve gegevens</h3>
                <p>Afspraakhistorie en facturatiegegevens.</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest-deep">Websitegegevens</h3>
                <p>
                  Technische gegevens zoals geanonimiseerd IP-adres en browsertype, uitsluitend via functionele cookies die noodzakelijk zijn voor het functioneren van de website.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Doeleinden */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              3. Waarvoor gebruik ik uw gegevens?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Het uitvoeren van de behandelovereenkomst en het verlenen van TCM-zorg.</li>
              <li>Het bijhouden van een patiëntendossier conform de wettelijke verplichtingen uit de WGBO.</li>
              <li>Het inplannen, bevestigen en wijzigen van afspraken.</li>
              <li>Facturatie en de wettelijk verplichte financiële administratie.</li>
              <li>Het beantwoorden van vragen via het contactformulier of per e-mail.</li>
            </ul>
          </section>

          {/* 4. Grondslag */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              4. Op welke grondslag verwerk ik uw gegevens?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-forest-deep">Uitvoering van een overeenkomst:</strong> voor de behandeling, afspraken en communicatie.
              </li>
              <li>
                <strong className="text-forest-deep">Uitdrukkelijke toestemming:</strong> voor de verwerking van medische gegevens (gezondheidsgegevens), gegeven tijdens de intake.
              </li>
              <li>
                <strong className="text-forest-deep">Wettelijke verplichting:</strong> voor het bewaren van het medisch dossier conform de Wet op de geneeskundige behandelingsovereenkomst (WGBO) en de fiscale bewaarplicht voor facturen.
              </li>
            </ul>
          </section>

          {/* 5. Derden */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              5. Worden uw gegevens gedeeld met derden?
            </h2>
            <p>Gegevens worden uitdrukkelijk niet gedeeld met derden, tenzij:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>U hiervoor vooraf expliciete toestemming heeft gegeven (bijvoorbeeld voor intercollegiaal overleg of doorverwijzing naar een arts).</li>
              <li>Dit wettelijk verplicht is op grond van wet- of regelgeving.</li>
            </ul>
            <p className="text-sm italic pt-1">
              Er wordt geen gebruikgemaakt van externe tracking cookies, commerciële advertentienetwerken of marketingpartijen.
            </p>
          </section>

          {/* 6. Bewaartermijn */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              6. Hoe lang bewaar ik uw gegevens?
            </h2>
            <p>
              Gegevens worden niet langer bewaard dan wettelijk verplicht of noodzakelijk voor het behandeldoel:
            </p>
            <div className="overflow-x-auto border border-border-light/60">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-cream border-b border-border-light/60 text-forest-deep">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Categorie</th>
                    <th className="py-3 px-4 font-semibold">Bewaartermijn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light/40">
                  <tr>
                    <td className="py-3 px-4 text-forest-deep font-medium">Patiëntendossier</td>
                    <td className="py-3 px-4">20 jaar na laatste behandeling (conform WGBO)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-forest-deep font-medium">Facturen &amp; financiële administratie</td>
                    <td className="py-3 px-4">7 jaar (fiscale bewaarplicht Belastingdienst)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-forest-deep font-medium">Contactberichten &amp; e-mails</td>
                    <td className="py-3 px-4">Tot maximaal 1 jaar na volledige afhandeling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. Beveiliging */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              7. Beveiliging van uw gegevens
            </h2>
            <p>
              Er zijn passende technische en organisatorische maatregelen getroffen om uw persoonsgegevens te beveiligen tegen verlies, onbevoegde toegang, openbaarmaking of onrechtmatige verwerking. Uw medisch dossier wordt bewaard in een beveiligde omgeving en is uitsluitend toegankelijk voor Patrick Witkamp als uw behandelend therapeut.
            </p>
          </section>

          {/* 8. Uw rechten */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              8. Uw rechten
            </h2>
            <p>Onder de AVG heeft u de volgende rechten met betrekking tot uw persoonsgegevens:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-forest-deep">Inzagerecht:</strong> u kunt opvragen welke gegevens over u worden verwerkt.</li>
              <li><strong className="text-forest-deep">Recht op rectificatie:</strong> u kunt onjuiste gegevens laten corrigeren.</li>
              <li><strong className="text-forest-deep">Recht op verwijdering:</strong> u kunt verzoeken uw gegevens te verwijderen, voor zover de wet en de WGBO-bewaarplicht dit toelaten.</li>
              <li><strong className="text-forest-deep">Recht op beperking:</strong> u kunt de verwerking tijdelijk laten pauzeren.</li>
              <li><strong className="text-forest-deep">Recht op overdraagbaarheid:</strong> u kunt uw gegevens in een gestructureerd formaat opvragen.</li>
              <li><strong className="text-forest-deep">Recht van bezwaar:</strong> u kunt bezwaar maken tegen de verwerking.</li>
            </ul>
            <p className="pt-2">
              Voor het uitoefenen van deze rechten kunt u contact opnemen via{' '}
              <a href="mailto:info@baikang.nl" className="text-gold-dark hover:underline font-medium">
                info@baikang.nl
              </a>{' '}
              of via{' '}
              <a href="tel:0683498042" className="text-gold-dark hover:underline font-medium">
                06-83498042
              </a>
              . U ontvangt binnen 30 dagen een reactie.
            </p>
          </section>

          {/* 9. Klachten */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              9. Vragen en klachten
            </h2>
            <p>
              Heeft u een vraag of klacht over hoe er met uw gegevens wordt omgegaan? Neem dan gerust eerst contact op met de praktijk, zodat we er samen uit kunnen komen.
            </p>
            <p>
              Komt u er met de praktijk niet uit, dan heeft u het recht een klacht in te dienen bij de toezichthouder, de{' '}
              <a
                href="https://autoriteitpersoonsgegevens.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-dark hover:underline underline-offset-2"
              >
                Autoriteit Persoonsgegevens
              </a>
              .
            </p>
          </section>

          {/* 10. Wijzigingen */}
          <section className="space-y-4 border-t border-border-light/60 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              10. Wijzigingen in deze privacyverklaring
            </h2>
            <p>
              Bái Kāng TCM behoudt zich het recht voor deze privacyverklaring aan te passen indien de omstandigheden of wetgeving wijzigen. De meest actuele versie is te allen tijde te vinden op deze pagina.
            </p>
          </section>
        </div>

        {/* Terug naar home */}
        <div className="mt-16 pt-8 border-t border-border-light/60">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:text-gold-antique transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Terug naar de homepagina</span>
          </Link>
        </div>
      </article>
    </main>
  );
}

/* =========================================================================
   ENGELSE VERSIE
   ========================================================================= */
function PrivacyPolicyEnglish() {
  return (
    <main className="bg-ivory min-h-screen py-16 sm:py-24 selection:bg-gold-antique/30">
      <article className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="border-b border-border-light/60 pb-10 mb-12">
          <span className="font-chinese text-gold text-2xl tracking-widest block mb-3">
            白康
          </span>
          <p className="eyebrow text-gold-dark mb-3">
            Legal &amp; Data Protection
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-forest-deep leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-body text-xs sm:text-sm text-text-soft/80 uppercase tracking-widest">
            Bái Kāng 白康 TCM • Last updated: June 2025
          </p>
        </header>

        {/* Inhoud */}
        <div className="space-y-12 font-body text-text-soft leading-relaxed">
          {/* 1. Controller */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              1. Who is responsible for your data?
            </h2>
            <p>
              Bái Kāng TCM is a trade name of <strong>Witkamp Wellness</strong>, located in Tilburg and registered with the Dutch Chamber of Commerce (KvK) under number 89643771. Witkamp Wellness is the official data controller responsible for the processing of personal data as described in this privacy policy.
            </p>
            <div className="bg-surface-cream/70 border border-border-light/60 p-6 space-y-1 text-sm text-forest-deep">
              <p className="font-semibold text-base text-forest-deep mb-2">
                Bái Kāng TCM | Witkamp Wellness
              </p>
              <p>Patrick Witkamp</p>
              <p>Weteringlaan 150</p>
              <p>5032 XV Tilburg</p>
              <p>The Netherlands</p>
              <p className="pt-2">
                Email:{' '}
                <a href="mailto:info@baikang.nl" className="text-gold-dark hover:underline">
                  info@baikang.nl
                </a>
              </p>
              <p>Phone: +31 (0)6-83498042</p>
              <p>Chamber of Commerce (KvK): 89643771</p>
              <p>VAT ID: NL004749930B58</p>
            </div>
          </section>

          {/* 2. Data Categories */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              2. Which personal data do I process?
            </h2>
            <div className="space-y-4 text-base">
              <div>
                <h3 className="font-semibold text-forest-deep">Contact Information</h3>
                <p>Name, address, phone number, and email address.</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest-deep">Health &amp; Medical Data</h3>
                <p>
                  Health complaints, medical history, current medication, and other information shared during consultations or treatments. Under the GDPR, this is classified as special category personal data.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-forest-deep">Administrative Details</h3>
                <p>Appointment history and billing information.</p>
              </div>
              <div>
                <h3 className="font-semibold text-forest-deep">Website Data</h3>
                <p>
                  Technical information such as anonymized IP address and browser type, solely through functional cookies necessary for website operation.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Purposes */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              3. What do I use your data for?
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Executing the healthcare agreement and providing TCM treatments.</li>
              <li>Maintaining a confidential patient file in accordance with Dutch medical law (WGBO).</li>
              <li>Scheduling, confirming, and managing appointments.</li>
              <li>Invoicing and fulfilling legal financial record obligations.</li>
              <li>Responding to inquiries submitted via email or contact form.</li>
            </ul>
          </section>

          {/* 4. Legal Basis */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              4. Legal grounds for processing
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-forest-deep">Performance of a contract:</strong> for providing care, coordinating appointments, and administration.
              </li>
              <li>
                <strong className="text-forest-deep">Explicit consent:</strong> for processing special category health data, granted during the intake consultation.
              </li>
              <li>
                <strong className="text-forest-deep">Legal obligation:</strong> for retaining patient records under the Dutch Medical Treatment Contracts Act (WGBO) and statutory tax records.
              </li>
            </ul>
          </section>

          {/* 5. Third Parties */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              5. Is your data shared with third parties?
            </h2>
            <p>Your personal data is never shared with third parties, unless:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You have given explicit prior consent (e.g., referral or consultation with a GP or other specialist).</li>
              <li>Required by Dutch statutory law or a court order.</li>
            </ul>
            <p className="text-sm italic pt-1">
              No third-party tracking cookies, external advertising networks, or commercial marketing agencies are used.
            </p>
          </section>

          {/* 6. Retention Periods */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              6. How long is your data stored?
            </h2>
            <p>
              Data is retained no longer than strictly necessary for treatment purposes or legally mandated:
            </p>
            <div className="overflow-x-auto border border-border-light/60">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-cream border-b border-border-light/60 text-forest-deep">
                  <tr>
                    <th className="py-3 px-4 font-semibold">Category</th>
                    <th className="py-3 px-4 font-semibold">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-light/40">
                  <tr>
                    <td className="py-3 px-4 text-forest-deep font-medium">Medical record (patient file)</td>
                    <td className="py-3 px-4">20 years after last treatment (conform Dutch WGBO)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-forest-deep font-medium">Invoices &amp; financial records</td>
                    <td className="py-3 px-4">7 years (statutory Dutch tax retention)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-forest-deep font-medium">Contact messages &amp; emails</td>
                    <td className="py-3 px-4">Up to 1 year after final resolution</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. Security */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              7. Security of your data
            </h2>
            <p>
              Appropriate technical and organizational measures are in place to safeguard your data against loss, unauthorized access, disclosure, or unlawful processing. Patient files are stored in an encrypted environment and are accessible exclusively to Patrick Witkamp as your treating practitioner.
            </p>
          </section>

          {/* 8. Your Rights */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              8. Your statutory rights
            </h2>
            <p>Under the GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-forest-deep">Right of access:</strong> request an overview of the personal data held about you.</li>
              <li><strong className="text-forest-deep">Right to rectification:</strong> have inaccurate or incomplete data corrected.</li>
              <li><strong className="text-forest-deep">Right to erasure:</strong> request deletion of data, where permitted by medical and tax law.</li>
              <li><strong className="text-forest-deep">Right to restriction:</strong> request temporary restriction of processing.</li>
              <li><strong className="text-forest-deep">Right to data portability:</strong> receive your data in a structured, standard format.</li>
              <li><strong className="text-forest-deep">Right to object:</strong> object to certain forms of data processing.</li>
            </ul>
            <p className="pt-2">
              To exercise any of these rights, contact{' '}
              <a href="mailto:info@baikang.nl" className="text-gold-dark hover:underline font-medium">
                info@baikang.nl
              </a>{' '}
              or call{' '}
              <a href="tel:0683498042" className="text-gold-dark hover:underline font-medium">
                +31 (0)6-83498042
              </a>
              . You will receive a response within 30 days.
            </p>
          </section>

          {/* 9. Complaints */}
          <section className="space-y-4">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              9. Questions and complaints
            </h2>
            <p>
              If you have any questions or concerns regarding how your data is handled, please reach out to the clinic directly so we can resolve it together.
            </p>
            <p>
              If a solution cannot be reached, you have the legal right to submit a complaint to the national supervisory authority, the{' '}
              <a
                href="https://autoriteitpersoonsgegevens.nl/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-dark hover:underline underline-offset-2"
              >
                Dutch Data Protection Authority (Autoriteit Persoonsgegevens)
              </a>
              .
            </p>
          </section>

          {/* 10. Changes */}
          <section className="space-y-4 border-t border-border-light/60 pt-8">
            <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
              10. Changes to this privacy policy
            </h2>
            <p>
              Bái Kāng TCM reserves the right to update this privacy policy when required by operational or statutory changes. The most current version is always available on this page.
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 pt-8 border-t border-border-light/60">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:text-gold-antique transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to home</span>
          </Link>
        </div>
      </article>
    </main>
  );
}