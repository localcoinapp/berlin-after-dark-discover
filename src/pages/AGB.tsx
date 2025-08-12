import SEO from "@/components/SEO";

const AGB = () => {
  return (
    <>
      <SEO
        title="AGB – Localcoin Berlin"
        description="Allgemeine Geschäftsbedingungen (AGB) von Localcoin Berlin. Nutzungsbedingungen und Rechte."
        canonicalPath="/agb"
      />
      <main className="container mx-auto px-6 py-16">
        <article className="prose prose-invert max-w-3xl">
          <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
          <section>
            <h2>Geltungsbereich</h2>
            <p>Diese AGB gelten für die Nutzung der Website und der angebotenen Dienste.</p>
          </section>
          <section>
            <h2>Leistungen</h2>
            <p>Wir bieten Informationen und Wartelisten-Registrierung für Localcoin Berlin.</p>
          </section>
          <section>
            <h2>Haftung</h2>
            <p>Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt, soweit gesetzlich zulässig.</p>
          </section>
        </article>
      </main>
    </>
  );
};

export default AGB;
