"use client";

import { useEffect, useMemo, useState } from "react";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import WorkCard from "@/components/WorkCard";
import { Icon } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    eyebrow: "My Works",
    title: "ผลงาน",
    desc: "เลือกดูงานตามหมวด หรือดูภาพรวมทั้งหมดของสาย Graphic, Video และ Web",
    close: "ปิด",
    openWebsite: "เปิดเว็บไซต์",
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
    close: "Close",
    openWebsite: "Open Website",
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const t = copy[lang];

  const filtered = useMemo(() => {
  const visibleProjects = projects.filter((project) => project.featured);

  return active === "all"
    ? visibleProjects
    : visibleProjects.filter((project) => project.category === active);
}, [active]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="section-pad relative overflow-hidden">
      <div className="section-shell">
        <div className="mb-9 text-center">
          <div className="eyebrow">
            <Icon name="sparkles" className="h-4 w-4" /> {t.eyebrow}
          </div>

          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-black tracking-[-0.06em] text-blue-950">
            {t.title}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">{t.desc}</p>
        </div>

        <div className="no-scrollbar -mx-4 mb-8 flex gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:justify-center sm:px-0">
          {t.filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() =>
                setActive(filter.value as "all" | ProjectCategory)
              }
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-black transition ${
                active === filter.value
                  ? "bg-gradient-to-r from-sky-400 to-blue-700 text-white shadow-lg shadow-blue-700/20"
                  : "glass-panel text-blue-800 hover:bg-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {filtered.map((project) => (
  <WorkCard
  key={project.id}
  project={project}
  lang={lang}
  onOpen={(project) => {
    console.log("OPEN PROJECT:", project);
    setSelectedProject(project);
  }}
/>
))}
</div>

      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          lang={lang}
          closeText={t.close}
          openWebsiteText={t.openWebsite}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectModal({
  project,
  lang,
  closeText,
  openWebsiteText,
  onClose,
}: {
  project: Project;
  lang: Lang;
  closeText: string;
  openWebsiteText: string;
  onClose: () => void;
}) {
  const isVideo = project.category === "video";
  const isWebsite = project.category === "website";

  const hasRealImage =
    project.imageUrl &&
    !project.imageUrl.includes("YOUR_CLOUD_NAME") &&
    !project.imageUrl.includes("YOUR_");

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label={closeText}
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-md"
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="modal-in relative z-10 w-full max-w-[860px] overflow-hidden rounded-[1.8rem] border border-white/30 bg-white/95 shadow-[0_30px_90px_rgba(8,30,69,0.38)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-blue-100/80 bg-gradient-to-r from-white via-sky-50 to-white px-5 py-4">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
              {project.label[lang]}
            </div>

            <h3 className="mt-2 truncate font-display text-lg font-black tracking-[-0.04em] text-blue-950 sm:text-xl">
              {project.title[lang]}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-blue-100 bg-white text-sm font-black text-blue-900 shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition hover:bg-blue-700 hover:!text-white"
          >
            ✕
          </button>
        </div>

        <div className="grid max-h-[76vh] overflow-y-auto md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,.28),transparent_18rem),linear-gradient(145deg,#081e45,#0c366c_58%,#034d9e)] p-4 sm:p-5">
            {isVideo && project.youtubeId && !project.youtubeId.includes("YOUR_") ? (
              <div className="mx-auto aspect-[9/16] max-h-[58vh] w-full max-w-[250px] overflow-hidden rounded-[1.35rem] border border-white/15 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={project.title[lang]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : hasRealImage ? (
              <div className="flex min-h-[280px] items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/10 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur">
                <img
                  src={project.imageUrl}
                  alt={project.title[lang]}
                  className="max-h-[58vh] w-full rounded-[1rem] object-contain"
                />
              </div>
            ) : (
              <div
                className={`grid min-h-[280px] place-items-center rounded-[1.35rem] border border-white/15 bg-gradient-to-br ${project.gradient} shadow-[0_20px_60px_rgba(0,0,0,0.28)]`}
              >
                <div className="grid h-20 w-20 place-items-center rounded-[1.5rem] bg-white/18 text-white backdrop-blur">
                  <Icon name={project.icon} className="h-10 w-10" />
                </div>
              </div>
            )}
          </div>

          <div className="relative bg-white p-5 sm:p-6">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-sky-100/80 blur-3xl" />

            <div className="relative">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[0.68rem] font-black text-blue-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <h4 className="font-display text-[clamp(1.75rem,4vw,2.6rem)] font-black leading-[0.98] tracking-[-0.06em] text-blue-950">
                {project.title[lang]}
              </h4>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {project.description[lang]}
              </p>

              <div className="mt-6 rounded-[1.25rem] border border-blue-100 bg-gradient-to-br from-sky-50 to-white p-4 shadow-[0_14px_36px_rgba(14,125,228,0.07)]">
                <div className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-blue-500">
                  Project Type
                </div>

                <div className="mt-3 flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-700 text-white shadow-lg shadow-blue-600/20">
                    <Icon name={project.icon} className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="text-sm font-black text-blue-950">
                      {project.label[lang]}
                    </div>
                    <div className="text-xs text-slate-500">
                      {isVideo
                        ? "Vertical 9:16 preview"
                        : isWebsite
                          ? "Live website project"
                          : "Cloudinary image preview"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {isWebsite && project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 px-5 py-3 text-sm font-black !text-white shadow-[0_14px_34px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:brightness-110"
                  >
                    {openWebsiteText}
                    <Icon name="external" className="h-4 w-4" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-2xl border border-blue-100 bg-white px-5 py-3 text-sm font-black text-blue-800 shadow-[0_10px_26px_rgba(15,23,42,0.06)] transition hover:bg-blue-50"
                >
                  {closeText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}