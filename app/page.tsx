"use client";

import { useMemo } from "react";
import { localize } from "@/lib/content";
import { usePrefs } from "@/lib/usePrefs";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Prototype } from "@/components/Prototype";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Pricing } from "@/components/Pricing";
import { Contact } from "@/components/Contact";

export default function Home() {
  const { theme, lang, toggleTheme, toggleLang } = usePrefs();
  const t = useMemo(() => localize(lang), [lang]);

  return (
    <main>
      <Nav t={t} lang={lang} theme={theme} toggleLang={toggleLang} toggleTheme={toggleTheme} />
      <Hero t={t} />
      <Experience t={t} />
      <Projects t={t} />
      <Prototype t={t} />
      <Skills t={t} />
      <Education t={t} />
      <Pricing t={t} />
      <Contact t={t} />
    </main>
  );
}
