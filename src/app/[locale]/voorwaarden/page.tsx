import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';

/* =========================================================================
   ALGEMENE VOORWAARDEN — overgenomen van de WordPress-site (versie 1.0)
   Pas de tekst hier aan; de pagina en de inhoudsopgave volgen automatisch.
   ========================================================================= */

type Clause = string | { text: string; list: string[] };

interface Article {
  title: string;
  intro?: string;
  clauses: Clause[];
}

const VERSION = '1.1';
const EFFECTIVE_DATE = '8 oktober 2026';

const ARTICLES: Article[] = [
  {
    title: 'Definities',
    intro: 'In deze algemene voorwaarden wordt verstaan onder:',
    clauses: [
      'De Praktijk: Witkamp Wellness, eenmanszaak van Patrick Witkamp, ingeschreven bij de Kamer van Koophandel onder nummer 89643771, gevestigd aan de Weteringlaan 150, 5032 XV Tilburg, handelend onder de handelsnaam Bai Kang (Bai Kang TCM).',
      'Cliënt: De persoon die gebruik maakt van de diensten van de praktijk.',
      'Behandeling: Alle door de praktijk aangeboden diensten op het gebied van acupunctuur en Traditionele Chinese Geneeskunde (TCM).',
      'Overeenkomst: De overeenkomst tussen de praktijk en de cliënt met betrekking tot het leveren van diensten, producten of digitale producten.',
    ],
  },
  {
    title: 'Toepasselijkheid',
    clauses: [
      'Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen de praktijk en de cliënt of cursist, tenzij uitdrukkelijk schriftelijk anders is overeengekomen.',
      'Door akkoord te gaan met een behandeling, traject of cursus verklaart de cliënt kennis te hebben genomen van deze voorwaarden en ermee in te stemmen.',
    ],
  },
  {
    title: 'Diensten en behandelingen',
    clauses: [
      'De praktijk biedt behandelingen aan op het gebied van acupunctuur en Traditionele Chinese Geneeskunde (TCM).',
      'De behandelingen zijn bedoeld ter ondersteuning van de gezondheid, maar de praktijk garandeert geen genezing of specifieke resultaten.',
      'De cliënt is verplicht om alle relevante medische informatie volledig en naar waarheid te verstrekken.',
      'De behandelingen zijn complementair aan de reguliere gezondheidszorg en geen vervanging voor reguliere medische diagnostiek of behandeling.',
    ],
  },
  {
    title: 'Aansprakelijkheid',
    clauses: [
      'De praktijk voert alle behandelingen zorgvuldig en professioneel uit, maar geeft geen garantie op specifieke resultaten.',
      'De praktijk is niet aansprakelijk voor schade die voortvloeit uit het niet naleven van adviezen of instructies door de cliënt.',
      'De praktijk is niet aansprakelijk voor bijwerkingen of allergische reacties, tenzij sprake is van opzet of grove nalatigheid.',
      'De cliënt blijft zelf verantwoordelijk voor de eigen gezondheid en medische beslissingen.',
      'Wanneer de cliënt producten of middelen heeft afgenomen maar geen vervolgafspraak maakt om de voortgang te evalueren, is de cliënt zelf verantwoordelijk voor de gevolgen.',
      'De praktijk is niet aansprakelijk voor indirecte schade, zoals gevolgschade, winstderving of immateriële schade.',
    ],
  },
  {
    title: 'Resultaat van behandeling',
    clauses: [
      'De praktijk biedt behandelingen die gericht zijn op ondersteuning en verbetering van gezondheid. Er wordt geen garantie gegeven op specifieke resultaten.',
      'De cliënt erkent dat het effect van de behandeling afhankelijk is van persoonlijke omstandigheden, gezondheidstoestand, leefstijl en andere factoren.',
    ],
  },
  {
    title: 'Verantwoordelijkheid van de cliënt',
    clauses: [
      'De cliënt is verantwoordelijk voor het opvolgen van adviezen en richtlijnen van de praktijk.',
      'De praktijk is niet verantwoordelijk voor het resultaat indien adviezen niet worden opgevolgd.',
    ],
  },
  {
    title: 'Digitale producten',
    clauses: [
      'De digitale producten van de praktijk zijn gebaseerd op inzichten uit de Traditionele Chinese Geneeskunde (TCM), een gezondheidssysteem met meer dan 3000 jaar geschiedenis.',
      'De inhoud is bedoeld voor educatieve en informatieve doeleinden, niet als vervanging voor medische zorg of diagnose.',
      'De praktijk garandeert geen specifieke resultaten of genezing door deelname aan cursussen.',
      'Deelnemers zijn zelf verantwoordelijk voor het toepassen van de verstrekte informatie.',
      'Digitale producten zijn persoonlijk en niet overdraagbaar. Er vindt geen restitutie plaats na aankoop.',
    ],
  },
  {
    title: 'Intellectueel eigendom',
    clauses: [
      'Alle inhoud, teksten, video’s, documenten, werkboeken, afbeeldingen en overige materialen die door de praktijk worden verstrekt, zijn eigendom van de praktijk en beschermd door de Auteurswet en andere relevante wetgeving.',
      'Zonder schriftelijke toestemming van de praktijk is het niet toegestaan om materialen te kopiëren, verspreiden, delen of commercieel te gebruiken.',
      'Toegang tot online materiaal is persoonlijk en mag niet worden gedeeld met derden.',
      'In geval van schending behoudt de praktijk zich het recht voor toegang onmiddellijk te beëindigen en schadevergoeding te vorderen.',
      'De TCM-inhoud, zoals door de praktijk toegepast, vormt een unieke interpretatie en mag niet zonder toestemming worden gereproduceerd of commercieel gebruikt.',
    ],
  },
  {
    title: 'Betalingsvoorwaarden',
    clauses: [
      'Betaling voor trajecten dient vooraf of in twee termijnen te worden voldaan, zoals overeengekomen.',
      {
        text: 'Bij betaling in termijnen geldt:',
        list: [
          'de eerste termijn vóór aanvang van de eerste behandeling;',
          'de tweede termijn uiterlijk vóór afronding van het traject.',
        ],
      },
      'Bij niet-tijdige betaling is de praktijk gerechtigd de behandeling of cursus op te schorten.',
      'Er vindt geen restitutie plaats bij voortijdige beëindiging van een traject door de cliënt.',
    ],
  },
  {
    title: 'Annulering en verplaatsing van afspraken',
    clauses: [
      'Annuleren of verplaatsen van een afspraak dient minimaal 24 uur van tevoren te gebeuren, telefonisch, via WhatsApp of per e-mail.',
      'Bij annulering binnen 24 uur voor de afspraak wordt 50% van het tarief van de betreffende behandeling in rekening gebracht.',
      'Bij niet verschijnen zonder annulering (no-show) wordt het volledige tarief in rekening gebracht.',
      'Indien de cliënt een behandeltraject of pakket heeft afgenomen, wordt een niet-tijdig geannuleerde afspraak beschouwd als een gebruikte behandeling binnen het pakket. Deze behandeling komt te vervallen en wordt niet opnieuw ingepland of gecrediteerd.',
      'De praktijk behoudt zich het recht voor om een behandeling te verplaatsen in geval van overmacht, ziekte of onvoorziene omstandigheden. In dat geval zal de cliënt tijdig worden geïnformeerd en zal de behandeling kosteloos worden verzet.',
    ],
  },
  {
    title: 'Privacy en gegevensbescherming',
    clauses: [
      'De praktijk verwerkt persoonsgegevens conform de Algemene Verordening Gegevensbescherming (AVG).',
      'Door akkoord te gaan met de behandeling of cursus geeft de cliënt toestemming voor verwerking van gegevens voor het doel van behandeling, administratie of cursustoegang.',
      'Gegevens worden niet gedeeld met derden, tenzij wettelijk verplicht of met schriftelijke toestemming van de cliënt.',
    ],
  },
  {
    title: 'Klachten en geschillen (Wkkgz)',
    clauses: [
      'De praktijk beschikt over een klachtenregeling conform de Wet kwaliteit, klachten en geschillen zorg (Wkkgz).',
      'Klachten kunnen schriftelijk of per e-mail worden ingediend. De praktijk bevestigt ontvangst binnen 5 werkdagen en reageert binnen 6 weken.',
      'De praktijk is aangesloten bij een onafhankelijke klachtenfunctionaris die cliënten kosteloos ondersteunt.',
      'Indien een klacht niet naar tevredenheid wordt opgelost, kan deze worden voorgelegd aan een door het Ministerie van VWS erkende geschilleninstantie.',
      'Ontevredenheid over het resultaat van een behandeling of cursus geldt niet als medische klacht en geeft geen recht op restitutie.',
      'De praktijk registreert klachten uitsluitend ter kwaliteitsverbetering.',
    ],
  },
  {
    title: 'Gebruik van casuïstiek, ervaringen en beeldmateriaal',
    clauses: [
      'De praktijk mag geanonimiseerde casuïstiek gebruiken voor educatieve of wetenschappelijke doeleinden, zoals trainingen of publicaties.',
      'Voor promotiedoeleinden (zoals website of sociale media) zal uitsluitend materiaal worden gebruikt na schriftelijke toestemming van de cliënt.',
      'De cliënt kan deze toestemming te allen tijde intrekken; de praktijk verwijdert het materiaal dan binnen redelijke termijn.',
      'Reviews of testimonials die vrijwillig zijn aangeleverd mogen worden gepubliceerd, mits inhoudelijk niet misleidend gewijzigd.',
      'Casuïstiek en promotiemateriaal blijven intellectueel eigendom van de praktijk en mogen niet door derden worden gebruikt.',
    ],
  },
  {
    title: 'Overmacht',
    clauses: [
      'De praktijk is niet aansprakelijk voor schade voortvloeiend uit overmacht, waaronder ziekte, pandemie, brand, technische storingen of andere omstandigheden buiten haar invloedssfeer.',
      'In geval van overmacht kan de uitvoering worden opgeschort of verplaatst, zonder recht op schadevergoeding of restitutie.',
    ],
  },
  {
    title: 'Toepasselijk recht',
    clauses: [
      'Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing.',
      'Geschillen worden, tenzij de wet anders voorschrijft, voorgelegd aan de bevoegde rechter in het arrondissement waar de praktijk gevestigd is.',
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Terms and Conditions | Bai Kang TCM Tilburg'
      : 'Algemene voorwaarden | Bai Kang TCM Tilburg',
    description: isEn
      ? 'General terms and conditions of Bai Kang TCM in Tilburg (Dutch, legally binding).'
      : 'Algemene voorwaarden van Bai Kang TCM in Tilburg: behandelingen, betaling, annulering, privacy en klachten.',
    alternates: { canonical: `https://baikang.nl/${locale}/voorwaarden` },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === 'en';

  return (
    <main className="bg-ivory min-h-screen py-16 sm:py-24 selection:bg-gold-antique/30">
      <article className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12" lang="nl">
        {/* Header */}
        <header className="border-b border-border-light/60 pb-10 mb-10">
          <span className="font-chinese text-gold text-2xl tracking-widest block mb-3">白康</span>
          <p className="eyebrow text-gold-dark mb-3">
            {isEn ? 'Legal' : 'Juridisch'}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-forest-deep leading-tight mb-4">
            Algemene voorwaarden
          </h1>
          <p className="font-body text-xs sm:text-sm text-text-soft/80 uppercase tracking-widest">
            Bái Kāng 白康 TCM • Versie {VERSION} • In werking per {EFFECTIVE_DATE}
          </p>
          {isEn && (
            <p className="mt-6 border border-border-light/60 bg-surface-cream/70 p-4 font-body text-sm text-forest-deep" lang="en">
              These terms and conditions are only available in Dutch. The Dutch version is legally binding. If you have
              questions, please <Link href="/contact" className="underline underline-offset-2 hover:text-gold-dark">contact us</Link>.
            </p>
          )}
        </header>

        {/* Gegevens van de praktijk */}
        <div className="mb-12 border border-border-light/60 bg-surface-cream/70 p-6 space-y-1 font-body text-sm text-forest-deep">
          <p className="font-semibold text-base mb-2">Witkamp Wellness</p>
          <p>Eenmanszaak van Patrick Witkamp, handelend onder de naam Bai Kang TCM</p>
          <p>Weteringlaan 150, 5032 XV Tilburg</p>
          <p>KvK 89643771 · AGB zorgverlener 90122136 · AGB praktijk 90097044</p>
          <p>
            <a href="mailto:info@baikang.nl" className="underline underline-offset-2 hover:text-gold-dark">
              info@baikang.nl
            </a>
          </p>
        </div>

        {/* Inhoudsopgave */}
        <nav aria-label="Inhoudsopgave" className="mb-12">
          <p className="eyebrow text-gold-dark mb-3">Inhoud</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 font-body text-sm">
            {ARTICLES.map((a, i) => (
              <li key={a.title}>
                <a href={`#artikel-${i + 1}`} className="text-text-soft hover:text-gold-dark transition-colors">
                  <span className="font-mono text-xs text-gold-dark mr-2">{i + 1}.</span>
                  {a.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Artikelen */}
        <div className="space-y-10 font-body text-text-soft leading-relaxed">
          {ARTICLES.map((a, i) => {
            const n = i + 1;
            return (
              <section key={a.title} id={`artikel-${n}`} className="scroll-mt-28 space-y-3">
                <h2 className="font-display text-2xl sm:text-3xl text-forest-deep">
                  Artikel {n}: {a.title}
                </h2>
                {a.intro && <p>{a.intro}</p>}
                <ol className="space-y-2.5">
                  {a.clauses.map((c, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="font-mono text-xs text-gold-dark pt-1 shrink-0 w-9">
                        {n}.{j + 1}
                      </span>
                      {typeof c === 'string' ? (
                        <span>{c}</span>
                      ) : (
                        <div>
                          <span>{c.text}</span>
                          <ul className="mt-1.5 ml-4 list-disc space-y-1">
                            {c.list.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            );
          })}
        </div>

        {/* Afsluiting */}
        <footer className="mt-14 border-t border-border-light/60 pt-8 font-body text-xs sm:text-sm text-text-soft/80 space-y-1">
          <p>Versie: {VERSION}</p>
          <p>Datum van inwerkingtreding: {EFFECTIVE_DATE}</p>
          <p>© Witkamp Wellness – Bai Kang is een handelsnaam van Witkamp Wellness. Alle rechten voorbehouden.</p>
          <p className="pt-3">
            Zie ook de <Link href="/privacy" className="underline underline-offset-2 hover:text-gold-dark">privacyverklaring</Link>.
          </p>
        </footer>
      </article>
    </main>
  );
}
