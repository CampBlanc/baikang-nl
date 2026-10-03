import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import AtmosphericBamboo from '@/components/AtmosphericBamboo';
import FadeIn from '@/components/FadeIn';

export const metadata = {
  title: 'Wat is Acupunctuur? | Traditionele Chinese Geneeskunde Tilburg | Bai Kang',
  description: 'Ontdek hoe acupunctuur werkt vanuit zowel Traditionele Chinese Geneeskunde als moderne fysiologie. Persoonlijke diagnostiek en rustige behandelingen in Tilburg.',
};

export default function AcupuncturePage() {
  return (
    <main className="bg-ivory text-text selection:bg-gold-antique/30 overflow-hidden">
      
      {/* ========================================================
          1. HERO — Rustig binnenkomen met getrapte fades
          ======================================================== */}
      <section className="relative overflow-hidden w-full border-b border-border-light/30 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <AtmosphericBamboo
          variant="leaves"
          position="top-right"
          opacity="opacity-15"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-dark mb-4">
              Acupunctuur & Traditionele Chinese Geneeskunde
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-deep leading-[1.15] mb-6">
              Waar kan acupunctuur bij helpen?
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-2xl mx-auto mb-10">
              Acupunctuur wordt al duizenden jaren toegepast binnen de Traditionele Chinese Geneeskunde. Bij Bai Kang kijken we niet alleen naar de specifieke klacht, maar naar jouw situatie als één samenhangend geheel.
            </p>
          </FadeIn>
          
          <FadeIn delay={450}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/klachten"
                className="w-full sm:w-auto rounded-none border border-forest-deep px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:bg-forest-deep/5 transition-all"
              >
                Bekijk klachten & indicaties
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-none bg-forest-deep px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-text-light shadow-sm hover:bg-forest-dark transition-all"
              >
                Afspraak maken
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          2. EDITORIAL SPLIT — Tekst links, naald macrofoto rechts
          ======================================================== */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <FadeIn delay={0}>
                <p className="eyebrow text-gold-dark">Aandacht voor het geheel</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] text-forest-deep leading-tight mt-2">
                  Acupunctuur is meer dan een naald op een punt.
                </h2>
                <div className="w-16 h-px bg-gold-antique/60 my-6" aria-hidden="true" />
              </FadeIn>
              
              <FadeIn delay={150}>
                <div className="space-y-4 font-body text-base sm:text-lg text-text-soft leading-relaxed">
                  <p>
                    Een klacht ontstaat zelden op zichzelf. Pijn, spanning, vermoeidheid of slaapproblemen beïnvloeden hoe je je dagelijks voelt en reageert. Binnen de Traditionele Chinese Geneeskunde kijken we daarom verder dan alleen de plek waar het ongemak zich toont.
                  </p>
                  <p>
                    Hoe voelt je lichaam? Hoe slaap je? Hoe is je energieniveau door de dag heen? En hoe verhouden verschillende fysieke signalen zich tot elkaar?
                  </p>
                  <p>
                    Tijdens een behandeling gebruik ik deze antwoorden om een persoonlijk behandelbeeld te vormen en de keuze van de acupunctuurpunten exact daarop af te stemmen.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5">
              <FadeIn delay={200}>
                <div className="relative aspect-[4/3] w-full max-w-lg mx-auto border border-border-light/60 p-3 bg-surface-cream/50 shadow-sm">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/10-De naald als detail.png"
                      alt="Detail van fijne acupunctuurnaalden op een steen"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. VISUEEL INTERMEZZO — Moderne fysiologie & De Visual
          ======================================================== */}
      <section className="bg-surface-cream py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-5xl text-center">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-dark mb-3">Twee perspectieven</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-deep mb-6">
              Een behandeling die het lichaam prikkelt.
            </h2>
            <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed max-w-3xl mx-auto mb-16">
              Vanuit de moderne fysiologie onderzoekt men hoe acupunctuur het zenuwstelsel, de pijnverwerking en lokale weefselreacties stimuleert. Binnen TCM verklaren we dit vanuit het herstellen van de vrije stroom van Qi en natuurlijk evenwicht. Beide visies vullen elkaar prachtig aan.
            </p>
          </FadeIn>

          {/* De Visual: Lichaam · Patronen · Balans */}
          <FadeIn delay={150}>
            <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto border border-border-light shadow-md bg-ivory overflow-hidden mb-16">
              <Image
                src="/images/lichaam-patronen-balans.png"
                alt="Visualisatie van Lichaam, Patronen en Balans binnen Bai Kang TCM"
                fill
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-cover object-center"
              />
            </div>
          </FadeIn>

          {/* Drie fasen onder de visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-gold-antique/30 pt-12">
            <FadeIn delay={0}>
              <p className="eyebrow text-gold-dark mb-2">01. Prikkeling</p>
              <h3 className="font-display text-xl text-forest-deep mb-2">Gerichte stimulatie</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                Zeer dunne, steriele naalden geven een subtiele prikkel op nauwkeurig gekozen punten, afgestemd op jouw persoonlijke diagnose.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="eyebrow text-gold-dark mb-2">02. Reactie</p>
              <h3 className="font-display text-xl text-forest-deep mb-2">Natuurlijke respons</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                Het lichaam reageert op de prikkeling via het zenuwstelsel en lokale doorbloeding om het zelfherstellend vermogen te activeren.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="eyebrow text-gold-dark mb-2">03. Ontspanning</p>
              <h3 className="font-display text-xl text-forest-deep mb-2">Tijd voor herstel</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                Tijdens het rusten op de behandelbank schakelt het zenuwstelsel om van de dagelijkse actiestand naar diepe ontspanning.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. TCM VISIE — Typografische compositie
          ======================================================== */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-5">
              <FadeIn delay={0}>
                <p className="eyebrow text-gold-dark mb-3">Traditionele Filosofie</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] text-forest-deep leading-tight mb-6">
                  De visie van de Traditionele Chinese Geneeskunde.
                </h2>
                <blockquote className="font-display italic text-2xl text-forest-soft border-l-2 border-gold-antique pl-6 my-6">
                  “Het lichaam wordt niet gezien als een verzameling losse onderdelen, maar als een dynamisch geheel.”
                </blockquote>
              </FadeIn>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
              <FadeIn delay={100} className="border-t border-border-light/80 pt-5">
                <h3 className="font-display text-xl text-forest-deep mb-2">Qi & Doorstroming</h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  Binnen TCM is een vrije circulatie van energie en bloed essentieel. Waar stagnatie optreedt, ontstaan spanning en pijnklachten.
                </p>
              </FadeIn>

              <FadeIn delay={200} className="border-t border-border-light/80 pt-5">
                <h3 className="font-display text-xl text-forest-deep mb-2">Balans & Samenhang</h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  Functies in het lichaam zijn continu met elkaar verbonden. Een disbalans in rust of voeding kan zich uiten op een heel ander vlak.
                </p>
              </FadeIn>

              <FadeIn delay={300} className="border-t border-border-light/80 pt-5">
                <h3 className="font-display text-xl text-forest-deep mb-2">Persoonlijke Differentiatie</h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  Twee mensen met dezelfde hoofdpijn kunnen een totaal verschillend behandelplan krijgen, omdat de onderliggende oorzaak verschilt.
                </p>
              </FadeIn>

              <FadeIn delay={400} className="border-t border-border-light/80 pt-5">
                <h3 className="font-display text-xl text-forest-deep mb-2">Leefstijl & Belasting</h3>
                <p className="font-body text-sm text-text-soft leading-relaxed">
                  Slaap, stress, voeding en dagelijkse inspanning worden altijd meegenomen om het herstel duurzaam te ondersteunen.
                </p>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          5. KLACHTEN — Functioneel overzicht
          ======================================================== */}
      <section className="bg-surface-cream py-24 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-5xl">
          <FadeIn delay={0}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="eyebrow text-gold-dark mb-3">Toepassingsgebieden</p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep mb-4">
                Voor welke klachten?
              </h2>
              <p className="font-body text-base text-text-soft">
                Acupunctuur is geschikt voor uiteenlopende hulpvragen. De belangrijkste aandachtsgebieden binnen de praktijk:
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-14">
            <FadeIn delay={50} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">Pijn & Spanning</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                Rug-, nek- en schouderklachten, spanningshoofdpijn, gewrichtspijn en aanhoudende spierspanning.
              </p>
            </FadeIn>

            <FadeIn delay={150} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">Stress & Slaap</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                Moeite met ontspannen, een vol hoofd, innerlijke onrust en doorslaapproblemen.
              </p>
            </FadeIn>

            <FadeIn delay={250} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">Energie & Herstel</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                Aanhoudende vermoeidheid, weinig veerkracht of moeite met herstellen na inspanning of ziekte.
              </p>
            </FadeIn>

            <FadeIn delay={350} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">Maag & Darmen</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                Een opgeblazen gevoel, maagklachten, trage vertering en buikkrampen.
              </p>
            </FadeIn>

            <FadeIn delay={450} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">Vrouw & Hormonale Balans</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                Cyclusgerelateerde klachten, overgangsverschijnselen en emotionele schommelingen.
              </p>
            </FadeIn>

            <FadeIn delay={550} className="border-t border-border-light/60 pt-6">
              <h3 className="font-display text-2xl text-forest-deep mb-2">Stoppen met Roken & Vapen</h3>
              <p className="font-body text-sm text-text-soft leading-relaxed">
                Specifieke trajecten met moderne laseracupunctuur en ooracupunctuur om ontwenning te dempen.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={200}>
            <div className="text-center">
              <Link
                href="/klachten"
                className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:text-gold-antique transition-colors group"
              >
                <span>Bekijk alle specifieke indicaties op de klachtenpagina</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          6. BEHANDELPROCES — Verticale tijdlijn
          ======================================================== */}
      <section className="py-24 lg:py-32 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-4xl">
          <FadeIn delay={0}>
            <div className="text-center mb-16">
              <p className="eyebrow text-gold-dark mb-3">Werkwijze</p>
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
                Eerst kijken, dan behandelen.
              </h2>
            </div>
          </FadeIn>

          <div className="relative border-l border-gold-antique/40 ml-4 sm:ml-32 pl-8 sm:pl-12 space-y-12">
            
            <FadeIn delay={50} className="relative">
              <span className="absolute -left-[41px] sm:-left-[57px] top-1 flex h-6 w-6 items-center justify-center bg-ivory font-display text-sm font-semibold text-gold-dark border border-gold-antique/40">
                01
              </span>
              <h3 className="font-display text-2xl text-forest-deep mb-2">De Intake & Jouw Verhaal</h3>
              <p className="font-body text-base text-text-soft leading-relaxed">
                We nemen de tijd om te luisteren. Wat is je hulpvraag? Hoe zijn de klachten ontstaan en wat belemmert je in het dagelijks leven?
              </p>
            </FadeIn>

            <FadeIn delay={150} className="relative">
              <span className="absolute -left-[41px] sm:-left-[57px] top-1 flex h-6 w-6 items-center justify-center bg-ivory font-display text-sm font-semibold text-gold-dark border border-gold-antique/40">
                02
              </span>
              <h3 className="font-display text-2xl text-forest-deep mb-2">Traditionele Diagnostiek</h3>
              <p className="font-body text-base text-text-soft leading-relaxed">
                Aan de hand van observatie, tong- en polsdiagnostiek bepalen we waar de doorstroming stagneert en welk onderliggend patroon aanwezig is.
              </p>
            </FadeIn>

            <FadeIn delay={250} className="relative">
              <span className="absolute -left-[41px] sm:-left-[57px] top-1 flex h-6 w-6 items-center justify-center bg-ivory font-display text-sm font-semibold text-gold-dark border border-gold-antique/40">
                03
              </span>
              <h3 className="font-display text-2xl text-forest-deep mb-2">De Behandeling</h3>
              <p className="font-body text-base text-text-soft leading-relaxed">
                Zeer fijne naaldjes worden zorgvuldig geplaatst. Daarna lig je ongeveer 25 tot 30 minuten ontspannen in een rustige, warme behandelkamer.
              </p>
            </FadeIn>

            <FadeIn delay={350} className="relative">
              <span className="absolute -left-[41px] sm:-left-[57px] top-1 flex h-6 w-6 items-center justify-center bg-ivory font-display text-sm font-semibold text-gold-dark border border-gold-antique/40">
                04
              </span>
              <h3 className="font-display text-2xl text-forest-deep mb-2">Evaluatie & Vervolg</h3>
              <p className="font-body text-base text-text-soft leading-relaxed">
                We bespreken wat je hebt ervaren en hoe het lichaam heeft gereageerd. Vervolgbehandelingen worden steeds afgestemd op de actuele reactie.
              </p>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ========================================================
          7. SFEER & ONTSPANNING — Grote liggende foto
          ======================================================== */}
      <section className="py-20 lg:py-28 px-6 sm:px-10 lg:px-16 border-b border-border-light/40">
        <div className="mx-auto max-w-5xl">
          <FadeIn delay={0}>
            <div className="relative aspect-[16/9] w-full border border-border-light/60 p-3 bg-surface-cream/40 mb-10">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/9-rust-en-ontspanning.png"
                  alt="Patiënt in diepe ontspanning tijdens een acupunctuursessie"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl text-forest-deep">
                Rustig liggen. Even niets hoeven.
              </h2>
              <p className="font-body text-base sm:text-lg text-text-soft leading-relaxed">
                Geen scherm. Geen haast. De naalden zijn zo dun dat het plaatsen vaak nauwelijks voelbaar is. Wat overblijft is een zeldzaam moment van stilte waarin je lichaam de ruimte krijgt om te herstellen.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================================
          8. ZORGVULDIGHEID — Subtiele redactionele context
          ======================================================== */}
      <section className="py-16 px-6 sm:px-10 max-w-2xl mx-auto text-center border-b border-border-light/40">
        <FadeIn delay={0}>
          <p className="eyebrow text-gold-dark mb-3">Onderdeel van goede zorg</p>
          <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
            Acupunctuur is een waardevolle, complementaire behandelwijze en geen vervanging voor noodzakelijke reguliere geneeskunde. Bij acute of ernstige klachten adviseren we altijd eerst contact op te nemen met je huisarts. Bij Bai Kang werken we met zorg, aandacht en respect voor reguliere diagnostiek.
          </p>
        </FadeIn>
      </section>

      {/* ========================================================
          9. AFSLUITENDE DONKERE CTA
          ======================================================== */}
      <section className="bg-forest-deep py-20 px-6 sm:px-12 text-center text-text-light">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0}>
            <p className="eyebrow text-gold-antique mb-4">Persoonlijk kennismaken</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory mb-6">
              Past acupunctuur bij jouw situatie?
            </h2>
            <p className="font-body text-base sm:text-lg text-text-light-soft/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Je hoeft vooraf niet precies te weten welke behandelvorm nodig is. Tijdens een eerste intake bespreken we wat er speelt en bekijken we samen wat passend is.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-none bg-gold-antique px-9 py-4 font-body text-xs font-semibold uppercase tracking-widest text-forest-deep hover:bg-gold-warm transition-all shadow-md"
            >
              Afspraak maken
            </Link>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}