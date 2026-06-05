import { Icon } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    nav: [
      ["About", "#about"],
      ["Skills", "#skills"],
      ["Works", "#portfolio"],
      ["Contact", "#contact"],
    ],
    hire: "ติดต่อ",
    eyebrow: "Portfolio 2026",
    role: "Graphic Designer · Video Editor · Programmer",
    desc: "ผมช่วยแบรนด์และธุรกิจให้เติบโตด้วยงานดีไซน์ที่สวยงาม วิดีโอที่ขายได้ และระบบเว็บที่ใช้งานจริง",
    viewWorks: "ดูผลงาน",
    showreel: "ดู Showreel",
    stats: [
      ["1.5+", "ปีประสบการณ์"],
      ["20+", "โปรเจกต์"],
      ["3", "สายสกิลหลัก"],
    ],
    mockTitle: "Creative + Tech",
    mockDesc: "Design, Video and Web Systems",
    skills: ["Graphic Design", "Video Editing", "Programming"],
    learningTitle: "พร้อมเรียนรู้และเติบโต",
learningDesc: "เปิดรับประสบการณ์ใหม่ๆ พร้อมพัฒนาทักษะด้านดีไซน์ วิดีโอ และการเขียนโปรแกรม เพื่อสร้างงานที่ดีขึ้นในทุกโปรเจกต์",
  },
  en: {
    nav: [
      ["About", "#about"],
      ["Skills", "#skills"],
      ["Works", "#portfolio"],
      ["Contact", "#contact"],
    ],
    hire: "Contact",
    eyebrow: "Portfolio 2026",
    role: "Graphic Designer · Video Editor · Programmer",
    desc: "I help brands grow with beautiful design, high-converting videos, and practical web systems.",
    viewWorks: "View Works",
    showreel: "Watch Showreel",
    stats: [
      ["1.5+", "Years Experience"],
      ["20+", "Projects"],
      ["3", "Core Skills"],
    ],
    mockTitle: "Creative + Tech",
    mockDesc: "Design, Video and Web Systems",
    skills: ["Graphic Design", "Video Editing", "Programming"],
    learningTitle: "Ready to Learn & Grow",
learningDesc: "Open to new experiences and always improving my skills in design, video, and programming to create better work in every project.",
  },
} as const;

export default function Hero({
  lang,
  onToggleLang,
}: {
  lang: Lang;
  onToggleLang: () => void;
}) {
  const t = copy[lang];
  

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6">
      <div className="orb left-[-7rem] top-[-7rem] h-72 w-72 bg-sky-300" />
      <div className="orb bottom-24 right-[-8rem] h-96 w-96 bg-blue-400" />
      <div className="absolute right-[-170px] top-[-170px] h-[420px] w-[420px] rounded-full border border-dashed border-sky-300/40 spin-slow" />

      <nav className="section-shell sticky top-4 z-50 flex items-center justify-between rounded-[1.6rem] border border-white/60 bg-white/55 px-3 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:px-5">
        <a href="#" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-300 to-blue-600 text-xs font-black !text-white shadow-blue-glow sm:h-10 sm:w-10 sm:text-sm">
            N
          </span>

          <span className="block truncate bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-sm font-semibold tracking-[-0.02em] text-transparent sm:text-base">
            Narongrit
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {t.nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-2xl px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-white/70 hover:text-blue-700"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onToggleLang}
            className="rounded-xl border border-blue-200/70 bg-white/70 px-2.5 py-2 text-[0.7rem] font-black text-blue-800 shadow-sm transition hover:bg-white sm:rounded-2xl sm:px-3 sm:text-xs"
            aria-label="Switch language"
          >
            {lang === "th" ? "EN" : "TH"}
          </button>

          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 px-3 py-2 text-[0.7rem] font-extrabold !text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 active:translate-y-0 sm:rounded-2xl sm:px-4 sm:text-sm"
          >
            {t.hire}
          </a>
        </div>
      </nav>

      <div className="section-shell mt-4 flex justify-center lg:hidden">
        <div className="flex items-center justify-center gap-1.5">
          {t.nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative rounded-full px-3.5 py-2 text-[0.7rem] font-black text-blue-900/70 transition-all duration-300 hover:bg-white/60 hover:text-blue-700 hover:shadow-[0_8px_20px_rgba(37,99,235,0.10)]"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="section-shell grid min-h-[calc(100vh-96px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="text-center lg:text-left">
          <div className="eyebrow reveal">
            <Icon name="sparkles" className="h-4 w-4" /> {t.eyebrow}
          </div>
          <h1 className="reveal delay-1 mt-5 font-english text-[clamp(2.85rem,10vw,7rem)] font-black leading-[0.92] tracking-[-0.07em]">
            <span className="gradient-title">Narongrit</span>
          </h1>
          <p className="reveal delay-2 mt-5 text-xl font-black text-blue-900 sm:text-2xl">
            {t.role}
          </p>
          <p className="reveal delay-3 mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
            {t.desc}
          </p>

          <div className="reveal delay-4 mx-auto mt-8 grid max-w-[360px] grid-cols-2 gap-3 lg:mx-0">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 px-4 py-3 text-sm font-black !text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(37,99,235,0.28)]"
            >
              {t.viewWorks}
              <Icon name="arrowDown" className="h-4 w-4" />
            </a>

            <a
              href="#showreel"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-200/70 bg-white/70 px-4 py-3 text-sm font-black text-blue-800 shadow-[0_10px_24px_rgba(15,23,42,0.06)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              {t.showreel}
              <Icon name="play" className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:mx-auto sm:max-w-lg lg:mx-0">
            {t.stats.map(([num, label]) => (
              <div
                key={label}
                className="glass-panel rounded-3xl px-3 py-4 text-center"
              >
                <div className="font-display text-2xl font-black text-blue-800 sm:text-3xl">
                  {num}
                </div>
                <div className="mt-1 text-[0.68rem] font-bold text-slate-500 sm:text-xs">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <div className="absolute inset-8 rounded-[3rem] bg-sky-300/30 blur-3xl" />
          <div className="mock-window deep-panel relative overflow-hidden rounded-[2.2rem] p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-white/70 backdrop-blur">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-bold">creative-tech.app</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[1.7rem] p-5 sm:col-span-2">
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-sky-200 to-blue-600 text-white shadow-blue-glow float-y">
                    <Icon name="sparkles" className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-black text-white sm:text-2xl">
                      {t.mockTitle}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-sky-100/80">
                      {t.mockDesc}
                    </div>
                  </div>
                </div>
              </div>
<div className="rounded-[1.4rem] border border-white/15 bg-gradient-to-br from-white/14 to-white/5 p-4 backdrop-blur sm:col-span-2">
  <div className="mb-4 flex items-center justify-between">
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-sky-100/80 ring-1 ring-white/10">
      <Icon name="sparkles" className="h-3.5 w-3.5" />
      Growth Mindset
    </div>

    <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.9)]" />
  </div>

  <h3 className="font-display text-lg font-black tracking-[-0.03em] text-white">
    {t.learningTitle}
  </h3>

  <p className="mt-2 text-sm leading-7 text-sky-100/75">
    {t.learningDesc}
  </p>
</div>
              
            </div>
          </div>

          <div className="glass-panel absolute -bottom-5 right-4 rounded-2xl px-4 py-3 text-sm font-black text-blue-800 shadow-xl float-y">
            Core Skills
          </div>
        </div>
      </div>
    </section>
  );
}
