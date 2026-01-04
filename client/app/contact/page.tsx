import { APP_ROUTES } from "@/lib/routes";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contactMethods = [
  {
    icon: <MessageCircle />,
    label: "WhatsApp",
    value: "",
    href: "https://wa.me/491703577305",
  },
  {
    icon: <Phone />,
    label: "Phone",
    value: "+49 170 3577305",
    href: "tel:+491703577305",
  },
  {
    icon: <Mail />,
    label: "Email",
    value: "info@caralytics.de",
    href: "mailto:info@caralytics.de",
  },
  {
    icon: <MapPin />,
    label: "Office",
    value: "Rudolfplatz 3, 50674 Köln",
    href: "",
  },
];

const ContactPage = () => {
  return (
    <section className="bg-brand-bg text-brand-text min-h-screen opacity-0 animate-fade-in transition-all duration-300 dark:bg-brand-deep dark:text-brand-surface">
      <div className="container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-brand-heading dark:text-brand-surface transition-all duration-300">
            Nehmen Sie Kontakt auf
          </h1>
          <p className="mt-4 text-lg md:text-xl text-brand-graphite dark:text-brand-muted-surface transition-all duration-300">
            Wir helfen Ihnen gerne. Kontaktieren Sie uns über Ihren bevorzugten
            Weg. Antworten auf häufig gestellte Fragen finden Sie in unseren{" "}
            <Link
              href={APP_ROUTES.FAQ}
              className="text-brand-accent underline hover:opacity-80"
            >
              FAQs
            </Link>
            .
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Contact Options */}
          <div className="space-y-6">
            {contactMethods.map((method, index) =>
              method.href ? (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 p-6 bg-brand-surface border border-brand-border rounded-2xl shadow-sm hover:shadow-lg hover:border-brand-accent/40 transition-all duration-200 group"
                >
                  <div className="text-brand-accent shrink-0 w-8 h-8 transition-all duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-heading dark:text-brand-surface transition-all duration-300">
                      {method.label}
                    </h3>
                    {method.value && (
                      <p className="mt-1 text-lg text-brand-text group-hover:text-brand-deep dark:group-hover:text-white transition-all duration-300">
                        {method.value}
                      </p>
                    )}
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-brand-surface border border-brand-border rounded-2xl shadow-sm hover:shadow-lg hover:border-brand-accent/40 transition-all duration-200 group"
                >
                  <div className="text-brand-accent shrink-0 w-8 h-8 transition-all duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-heading dark:text-brand-surface transition-all duration-300">
                      {method.label}
                    </h3>
                    {method.value && (
                      <p className="mt-1 text-lg text-brand-text group-hover:text-brand-deep dark:group-hover:text-white transition-all duration-300">
                        {method.value}
                      </p>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Right: Image & Map */}
          <div className="space-y-8">
            {/* Office Picture */}
            <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Carlytics Office"
                layout="fill"
                className="opacity-90 object-contain"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-deep/80 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-lg font-semibold text-white transition-all duration-300">
                Unser Büro in Köln
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-96 w-full rounded-2xl flex items-center justify-center flex-col shadow-md border-3 border-brand-muted-surface">
              <iframe
                width="425"
                height="350"
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.938931047916413%2C50.9355134054576%2C6.94075495004654%2C50.93641940484611&amp;layer=mapnik&amp;marker=50.93596640735823%2C6.939842998981476"
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
