"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import WorkCard from "@/components/WorkCard";
import { Icon } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    eyebrow: "My Works",
    title: "ผลงาน",
    desc: "เลือกดูงานตามหมวด หรือดูภาพรวมทั้งหมดของสาย Graphic, Video และ Web",
    filters: [
      { label: "All", value: "all" },
      { label: "Graphic", value: "graphic" },
      { label: "Video", value: "video" },
      { label: "Website", value: "website" },
    ],
  },
  en: {
    eyebrow: "My Works",
    title: "Works",
    desc: "Browse selected works by category across Graphic Design, Video Editing, and Website projects.",
    filters: [
      { label: "All", value: "all" },
      { label: "Graphic", value: "graphic" },
      { label: "Video", value: "video" },
      { label: "Website", value: "website" },
    ],
  },
} as const;

export default function PortfolioGrid({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");
  const t = copy[lang];
  const filtered = useMemo(() => active === "all" ? projects : projects.filter((project) => project.category === active), [active]);

  return (
    <section id="portfolio" className="section-pad relative overflow-hidden">
      <div className="section-shell">
        <div className="mb-9 text-center">
          <div className="eyebrow"><Icon name="sparkles" className="h-4 w-4" /> {t.eyebrow}</div>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-black tracking-[-0.06em] text-blue-950">{t.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">{t.desc}</p>
        </div>

        <div className="no-scrollbar -mx-4 mb-8 flex gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:justify-center sm:px-0">
          {t.filters.map((filter) => (
            <button key={filter.value} onClick={() => setActive(filter.value as "all" | ProjectCategory)} className={`shrink-0 rounded-full px-5 py-3 text-sm font-black transition ${active === filter.value ? "bg-blue-700 text-white shadow-lg shadow-blue-700/20" : "glass-panel text-blue-800 hover:bg-white"}`}>
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => <WorkCard key={project.id} project={project} lang={lang} />)}
        </div>
      </div>
    </section>
  );
}
