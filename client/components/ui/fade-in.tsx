"use client";

import { useInView } from "@/hooks/use-in-view";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in ms
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
  const { ref, hasTriggered } = useInView({ threshold: 0.1 });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-10";
      case "down":
        return "-translate-y-10";
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      default:
        return "";
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        hasTriggered ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getTransform()}`,
        className
      )}
    >
      {children}
    </div>
  );
}
