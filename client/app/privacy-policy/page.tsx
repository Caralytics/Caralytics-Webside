export default function Datenschutz() {
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
        <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
          Datenschutzerklärung
        </h1>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>1. Verantwortlicher</h2>
          <p>
            Caralytics Engineering<br />
            Inhaber: Aland Goran<br />
            Rudolfplatz 3<br />
            50674 Köln<br />
            E-Mail: info@caralytics.de<br />
            Telefon: +49 170 3577305
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
            2. Erhebung und Verarbeitung personenbezogener Daten
          </h2>
          <p>
            Personenbezogene Daten werden nur verarbeitet, wenn Sie uns diese freiwillig
            mitteilen, zum Beispiel durch Kontaktaufnahme per E-Mail oder Telefon oder
            im Rahmen der Beauftragung eines Kfz-Gutachtens.
          </p>
          <p>
            Hierzu können insbesondere Kontaktdaten (Name, Anschrift, Telefonnummer,
            E-Mail-Adresse), Fahrzeugdaten, Schadendaten sowie Abrechnungsdaten gehören.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>3. Zwecke und Rechtsgrundlagen</h2>
          <p>
            Die Datenverarbeitung erfolgt zum Zweck der Bearbeitung Ihrer Anfrage,
            der Erstellung von Kfz-Gutachten sowie der Abwicklung des Auftragsverhältnisses.
          </p>
          <p>
            Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO (Vertrag und vorvertragliche
            Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
            4. Weitergabe von Daten
          </h2>
          <p>
            Eine Weitergabe personenbezogener Daten erfolgt nur, soweit dies für die
            Abwicklung des Auftrags erforderlich oder gesetzlich vorgeschrieben ist,
            etwa an:
          </p>
          <ul>
            <li>Versicherungen</li>
            <li>Rechtsanwälte</li>
            <li>Werkstätten</li>
            <li>Gerichte und Behörden</li>
          </ul>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>5. Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie dies für die
            genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten
            bestehen. Gutachtenunterlagen werden in der Regel bis zu 10 Jahre
            aufbewahrt.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>6. Ihre Rechte</h2>
          <p>
            Sie haben im Rahmen der gesetzlichen Bestimmungen das Recht auf Auskunft,
            Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
            sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.
          </p>
          <p>
            Hierzu können Sie sich jederzeit an uns wenden: info@caralytics.de.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
            7. Server-Logfiles
          </h2>
          <p>
            Beim Aufruf unserer Website werden durch den Provider automatisch
            technische Informationen (z.&nbsp;B. IP-Adresse, Browsertyp, Datum und Uhrzeit
            des Zugriffs) in sogenannten Server-Logfiles gespeichert. Diese Daten
            dienen ausschließlich der technischen Bereitstellung und Sicherheit
            der Website und werden nicht zur Identifizierung des Nutzers verwendet.
          </p>
        </section>

        <section style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>8. Cookies</h2>
          <p>
            Unsere Website verwendet derzeit nur technisch notwendige Cookies.
            Tracking- oder Analyse-Tools werden nicht eingesetzt.
          </p>
        </section>

        <section>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
            9. Aktualität dieser Datenschutzerklärung
          </h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
            stets den aktuellen rechtlichen Anforderungen und unseren Leistungen
            entspricht.
          </p>
        </section>
      </div>
    </main>
  );
}
