export default function Impressum() {
  return (
    <main
      style={{
        paddingTop: "6rem",          // Abstand zum Header
        paddingBottom: "6rem",       // Abstand zum Footer
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Impressum</h1>

        <section style={{ marginBottom: "1.5rem" }}>
          <p>
            <strong>Caralytics Engineering</strong><br />
            Inhaber: Aland Goran (Freiberufler)<br />
            Rudolfplatz 3<br />
            50674 Köln
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            Telefon: +49 170 3577305<br />
            E-Mail: info@caralytics.de
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
            Haftung für Inhalte
          </h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
            Urheberrecht
          </h2>
          <p>
            Die durch den Betreiber dieser Seite erstellten Inhalte und Werke
            auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          </p>
        </section>
      </div>
    </main>
  );
}
