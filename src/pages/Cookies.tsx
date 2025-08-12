import SEO from "@/components/SEO";

const Cookies = () => {
  return (
    <>
      <SEO
        title="Cookie-Richtlinie – Localcoin Berlin"
        description="Cookie-Richtlinie von Localcoin Berlin. Informationen zu notwendigen und optionalen Cookies."
        canonicalPath="/cookies"
      />
      <main className="container mx-auto px-6 py-16">
        <article className="prose prose-invert max-w-3xl">
          <h1>Cookie-Richtlinie</h1>
          <section>
            <h2>Welche Cookies setzen wir?</h2>
            <p>Wir setzen ausschließlich notwendige Cookies zur Speicherung Ihrer Einwilligung.</p>
          </section>
          <section>
            <h2>Einwilligung verwalten</h2>
            <p>Sie können Ihre Einwilligung jederzeit löschen, indem Sie die Website-Einstellungen/Browser-Cookies zurücksetzen.</p>
          </section>
        </article>
      </main>
    </>
  );
};

export default Cookies;
