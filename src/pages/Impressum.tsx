import SEO from "@/components/SEO";

const Impressum = () => {
  return (
    <>
      <SEO
        title="Impressum – Localcoin Berlin"
        description="Impressum gemäß § 5 TMG für Localcoin Berlin. Anbieterkennzeichnung, Kontakt und Verantwortliche."
        canonicalPath="/impressum"
      />
      <main className="container mx-auto px-6 py-16">
        <article className="prose prose-invert max-w-3xl">
          <h1>Impressum</h1>
          <section>
            <h2>Anbieter</h2>
            <p>
              Localcoin Berlin<br />
              Musterstraße 1<br />
              10115 Berlin<br />
              Deutschland
            </p>
            <p>
              Vertreten durch: Max Mustermann<br />
              E-Mail: localcoinapp@gmail.com
            </p>
          </section>
          <section>
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </section>
          <section>
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default Impressum;
