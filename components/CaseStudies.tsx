import { projects } from "@/data/projects";
import { Icon } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    eyebrow: "Featured Work",
    title: "Case Studies",
    role: "Role",
    goal: "Goal",
    result: "Result",
  },
  en: {
    eyebrow: "Featured Work",
    title: "Case Studies",
    role: "Role",
    goal: "Goal",
    result: "Result",
  },
} as const;

export default function CaseStudies({ lang }: { lang: Lang }) {
  const featured = projects.filter((project) => project.featured).slice(0, 3);
  const t = copy[lang];

  return (
    <section id="case-studies" className="section-pad relative bg-white/45">
      <div className="section-shell">
        <div className="mb-12 text-center">
          <div className="eyebrow"><Icon name="sparkles" className="h-4 w-4" /> {t.eyebrow}</div>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,5vw,3.8rem)] font-black tracking-[-0.06em] text-blue-950">{t.title}</h2>
        </div>

        <div className="space-y-5">
          {featured.map((project, index) => (
            <article key={project.id} className="blue-card magnetic-card rounded-[2rem] p-5 sm:p-7 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[100px_1fr]">
                <div className="flex items-center gap-4 lg:block">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-300 font-display text-lg font-black text-white shadow-xl">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="tag lg:mt-4">{project.label[lang]}</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black tracking-[-0.04em] text-blue-950">{project.title[lang]}</h3>
                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <Info title={t.role} value={project.role[lang]} />
                    <Info title={t.goal} value={project.goal[lang]} />
                    <Info title={t.result} value={project.result[lang]} />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-blue-200/50 bg-white/55 p-4">
      <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-600">{title}</div>
      <div className="mt-2 text-sm font-bold leading-6 text-slate-700">{value}</div>
    </div>
  );
}
