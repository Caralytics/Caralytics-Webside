"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DrawerClose } from "@/components/ui/drawer";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import React from "react";

interface DrawerSubItemsProps {
  item: {
    title: string;
    href: string;
    subItems: {
      href: string;
      title: string;
    }[];
  };
}

export default function DrawerSubItems({ item }: DrawerSubItemsProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Collapsible className="" open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="flex items-center justify-between w-full px-4 py-3 text-brand-surface/40 font-semibold text-lg hover:text-brand-surface rounded-md transition-colors cursor-pointer pointer-events-auto"
        >
          {item.title}
          <ChevronUp
            size={20}
            className={`transition-all duration-300 ${
              isOpen ? "" : "rotate-180"
            }`}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
        <ul className="pl-8 flex flex-col gap-1 py-2">
          {item.subItems.map((subItem, subIndex) => (
            <li key={subIndex}>
              <DrawerClose asChild>
                <Link
                  href={subItem.href}
                  className="block px-4 py-2 text-brand-surface/60 font-medium text-base hover:text-brand-surface rounded-md transition-colors"
                >
                  {subItem.title}
                </Link>
              </DrawerClose>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
