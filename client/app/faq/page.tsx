import QAndA from "@/components/faq/QAndA";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/lib/routes";
import Link from "next/link";

export default function FaqPage() {
  return (
    <section className="bg-brand-bg text-brand-text min-h-screen opacity-0 animate-fade-in transition-all duration-300 dark:bg-brand-deep dark:text-brand-surface">
      <div className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-heading dark:text-brand-surface transition-all duration-300">
            Häufig gestellte Fragen
          </h1>
          <p className="mt-4 text-lg md:text-xl text-brand-graphite dark:text-brand-muted-surface transition-all duration-300">
            Hier finden Sie Antworten auf häufig gestellte Fragen zu unseren
            Prozessen, Kosten und Dienstleistungen.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-20 max-w-4xl mx-auto">
          <QAndA />
        </div>

        {/* Closing */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
          <div className="border-t border-brand-border pt-12">
            <p className="text-xl text-brand-text dark:text-brand-muted-surface transition-all duration-300">
              Haben Sie weitere Fragen? Unser Team hilft Ihnen gerne weiter.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-brand-accent text-brand-surface font-bold text-lg rounded-lg transition-all duration-300 px-12 py-6 hover:brightness-95"
            >
              <Link href={APP_ROUTES.CONTACT}>Kontaktieren Sie uns</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
