import { Icon, type IconName } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    eyebrow: "Expertise",
    title: "ความสามารถ",
    desc: "สามทักษะหลักที่ช่วยให้แบรนด์ดูดี สื่อสารชัด และทำงานเป็นระบบ",
    featured: "Featured Skill",
    skills: [
      {
        icon: "palette" as IconName,
        title: "Graphic Design",
        desc: "ออกแบบ Poster, Social Media, Branding, Menu, Ads และ Presentation ให้สวย อ่านง่าย และตรงเป้าหมาย",
        tools: ["Photoshop", "Illustrator", "Canva", "Figma"],
      },
      {
        icon: "video" as IconName,
        title: "Video Editing",
        desc: "ตัดต่อ Short-form, Reels, TikTok, Promo Video พร้อม Subtitle, Hook และ CTA สำหรับงานขาย",
        tools: ["Premiere Pro", "After Effects", "CapCut"],
        featured: true,
      },
      {
        icon: "code" as IconName,
        title: "Programming",
        desc: "พัฒนา Website, Automation และ UI ด้วยเทคโนโลยีสมัยใหม่ พร้อม Responsive Design",
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      },
    ],
  },
  en: {
    eyebrow: "Expertise",
    title: "Skills",
    desc: "Three core skills that help brands look better, communicate clearly, and work smarter.",
    featured: "Featured Skill",
    skills: [
      {
        icon: "palette" as IconName,
        title: "Graphic Design",
        desc: "Designing posters, social media visuals, branding, menus, ads, and presentations with clear communication.",
        tools: ["Photoshop", "Illustrator", "Canva", "Figma"],
      },
      {
        icon: "video" as IconName,
        title: "Video Editing",
        desc: "Editing short-form videos, Reels, TikToks, and promo content with subtitles, hooks, and CTA for marketing.",
        tools: ["Premiere Pro", "After Effects", "CapCut"],
        featured: true,
      },
      {
        icon: "code" as IconName,
        title: "Programming",
        desc: "Building websites, automation, and responsive user interfaces with modern front-end technologies.",
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      },
    ],
  },
} as const;

export default function Skills({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section id="skills" className="section-pad relative overflow-hidden bg-[linear-gradient(160deg,#0c366c_0%,#074082_45%,#081e45_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,.22),transparent_25rem)]" />
      <div className="section-shell relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="eyebrow border-sky-300/20 bg-white/10 text-sky-200"><Icon name="sparkles" className="h-4 w-4" /> {t.eyebrow}</div>
          <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-black tracking-[-0.06em] text-white">{t.title}</h2>
          <p className="mt-4 text-sky-100/70">{t.desc}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.skills.map((skill) => (
            <article key={skill.title} className={`magnetic-card rounded-[2rem] p-6 sm:p-7 ${skill.featured ? "bg-white text-blue-950 md:-translate-y-5" : "bg-white/10 text-white border border-white/15 backdrop-blur"}`}>
              {skill.featured && <div className="mb-4 inline-flex rounded-full bg-gradient-to-r from-blue-700 to-sky-400 px-3 py-1 text-xs font-black text-white">{t.featured}</div>}
              <div className={`grid h-14 w-14 place-items-center rounded-3xl shadow-xl ${skill.featured ? "bg-gradient-to-br from-blue-600 to-sky-300 text-white" : "bg-white/12 text-sky-100"}`}><Icon name={skill.icon} className="h-7 w-7" /></div>
              <h3 className="mt-6 font-display text-2xl font-black tracking-[-0.04em]">{skill.title}</h3>
              <p className={`mt-3 text-sm leading-7 ${skill.featured ? "text-slate-600" : "text-sky-100/72"}`}>{skill.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skill.tools.map((tool) => <span key={tool} className={skill.featured ? "tag" : "rounded-full border border-sky-300/20 bg-white/10 px-3 py-1 text-xs font-extrabold text-sky-100"}>{tool}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
