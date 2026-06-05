import { projects } from "@/data/projects";
import { Icon } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    eyebrow: "Featured Work",
    title: "ผลงานเด่น",
    desc: "ตัวอย่างผลงานที่สะท้อนทักษะด้านกราฟิก วิดีโอ และเว็บไซต์",
    viewProject: "ดูในผลงาน",
  },
  en: {
    eyebrow: "Featured Work",
    title: "Case Studies",
    desc: "Selected works that represent my skills in graphic design, video editing, and website development.",
    viewProject: "View in works",
  },
} as const;

export default function CaseStudies({ lang }: { lang: Lang }) {
  const t = copy[lang];

  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="case-studies" className="section-pad relative overflow-hidden">
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="eyebrow">
            <Icon name="sparkles" className="h-4 w-4" /> {t.eyebrow}
          </div>

          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-black tracking-[-0.06em] text-blue-950">
            {t.title}
          </h2>

          <p className="mt-4 text-slate-600">{t.desc}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-[0_18px_50px_rgba(14,125,228,.12)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(14,125,228,.20)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-700 text-white shadow-lg">
                  <Icon name={project.icon} className="h-5 w-5" />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                  0{index + 1}
                </span>
              </div>

              <div className="text-xs font-black uppercase tracking-[0.16em] text-blue-500">
                {project.label[lang]}
              </div>

              <h3 className="mt-3 font-display text-2xl font-black tracking-[-0.04em] text-blue-950">
                {project.title[lang]}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {project.description[lang]}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.slice(0, 3).map((tool) => (
                  <span key={tool} className="tag">
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href="#portfolio"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 px-5 py-3 text-sm font-black !text-white shadow-[0_14px_36px_rgba(37,99,235,0.22)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                {t.viewProject}
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}