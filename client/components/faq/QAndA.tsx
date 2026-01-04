"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QAndA() {
  const faqCategories = [
    {
      category: "Termin & Ablauf",
      questions: [
        {
          question: "Wie schnell bekomme ich einen Termin?",
          answer:
            "In vielen Fällen kurzfristig. Nach Ihrer Anfrage stimmen wir zeitnah einen passenden Termin zur Begutachtung ab.",
        },
        {
          question: "Wo findet die Begutachtung statt?",
          answer:
            "Die Begutachtung erfolgt nach Absprache – bei Ihnen vor Ort, in der Werkstatt oder an einem geeigneten Standort.",
        },
        {
          question: "Wie läuft der Ablauf nach dem Termin ab?",
          answer:
            "Nach der Besichtigung erstellen wir ein strukturiertes Gutachten und stellen es Ihnen digital zur Verfügung. Auf Wunsch unterstützen wir bei der Weiterleitung an Versicherung oder Anwalt.",
        },
      ],
    },
    {
      category: "Versicherung & Kosten",
      questions: [
        {
          question: "Wer übernimmt die Kosten für das Gutachten?",
          answer:
            "Bei einem unverschuldeten Haftpflichtschaden regulieren wir direkt mit der gegnerischen Versicherung. Die Kosten für das Gutachten werden in der Regel von dieser übernommen – abhängig von der Haftungsquote.",
        },
        {
          question: "Was passiert bei einem kleineren Schaden?",
          answer:
            "Bei kleineren Schäden erstellen wir auf Wunsch ein Kurzgutachten. Dieses ist kompakter als ein vollständiges Gutachten, liefert aber eine saubere und nachvollziehbare Grundlage für die Regulierung.",
        },
        {
          question: "Muss ich das Gutachten vorab bezahlen?",
          answer:
            "Nein. Unsere Forderungen machen wir erst geltend, nachdem die gegnerische Versicherung reguliert hat.",
        },
      ],
    },
    {
      category: "Technik & Recht",
      questions: [
        {
          question:
            "Wer erstellt die Gutachten und welchen Stellenwert haben sie?",
          answer:
            "Unsere Gutachten werden von Fahrzeugingenieuren erstellt und durch personenzertifizierte Sachverständige (TÜV Rheinland) verantwortet. Sie werden fachgerecht, nachvollziehbar und strukturiert erstellt und besitzen einen hohen Stellenwert bei Versicherungen, Anwälten und vor Gericht.",
        },
        {
          question: "Arbeitet ihr unabhängig von Versicherungen?",
          answer:
            "Ja. Unsere Bewertungen und Gutachten erfolgen unabhängig und neutral. Wir vertreten keine Versicherungen, sondern dokumentieren den technischen Sachverhalt objektiv und nachvollziehbar.",
        },
        {
          question: "Was passiert mit meinen Daten und Unterlagen?",
          answer:
            "Ihre Daten und Unterlagen werden DSGVO-konform verarbeitet und für bis zu 10 Jahre gespeichert. Sie können Ihre bei uns gespeicherten Unterlagen jederzeit anfordern. Eine Weitergabe erfolgt ausschließlich zur Auftragsabwicklung, z. B. an Versicherungen oder Bevollmächtigte.",
        },
      ],
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqCategories.map((cat, catIndex) => (
        <div key={catIndex}>
          <h2 className="text-2xl font-bold text-brand-accent mt-8 mb-4 transition-all duration-300">
            {cat.category}
          </h2>
          {cat.questions.map((item, qIndex) => (
            <AccordionItem
              key={qIndex}
              value={`item-${catIndex}-${qIndex}`}
              className="bg-brand-surface border border-brand-border rounded-lg px-6 transition-colors duration-200 dark:bg-brand-deep/50"
            >
              <AccordionTrigger className="text-lg font-semibold text-left text-brand-heading dark:text-brand-surface hover:text-brand-accent hover:no-underline transition-all duration-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-brand-text dark:text-brand-muted-surface pt-2 transition-all duration-300">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      ))}
    </Accordion>
  );
}
