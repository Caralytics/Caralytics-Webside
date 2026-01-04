import MenuItems from "@/components/navigation/DrawerItems";
import {
  DrawerClose,
  Drawer as DrawerComponent,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface DrawerProps {
  buttonStyle?: string;
  isSolid?: boolean;
}

export default function Drawer({ buttonStyle, isSolid }: DrawerProps) {
  return (
    <DrawerComponent direction="left" autoFocus>
      <DrawerTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-2 text-brand-accent uppercase tracking-wider text-sm md:text-base font-medium hover:opacity-70 transition-opacity relative focus:bg-none active:bg-none",
            buttonStyle
          )}
          aria-label="Toggle menu"
          type="button"
        >
          <Menu size={20} strokeWidth={1.5} />
          <span className="hidden sm:inline">Menü</span>
        </button>
      </DrawerTrigger>
      <DrawerContent
        showHandle={false}
        overlayClassName="bg-transparent/50! transition transition-duration-500"
        className={cn(
          "backdrop-blur-3xl fixed! left-0! top-0! bottom-0! right-auto! mt-0! inset-y-0! inset-x-auto! w-full md:w-1/2 lg:w-1/3 h-screen! rounded-none! sm:border-r sm:border-brand-border/20 border-none z-75",
          isSolid ? "bg-brand-deep/95" : "bg-transparent"
        )}
      >
        <div className="flex flex-col h-full">
          <DrawerHeader className="flex flex-row items-center justify-end p-6 md:p-8 border-b border-brand-border/20">
            <DrawerClose asChild>
              <div className="flex justify-between flex-row flex-1 items-center">
                <DrawerTitle className="text-brand-surface/40 text-sm sm:text-base">
                  MENÜ
                </DrawerTitle>
                <DrawerDescription className="sr-only">
                  Navigation menu
                </DrawerDescription>
                <button
                  className="flex items-center justify-center w-10 h-10 text-brand-surface hover:text-brand-accent rounded-md transition-colors pointer-events-auto cursor-pointer"
                  aria-label="Close menu"
                  type="button"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
            </DrawerClose>
          </DrawerHeader>
          <nav className="flex-1 p-6 md:p-8 overflow-y-auto">
            <MenuItems />
          </nav>
        </div>
      </DrawerContent>
    </DrawerComponent>
  );
}
