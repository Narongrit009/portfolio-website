import { Icon } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    eyebrow: "Who I Am",
    cardTitle: "About Me",
    cardDesc: "Creative Designer & Digital Developer ที่ช่วยให้แบรนด์โดดเด่นด้วยงานภาพ วิดีโอ และระบบดิจิทัล",
    title: <>ออกแบบ<br />ตัดต่อ<br /><span className="gradient-title">สร้างระบบ</span></>,
    desc: "ผมเป็นคนทำงานสาย Creative + Tech ที่ออกแบบกราฟิกให้สวยงาม ตัดต่อวิดีโอให้น่าสนใจ และพัฒนาเว็บ/ระบบให้ใช้งานจริง เหมาะกับงานที่ต้องการทั้งความคิดสร้างสรรค์ ความเร็ว และความเข้าใจด้านเทคโนโลยี",
    cta: "มาทำงานด้วยกัน",
  },
  en: {
    eyebrow: "Who I Am",
    cardTitle: "About Me",
    cardDesc: "A Creative Designer & Digital Developer who helps brands stand out through visuals, video, and digital systems.",
    title: <>Design<br />Edit<br /><span className="gradient-title">Build Systems</span></>,
    desc: "I work at the intersection of creative and tech. I design clean visual content, edit engaging videos, and build practical websites or systems for brands that need creativity, speed, and technical understanding.",
    cta: "Let’s work together",
  },
} as const;

const tags = ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "CapCut", "Canva"];

export default function About({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="blue-card magnetic-card relative rounded-[2rem] p-6 sm:p-8">
          <div className="absolute -right-4 -top-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-300 to-blue-600 shadow-blue-glow" />
          <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-blue-600 to-sky-300 text-white shadow-xl"><Icon name="user" className="h-8 w-8" /></div>
          <h2 className="mt-6 font-display text-3xl font-black tracking-[-0.04em] text-blue-950">{t.cardTitle}</h2>
          <p className="mt-3 leading-7 text-slate-600">{t.cardDesc}</p>

          <div className="mt-7 space-y-5">
            {[
              ["Graphic Design", "92%"],
              ["Video Editing", "88%"],
              ["Programming", "82%"],
            ].map(([name, percent]) => (
              <div key={name}>
                <div className="mb-2 flex justify-between text-sm font-extrabold text-blue-900">
                  <span>{name}</span>
                  <span>{percent}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-blue-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-200" style={{ width: percent }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow"><Icon name="sparkles" className="h-4 w-4" /> {t.eyebrow}</div>
          <h2 className="mt-5 font-display text-[clamp(2.3rem,6vw,4.8rem)] font-black leading-[0.95] tracking-[-0.07em] text-blue-950">
            {t.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{t.desc}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
          </div>
          <a href="#contact" className="btn-primary mt-8 px-7 py-3.5">{t.cta}<Icon name="arrowRight" className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}
