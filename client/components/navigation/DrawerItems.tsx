import DrawerSubItems from "@/components/navigation/DrawerSubItems";
import { DrawerClose } from "@/components/ui/drawer";
import { APP_ROUTES } from "@/lib/routes";
import Link from "next/link";

const navItems = [
  {
    title: "Leistungen",
    href: "#",
    subItems: [
      {
        title: "Unfall-Schadengutachten",
        href: APP_ROUTES.SERVICES.ACCIDENT_DAMAGE_REPORTS,
      },
      {
        title: "Fahrzeugbewertung",
        href: APP_ROUTES.SERVICES.VEHICLE_VALUATION,
      },
      {
        title: "Leasing-Rückgabecheck",
        href: APP_ROUTES.SERVICES.LEASING_RETURN_CHECK,
      },
    ],
  },
  { title: "Technologien", href: APP_ROUTES.TECHNOLOGIES },
  { title: "Über uns", href: APP_ROUTES.ABOUT_US },
  { title: "FAQ", href: APP_ROUTES.FAQ },
  { title: "Kontakt", href: APP_ROUTES.CONTACT },
];

export default function DrawerItems() {
  return (
    <ul className="flex flex-col gap-1">
      {navItems.map((item, index) => (
        <li key={index}>
          {item.subItems && <DrawerSubItems item={item} />}
          {!item.subItems && (
            <DrawerClose asChild>
              <Link
                href={item.href}
                className="block px-4 py-3 text-brand-surface/40 font-semibold text-lg hover:text-brand-surface rounded-md transition-colors"
              >
                {item.title}
              </Link>
            </DrawerClose>
          )}
        </li>
      ))}
    </ul>
  );
}
