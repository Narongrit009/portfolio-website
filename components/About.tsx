import { Icon } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    eyebrow: "Who I Am",
    cardTitle: "About Me",
    cardDesc:
      "Creative Designer & Digital Developer ที่ช่วยให้แบรนด์โดดเด่นด้วยงานภาพ วิดีโอ และระบบดิจิทัล",
    title: (
      <>
        ออกแบบ
        <br />
        ตัดต่อ
        <br />
        <span className="gradient-title">สร้างระบบ</span>
      </>
    ),
    desc: "ผมเป็นคนทำงานสาย Creative + Tech ที่ออกแบบกราฟิกให้สวยงาม ตัดต่อวิดีโอให้น่าสนใจ และพัฒนาเว็บ/ระบบให้ใช้งานจริง เหมาะกับงานที่ต้องการทั้งความคิดสร้างสรรค์ ความเร็ว และความเข้าใจด้านเทคโนโลยี",
    cta: "มาทำงานด้วยกัน",
  },
  en: {
    eyebrow: "Who I Am",
    cardTitle: "About Me",
    cardDesc:
      "A Creative Designer & Digital Developer who helps brands stand out through visuals, video, and digital systems.",
    title: (
      <>
        Design
        <br />
        Edit
        <br />
        <span className="gradient-title">Build Systems</span>
      </>
    ),
    desc: "I work at the intersection of creative and tech. I design clean visual content, edit engaging videos, and build practical websites or systems for brands that need creativity, speed, and technical understanding.",
    cta: "Let’s work together",
  },
} as const;

const tags = [
  "Photoshop",
  "Figma",
  "CapCut",
  "Canva",
  "HTML",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

export default function About({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section
      id="about"
      className="section-pad relative overflow-hidden px-4 sm:px-6"
    >
      <div className="section-shell grid items-center gap-8 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="blue-card magnetic-card relative mx-auto w-full max-w-[440px] rounded-[1.6rem] p-5 sm:rounded-[2rem] sm:p-8 lg:max-w-none">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-300 text-white shadow-xl sm:h-16 sm:w-16 sm:rounded-3xl">
            <Icon name="user" className="h-7 w-7 sm:h-8 sm:w-8" />
          </div>

          <h2 className="mt-5 font-display text-2xl font-black tracking-[-0.04em] text-blue-950 sm:mt-6 sm:text-3xl">
            {t.cardTitle}
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            {t.cardDesc}
          </p>

          <div className="mt-6 space-y-4 sm:mt-7 sm:space-y-5">
            {[
              ["Graphic Design", "85%"],
              ["Video Editing", "90%"],
              ["Programming", "80%"],
            ].map(([name, percent]) => (
              <div key={name}>
                <div className="mb-2 flex justify-between gap-4 text-xs font-extrabold text-blue-900 sm:text-sm">
                  <span className="truncate">{name}</span>
                  <span className="shrink-0">{percent}</span>
                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-blue-100 sm:h-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-200"
                    style={{ width: percent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center lg:text-left">
          <div className="eyebrow justify-center lg:justify-start">
            <Icon name="sparkles" className="h-4 w-4" /> {t.eyebrow}
          </div>

          <h2 className="mx-auto mt-5 max-w-[520px] font-display text-[clamp(2.35rem,12vw,4.8rem)] font-black leading-[0.98] tracking-[-0.07em] text-blue-950 lg:mx-0">
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
            {t.desc}
          </p>

          <div className="mx-auto mt-6 flex max-w-[520px] flex-wrap justify-center gap-2 sm:mt-7 lg:mx-0 lg:justify-start">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-blue-100 bg-white/70 px-3 py-1.5 text-[0.7rem] font-extrabold text-blue-800 shadow-sm backdrop-blur sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="#contact"
            className="mx-auto mt-8 inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 px-7 py-3.5 text-sm font-black !text-white shadow-[0_14px_36px_rgba(37,99,235,0.28)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(37,99,235,0.36)] hover:brightness-110 active:translate-y-0 sm:w-auto lg:mx-0"
          >
            {t.cta}
            <Icon name="arrowRight" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}