import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/lib/routes";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="bg-brand-deep-navy text-white min-h-screen flex flex-col items-center justify-center opacity-0 animate-fade-in transition-all duration-300">
      <div className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight transition-all duration-300">
          404 - Page Not Found
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-300 transition-all duration-300">
          The page you are looking for does not exist.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-brand-electric-purple hover:bg-brand-electric-purple/80 text-white font-bold text-lg rounded-lg transition-all duration-300 px-12 py-6"
        >
          <Link href={APP_ROUTES.HOME.ROOT}>Go back home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
