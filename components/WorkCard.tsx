import { Icon } from "@/components/Icons";
import type { Project } from "@/data/projects";
import type { Lang } from "@/lib/i18n";

const viewText = {
  th: "ดูโปรเจกต์",
  en: "View Project",
} as const;

export default function WorkCard({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <article className="magnetic-card group overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 shadow-[0_18px_50px_rgba(14,125,228,.12)] backdrop-blur">
      <div className={`relative grid aspect-[1.35/1] place-items-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,.55),transparent_12rem)]" />
        <div className="absolute left-4 top-4 z-10 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-black text-white backdrop-blur">
          {project.label[lang]}
        </div>
        <div className="relative z-10 grid h-24 w-24 place-items-center rounded-[2rem] bg-white/18 text-white shadow-2xl backdrop-blur transition duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon name={project.icon} className="h-12 w-12" />
        </div>
        <div className="absolute inset-0 grid translate-y-4 place-items-center bg-blue-950/62 opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-black text-white">
            {viewText[lang]} <Icon name="external" className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="font-display text-xl font-black tracking-[-0.04em] text-blue-950">{project.title[lang]}</h3>
        <p className="mt-2 min-h-[3.25rem] text-sm leading-6 text-slate-600">{project.description[lang]}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool) => <span className="tag" key={tool}>{tool}</span>)}
        </div>
      </div>
    </article>
  );
}
