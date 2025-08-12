import SEO from "@/components/SEO";

const Datenschutz = () => {
  return (
    <>
      <SEO
        title="Datenschutzerklärung – Localcoin Berlin"
        description="Datenschutzerklärung gemäß DSGVO für Localcoin Berlin. Informationen zur Verarbeitung personenbezogener Daten."
        canonicalPath="/datenschutz"
      />
      <main className="container mx-auto px-6 py-16">
        <article className="prose prose-invert max-w-3xl">
          <h1>Datenschutzerklärung</h1>
          <section>
            <h2>Verantwortlicher</h2>
            <p>Localcoin Berlin, Musterstraße 1, 10115 Berlin, E-Mail: localcoinapp@gmail.com</p>
          </section>
          <section>
            <h2>Verarbeitete Daten</h2>
            <p>Wir verarbeiten Kontaktdaten, die Sie im Rahmen der Warteliste oder Anfragen übermitteln.</p>
          </section>
          <section>
            <h2>Rechtsgrundlagen</h2>
            <p>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und lit. b (vorvertragliche Maßnahmen).</p>
          </section>
          <section>
            <h2>Speicherdauer</h2>
            <p>Ihre Daten werden gelöscht, sobald der Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
          </section>
          <section>
            <h2>Ihre Rechte</h2>
            <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit.</p>
          </section>
        </article>
      </main>
    </>
  );
};

export default Datenschutz;
