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
    return active === "all"
      ? projects
      : projects.filter((project) => project.category === active);
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
      {/* Backdrop */}
      <button
        type="button"
        aria-label={closeText}
        onClick={onClose}
        className="absolute inset-0 bg-blue-950/75 backdrop-blur-xl"
      />

      {/* Glow decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20 blur-3xl" />

      {/* Modal */}
      <div className="modal-in relative z-10 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/25 bg-white/92 shadow-[0_40px_120px_rgba(8,30,69,0.55)] backdrop-blur-2xl sm:rounded-[2.4rem]">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 border-b border-blue-100/80 bg-gradient-to-r from-white via-sky-50 to-blue-50 px-5 py-4 sm:px-7">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-blue-700">
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
              {project.label[lang]}
            </div>

            <h3 className="mt-2 truncate font-display text-xl font-black tracking-[-0.04em] text-blue-950 sm:text-2xl">
              {project.title[lang]}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-blue-100 bg-white text-blue-900 shadow-[0_10px_26px_rgba(15,23,42,0.08)] transition hover:bg-blue-700 hover:!text-white"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="grid max-h-[82vh] overflow-y-auto lg:grid-cols-[1.12fr_0.88fr]">
          {/* Preview side */}
          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,.35),transparent_22rem),linear-gradient(145deg,#081e45,#0c366c_55%,#034d9e)] p-4 sm:p-6 lg:p-8">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative">
              {isVideo && project.youtubeId && !project.youtubeId.includes("YOUR_") ? (
                <div className="mx-auto aspect-[9/16] max-h-[72vh] w-full max-w-[370px] overflow-hidden rounded-[1.7rem] border border-white/15 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    title={project.title[lang]}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : hasRealImage ? (
                <div className="overflow-hidden rounded-[1.7rem] border border-white/15 bg-white/10 p-2 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur">
                  <img
                    src={project.imageUrl}
                    alt={project.title[lang]}
                    className="max-h-[72vh] w-full rounded-[1.35rem] object-contain"
                  />
                </div>
              ) : (
                <div
                  className={`grid min-h-[420px] place-items-center rounded-[1.7rem] border border-white/15 bg-gradient-to-br ${project.gradient} shadow-[0_28px_90px_rgba(0,0,0,0.32)]`}
                >
                  <div className="grid h-28 w-28 place-items-center rounded-[2rem] bg-white/18 text-white backdrop-blur">
                    <Icon name={project.icon} className="h-14 w-14" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Detail side */}
          <div className="relative bg-white p-6 sm:p-8 lg:p-9">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-sky-100/70 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <h4 className="font-display text-[clamp(2rem,4vw,3.4rem)] font-black leading-[0.95] tracking-[-0.07em] text-blue-950">
                {project.title[lang]}
              </h4>

              <p className="mt-5 text-base leading-8 text-slate-600">
                {project.description[lang]}
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-blue-100 bg-gradient-to-br from-sky-50 to-white p-5 shadow-[0_18px_48px_rgba(14,125,228,0.08)]">
                <div className="text-xs font-black uppercase tracking-[0.16em] text-blue-500">
                  Project Type
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-700 text-white shadow-lg shadow-blue-600/20">
                    <Icon name={project.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-black text-blue-950">
                      {project.label[lang]}
                    </div>
                    <div className="text-sm text-slate-500">
                      {isVideo
                        ? "Vertical video preview"
                        : isWebsite
                          ? "Live website project"
                          : "Cloudinary image preview"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {isWebsite && project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 px-6 py-3.5 text-sm font-black !text-white shadow-[0_16px_40px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:brightness-110"
                  >
                    {openWebsiteText}
                    <Icon name="external" className="h-4 w-4" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-2xl border border-blue-100 bg-white px-6 py-3.5 text-sm font-black text-blue-800 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:bg-blue-50"
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