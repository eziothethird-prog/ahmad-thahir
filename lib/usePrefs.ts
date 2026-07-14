"use client";

import { useCallback, useEffect, useState } from "react";
import type { Lang, Theme } from "./content";

/** Reads the value the no-flash script already applied to <html>. */
function initialAttr(name: string, fallback: string) {
  if (typeof document !== "undefined") {
    return document.documentElement.getAttribute(name) || fallback;
  }
  return fallback;
}

export function usePrefs() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("id");
  const [mounted, setMounted] = useState(false);

  // Sync React state with whatever the pre-hydration script decided.
  useEffect(() => {
    setTheme(initialAttr("data-theme", "dark") as Theme);
    setLang(initialAttr("lang", "id") as Lang);
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return next;
    });
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === "id" ? "en" : "id";
      document.documentElement.setAttribute("lang", next);
      try {
        localStorage.setItem("lang", next);
      } catch {}
      return next;
    });
  }, []);

  return { theme, lang, toggleTheme, toggleLang, mounted };
}
