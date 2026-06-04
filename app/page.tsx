"use client";

import { useState } from "react";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Showreel from "@/components/Showreel";
import Skills from "@/components/Skills";
import type { Lang } from "@/lib/i18n";

export default function Home() {
  const [lang, setLang] = useState<Lang>("th");
  const toggleLang = () => setLang((current) => (current === "th" ? "en" : "th"));

  return (
    <main>
      <Hero lang={lang} onToggleLang={toggleLang} />
      <About lang={lang} />
      <Skills lang={lang} />
      <PortfolioGrid lang={lang} />
      <CaseStudies lang={lang} />
      <Showreel lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
