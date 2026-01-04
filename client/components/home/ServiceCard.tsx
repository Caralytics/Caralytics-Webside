import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}
export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const { ref, hasTriggered } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 delay-[${index * 200}ms] ${
        hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link href={service.link} className="block h-full group">
        <Card className="h-full bg-brand-surface/5 border-brand-surface/10 hover:border-brand-electric-purple/50 transition-all duration-300 hover:-translate-y-2 flex flex-col">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-brand-electric-purple/10 flex items-center justify-center mb-4 group-hover:bg-brand-electric-purple group-hover:text-white transition-colors duration-300">
              <service.icon className="w-6 h-6 text-brand-electric-purple group-hover:text-white" />
            </div>
            <CardTitle className="text-xl text-brand-surface">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="grow">
            <p className="text-brand-surface/70">{service.description}</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              className="p-0 hover:bg-transparent text-white hover:text-brand-electric-purple flex items-center gap-2 cursor-pointer pointer-events-auto"
            >
              Mehr erfahren{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
