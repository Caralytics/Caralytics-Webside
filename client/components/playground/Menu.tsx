"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Check,
  ChevronsUpDown,
  Copy,
  Loader2,
  Palette,
  RotateCcw,
  Type,
} from "lucide-react";
import { useEffect, useState } from "react";

const BRAND_COLORS = [
  { name: "Deep Navy", value: "#090630", var: "--color-brand-deep-navy" },
  {
    name: "Electric Purple",
    value: "#9b1fe8",
    var: "--color-brand-electric-purple",
  },
  { name: "White", value: "#ffffff", var: "--color-brand-white" },
  { name: "Cloud Gray", value: "#edeff7", var: "--color-brand-cloud-gray" },
  { name: "Smoke Gray", value: "#d3d6e0", var: "--color-brand-smoke-gray" },
  { name: "Steel Gray", value: "#bcbfcc", var: "--color-brand-steel-gray" },
  { name: "Arsenic Gray", value: "#40424d", var: "--color-brand-arsenic-gray" },
  { name: "Phantom", value: "#1e1e24", var: "--color-brand-phantom" },
];

interface FontItem {
  name: string;
  value: string;
  isGoogleFont?: boolean;
}

const DEFAULT_FONTS: FontItem[] = [
  { name: "Manrope (Brand)", value: "var(--font-manrope), sans-serif" },
  { name: "Inter", value: "'Inter', sans-serif" },
  { name: "Arial", value: "Arial, sans-serif" },
  { name: "Georgia", value: "Georgia, serif" },
  { name: "Courier New", value: "'Courier New', monospace" },
];

function hexToHSL(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return `${(h * 360).toFixed(1)} ${(s * 100).toFixed(1)}% ${(l * 100).toFixed(1)}%`;
}

export default function Menu() {
  const [primaryColor, setPrimaryColor] = useState("#090630");
  const [accentColor, setAccentColor] = useState("#9b1fe8");
  const [textColor, setTextColor] = useState("#40424d");
  const [surfaceColor, setSurfaceColor] = useState("#ffffff");
  const [fontFamily, setFontFamily] = useState(
    "var(--font-manrope), sans-serif"
  );
  const [fonts, setFonts] = useState(DEFAULT_FONTS);
  const [isLoadingFonts, setIsLoadingFonts] = useState(false);
  const [openCombobox, setOpenCombobox] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchFonts = async () => {
      setIsLoadingFonts(true);
      try {
        // Fetching list of Google Fonts from a public source
        const response = await fetch("https://api.fontsource.org/v1/fonts");
        if (response.ok) {
          const data = await response.json();
          // Take top 100 fonts to keep list manageable
          const googleFonts = data
            .slice(0, 100)
            .map((font: { family: string }) => ({
              name: font.family,
              value: `'${font.family}', sans-serif`,
              isGoogleFont: true,
            }));
          setFonts([...DEFAULT_FONTS, ...googleFonts]);
        }
      } catch (error) {
        console.error("Failed to fetch fonts:", error);
        toast({
          title: "Error",
          description: "Failed to load extra fonts. Using defaults.",
          variant: "destructive",
        });
      } finally {
        setIsLoadingFonts(false);
      }
    };

    fetchFonts();
  }, [toast]);

  // Helper to load Google Font dynamically
  const loadGoogleFont = (fontName: string) => {
    const id = `font-${fontName.replace(/\s+/g, "-").toLowerCase()}`;
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/\s+/g, "+")}:wght@400;700&display=swap`;
      document.head.appendChild(link);
    }
  };

  // Helper to update styling
  const updateColor = (
    type: "primary" | "accent" | "text" | "surface",
    color: string
  ) => {
    const root = document.documentElement;
    if (type === "primary") {
      setPrimaryColor(color);
      // Updates the main brand color variable (affecting bg in layout)
      root.style.setProperty("--color-brand-deep-navy", color);

      // Optional: Update dark mode background HSL if we wanted to be thorough
      // const hsl = hexToHSL(color);
      // if (hsl) root.style.setProperty("--background", hsl);
    } else if (type === "accent") {
      setAccentColor(color);
      // Updates the brand electric purple variable
      root.style.setProperty("--color-brand-electric-purple", color);

      // Update the semantic accent HSL variable for shadcn components
      const hsl = hexToHSL(color);
      if (hsl) {
        root.style.setProperty("--accent", hsl);
      }
    } else if (type === "text") {
      setTextColor(color);
      // Updates the brand arsenic gray variable which drives brand-text
      root.style.setProperty("--color-brand-arsenic-gray", color);

      // Update semantic foreground variables for shadcn components
      const hsl = hexToHSL(color);
      if (hsl) {
        root.style.setProperty("--foreground", hsl);
        root.style.setProperty("--card-foreground", hsl);
        root.style.setProperty("--popover-foreground", hsl);
      }
    } else {
      setSurfaceColor(color);
      // Updates the brand surface/white variables
      root.style.setProperty("--color-brand-surface", color);
      root.style.setProperty("--color-brand-white", color);
    }
  };

  const updateFont = (fontValue: string) => {
    const selectedFont = fonts.find((f) => f.value === fontValue);
    if (selectedFont && selectedFont.isGoogleFont) {
      loadGoogleFont(selectedFont.name);
    }

    setFontFamily(fontValue);
    document.documentElement.style.setProperty("--font-sans", fontValue);
  };

  const reset = () => {
    setPrimaryColor("#090630");
    setAccentColor("#9b1fe8");
    setTextColor("#40424d");
    setSurfaceColor("#ffffff");
    setFontFamily("var(--font-manrope), sans-serif");

    const root = document.documentElement;
    root.style.removeProperty("--color-brand-deep-navy");
    root.style.removeProperty("--color-brand-electric-purple");
    root.style.removeProperty("--color-brand-arsenic-gray");
    root.style.removeProperty("--color-brand-surface");
    root.style.removeProperty("--color-brand-white");
    root.style.removeProperty("--accent");
    root.style.removeProperty("--foreground");
    root.style.removeProperty("--card-foreground");
    root.style.removeProperty("--popover-foreground");
    root.style.removeProperty("--font-sans");
  };

  const copyToClipboard = () => {
    const config = {
      primaryColor,
      accentColor,
      textColor,
      surfaceColor,
      fontFamily,
    };

    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setIsCopied(true);

    toast({
      title: "Config Copied",
      description: "Current design configuration copied to clipboard.",
    });

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="fixed left-0 bottom-0 z-50 mb-8 ms-10">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-14 w-14 rounded-full bg-brand-electric-purple text-brand-deep-navy border-2 border-white/20 shadow-xl hover:bg-brand-electric-purple/90 hover:scale-105 transition-all duration-300"
          >
            <Palette className="h-6 w-6" />
          </Button>
        </PopoverTrigger>
                <PopoverContent className="w-[480px] mb-2 ml-2 p-4 rounded-xl border-border/50 shadow-2xl bg-card/95 backdrop-blur-sm max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between sticky top-0 bg-card/95 backdrop-blur-sm z-20 pb-2 -mt-1 pt-1">
                      <div className="space-y-1">
                        <h4 className="font-semibold leading-none text-foreground">
                          Design Studio
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Customize the brand look
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={copyToClipboard}
                          className={cn(
                            "h-8 w-8 transition-all duration-300",
                            isCopied &&
                              "text-green-600 bg-green-100 hover:bg-green-200 hover:text-green-700"
                          )}
                          title="Copy config"
                        >
                          {isCopied ? (
                            <Check className="h-3.5 w-3.5" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={reset}
                          className="h-8 w-8"
                          title="Reset to defaults"
                        >
                          <RotateCcw className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
        
                    <Separator />
        
                    <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                      {/* Primary Color Section */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Primary Base
                          </Label>
                          <div className="flex items-center gap-2 bg-muted/50 rounded-full pl-2 pr-1 py-0.5 border border-border/50">
                            <span className="text-[10px] font-mono text-muted-foreground">
                              {primaryColor}
                            </span>
                            <div className="relative h-5 w-5 rounded-full overflow-hidden border border-border shadow-sm">
                              <Input
                                type="color"
                                value={primaryColor}
                                onChange={(e) => updateColor("primary", e.target.value)}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] w-[150%] p-0 border-0 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {BRAND_COLORS.map((color) => (
                            <button
                              key={color.value + "primary"}
                              onClick={() => updateColor("primary", color.value)}
                              className={cn(
                                "h-5 w-5 rounded-full border border-border/50 shadow-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
                                primaryColor === color.value &&
                                  "ring-2 ring-ring ring-offset-1 scale-110 z-10"
                              )}
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>
        
                      {/* Accent Color Section */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Accent Color
                          </Label>
                          <div className="flex items-center gap-2 bg-muted/50 rounded-full pl-2 pr-1 py-0.5 border border-border/50">
                            <span className="text-[10px] font-mono text-muted-foreground">
                              {accentColor}
                            </span>
                            <div className="relative h-5 w-5 rounded-full overflow-hidden border border-border shadow-sm">
                              <Input
                                type="color"
                                value={accentColor}
                                onChange={(e) => updateColor("accent", e.target.value)}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] w-[150%] p-0 border-0 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {BRAND_COLORS.map((color) => (
                            <button
                              key={color.value + "accent"}
                              onClick={() => updateColor("accent", color.value)}
                              className={cn(
                                "h-5 w-5 rounded-full border border-border/50 shadow-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
                                accentColor === color.value &&
                                  "ring-2 ring-ring ring-offset-1 scale-110 z-10"
                              )}
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>
        
                      {/* Secondary Base (Dark) Section */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Dark Base
                          </Label>
                          <div className="flex items-center gap-2 bg-muted/50 rounded-full pl-2 pr-1 py-0.5 border border-border/50">
                            <span className="text-[10px] font-mono text-muted-foreground">
                              {textColor}
                            </span>
                            <div className="relative h-5 w-5 rounded-full overflow-hidden border border-border shadow-sm">
                              <Input
                                type="color"
                                value={textColor}
                                onChange={(e) => updateColor("text", e.target.value)}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] w-[150%] p-0 border-0 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {BRAND_COLORS.map((color) => (
                            <button
                              key={color.value + "text"}
                              onClick={() => updateColor("text", color.value)}
                              className={cn(
                                "h-5 w-5 rounded-full border border-border/50 shadow-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
                                textColor === color.value &&
                                  "ring-2 ring-ring ring-offset-1 scale-110 z-10"
                              )}
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>
        
                      {/* Text Color (Light) Section */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Light Base
                          </Label>
                          <div className="flex items-center gap-2 bg-muted/50 rounded-full pl-2 pr-1 py-0.5 border border-border/50">
                            <span className="text-[10px] font-mono text-muted-foreground">
                              {surfaceColor}
                            </span>
                            <div className="relative h-5 w-5 rounded-full overflow-hidden border border-border shadow-sm">
                              <Input
                                type="color"
                                value={surfaceColor}
                                onChange={(e) => updateColor("surface", e.target.value)}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[150%] w-[150%] p-0 border-0 cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {BRAND_COLORS.map((color) => (
                            <button
                              key={color.value + "surface"}
                              onClick={() => updateColor("surface", color.value)}
                              className={cn(
                                "h-5 w-5 rounded-full border border-border/50 shadow-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1",
                                surfaceColor === color.value &&
                                  "ring-2 ring-ring ring-offset-1 scale-110 z-10"
                              )}
                              style={{ backgroundColor: color.value }}
                              title={color.name}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
        
                    <Separator />
        
                    {/* Typography Section */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Type className="h-3.5 w-3.5 text-muted-foreground" />
                        <Label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          Typography
                        </Label>
                        {isLoadingFonts && (
                          <Loader2 className="h-3 w-3 animate-spin text-muted-foreground ml-auto" />
                        )}
                      </div>
        
                      <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openCombobox}
                            className="w-full justify-between text-xs h-9"
                          >
                            <span className="truncate">
                              {fontFamily
                                ? fonts.find((font) => font.value === fontFamily)
                                    ?.name || fontFamily
                                : "Select font..."}
                            </span>
                            <ChevronsUpDown className="ml-2 h-3 w-3 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[280px] p-0" align="start">
                          <Command>
                            <CommandInput
                              placeholder="Search font..."
                              className="h-9 text-xs"
                            />
                            <CommandList>
                              <CommandEmpty>No font found.</CommandEmpty>
                              <CommandGroup>
                                {fonts.map((font) => (
                                  <CommandItem
                                    key={font.value}
                                    value={font.name}
                                    onSelect={() => {
                                      updateFont(font.value);
                                      setOpenCombobox(false);
                                    }}
                                    className="text-xs cursor-pointer"
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 h-3 w-3",
                                        fontFamily === font.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      )}
                                    />
                                    <span style={{ fontFamily: font.value }}>
                                      {font.name}
                                    </span>
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </PopoverContent>      </Popover>
    </div>
  );
}
