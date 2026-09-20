export default function HomePage() {
  return (
    <section className="bg-surface-cream py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        {/* Decoratief Chinees watermerk met Noto Serif SC */}
        <span className="font-chinese text-gold text-2xl block mb-2">
          白康
        </span>

        {/* Subtiel label */}
        <p className="eyebrow text-gold-dark mb-4">
          Traditionele Chinese Geneeskunde
        </p>

        {/* Display Heading met Cormorant Garamond */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-forest-deep leading-tight">
          In balans van binnenuit
        </h1>

        {/* Body tekst met Manrope */}
        <p className="mt-6 text-text-soft max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Een effectieve combinatie van klassieke acupunctuur en moderne lasertherapie voor langdurig herstel en vitaliteit.
        </p>
      </div>
    </section>
  );
}