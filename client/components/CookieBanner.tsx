"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ca_cookie_consent"; // Caralytics :)

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const existing = localStorage.getItem(STORAGE_KEY);
    if (!existing) setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-white/95 backdrop-blur shadow-xl p-5">
        <h3 className="font-semibold text-lg">
          Cookies &amp; Datenschutzeinstellungen
        </h3>
        <p className="text-sm mt-2 text-neutral-700">
          Wir verwenden Cookies, um die Nutzung unserer Website auszuwerten
          (Google Analytics). Technisch nicht notwendige Cookies werden nur mit
          Ihrer Einwilligung gesetzt. Mehr dazu in unserer{" "}
          <Link href="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>
          .
        </p>

        <div className="flex flex-wrap gap-3 justify-end mt-4">
          <button
            className="px-4 py-2 rounded-md border text-sm"
            onClick={() => {
              if (typeof window !== "undefined") {
                localStorage.setItem(STORAGE_KEY, "declined");
                setOpen(false);
                window.location.reload();
              }
            }}
          >
            Nur notwendige
          </button>

          <button
            className="px-4 py-2 rounded-md bg-black text-white text-sm"
            onClick={() => {
              if (typeof window !== "undefined") {
                localStorage.setItem(STORAGE_KEY, "accepted");
                setOpen(false);
                window.location.reload();
              }
            }}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
