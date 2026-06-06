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
    learningDesc:
      "เปิดรับประสบการณ์ใหม่ๆ พร้อมพัฒนาทักษะด้านดีไซน์ วิดีโอ และการเขียนโปรแกรม เพื่อสร้างงานที่ดีขึ้นในทุกโปรเจกต์",
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
    learningDesc:
      "Open to new experiences and always improving my skills in design, video, and programming to create better work in every project.",
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
    <section className="relative min-h-screen overflow-hidden px-4 pb-10 pt-5 sm:px-6">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="orb left-[-7rem] top-[-7rem] h-72 w-72 bg-sky-300" />
      <div className="orb bottom-24 right-[-8rem] h-96 w-96 bg-blue-400" />
      <div className="pointer-events-none absolute left-1/2 top-28 h-64 w-64 -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
      <div className="absolute right-[-170px] top-[-170px] h-[420px] w-[420px] rounded-full border border-dashed border-sky-300/40 spin-slow" />

      {/* Navbar */}
      {/* Navbar */}
<header className="section-shell sticky top-4 z-50">
  <nav className="flex items-center justify-between gap-3 rounded-[1.7rem] border border-white/70 bg-white/65 px-3 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:px-5">
    <a href="#" className="flex min-w-0 items-center gap-2.5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-300 to-blue-600 text-sm font-black !text-white shadow-blue-glow sm:h-11 sm:w-11">
        N
      </span>

      <span className="block truncate bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-sm font-black tracking-[-0.03em] text-transparent sm:text-base">
        Narongrit
      </span>
    </a>

    <div className="hidden items-center gap-1 lg:flex">
      {t.nav.map(([label, href]) => (
        <a
          key={href}
          href={href}
          className="rounded-2xl px-4 py-2 text-sm font-black text-blue-950 transition hover:bg-white/80 hover:text-blue-700 hover:shadow-[0_8px_20px_rgba(37,99,235,0.08)]"
        >
          {label}
        </a>
      ))}
    </div>

    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        onClick={onToggleLang}
        className="group inline-flex items-center gap-2 rounded-2xl border border-white/80 bg-white/70 px-2.5 py-2 text-[0.7rem] font-black text-blue-800 shadow-[0_10px_24px_rgba(37,99,235,0.12)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_rgba(37,99,235,0.18)] sm:px-3 sm:text-xs"
        aria-label="Switch language"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
          {lang === "th" ? <UKFlagCircle /> : <ThaiFlagCircle />}
        </span>

        <span className="bg-gradient-to-r from-blue-800 to-sky-500 bg-clip-text text-transparent">
          {lang === "th" ? "EN" : "TH"}
        </span>
      </button>

      <a
        href="#contact"
        className="rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 px-4 py-2.5 text-xs font-black !text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40 sm:px-5 sm:text-sm"
      >
        {t.hire}
      </a>
    </div>
  </nav>

  {/* Mobile Nav */}
  <div className="mt-3 flex justify-center lg:hidden">
    <div className="inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/70 bg-white/55 p-1 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      {t.nav.map(([label, href]) => (
        <a
          key={href}
          href={href}
          className="shrink-0 rounded-full px-4 py-2 text-[0.72rem] font-black text-blue-950/75 transition-all duration-300 hover:bg-white hover:text-blue-700 hover:shadow-[0_8px_18px_rgba(37,99,235,0.10)]"
        >
          {label}
        </a>
      ))}
    </div>
  </div>
</header>

      {/* Hero Content */}
      <div className="section-shell grid min-h-[calc(100vh-110px)] items-center gap-10 pb-6 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
        <div className="relative z-10 text-center lg:text-left">
          <div className="eyebrow reveal mx-auto lg:mx-0">
            <Icon name="sparkles" className="h-4 w-4" /> {t.eyebrow}
          </div>

          <h1 className="reveal delay-1 mt-5 font-english text-[clamp(3.2rem,13vw,7rem)] font-black leading-[0.86] tracking-[-0.08em]">
            <span className="gradient-title drop-shadow-[0_10px_30px_rgba(14,125,228,0.18)]">
              Narongrit
            </span>
          </h1>

          <p className="reveal delay-2 mx-auto mt-5 max-w-3xl text-[clamp(1.15rem,4vw,1.65rem)] font-black leading-tight text-blue-900 lg:mx-0">
            {t.role}
          </p>

          <p className="reveal delay-3 mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
            {t.desc}
          </p>

          <div className="reveal delay-4 mx-auto mt-8 grid max-w-[420px] grid-cols-2 gap-3 lg:mx-0">
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 px-4 py-3.5 text-sm font-black !text-white shadow-[0_12px_30px_rgba(37,99,235,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(37,99,235,0.34)]"
            >
              {t.viewWorks}
              <Icon
                name="arrowDown"
                className="h-4 w-4 transition group-hover:translate-y-0.5"
              />
            </a>

            <a
              href="#showreel"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-200/70 bg-white/75 px-4 py-3.5 text-sm font-black text-blue-900 shadow-[0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              {t.showreel}
              <Icon
                name="play"
                className="h-4 w-4 transition group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-3 sm:mx-auto sm:max-w-lg lg:mx-0">
            {t.stats.map(([num, label]) => (
              <div
                key={label}
                className="group rounded-[1.6rem] border border-white/70 bg-white/55 px-3 py-4 text-center shadow-[0_14px_34px_rgba(15,23,42,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_18px_42px_rgba(37,99,235,0.12)]"
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

        {/* Mockup */}
<div className="relative mx-auto w-full max-w-[440px] sm:max-w-[520px] lg:max-w-none">
  <div className="absolute inset-8 rounded-[3rem] bg-sky-300/25 blur-3xl" />
  <div className="absolute -left-5 top-16 hidden h-16 w-16 rounded-full bg-blue-600/10 blur-xl sm:block" />
  <div className="absolute -right-3 bottom-12 hidden h-20 w-20 rounded-full bg-sky-300/30 blur-2xl sm:block" />

  <div className="mock-window deep-panel relative overflow-hidden rounded-[1.8rem] p-3 shadow-[0_24px_60px_rgba(8,47,103,0.24)] sm:rounded-[2.3rem] sm:p-5 lg:shadow-[0_32px_80px_rgba(8,47,103,0.28)]">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />

    {/* Browser Bar */}
    <div className="mb-3 flex items-center justify-between rounded-[1.2rem] bg-white/10 px-3 py-2.5 text-white/70 backdrop-blur sm:mb-4 sm:rounded-2xl sm:px-4 sm:py-3">
      <div className="flex gap-1.5 sm:gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_14px_rgba(248,113,113,0.8)] sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300 shadow-[0_0_14px_rgba(253,224,71,0.8)] sm:h-3 sm:w-3" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,0.8)] sm:h-3 sm:w-3" />
      </div>

      <span className="text-[0.65rem] font-bold sm:text-xs">
        creative-tech.app
      </span>
    </div>

    <div className="grid gap-3 sm:gap-4">
      {/* Main Card */}
      <div className="glass-panel rounded-[1.35rem] p-4 sm:rounded-[1.7rem] sm:p-5">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-sky-200 to-blue-600 text-white shadow-blue-glow float-y sm:h-16 sm:w-16 sm:rounded-3xl">
            <Icon name="sparkles" className="h-6 w-6 sm:h-8 sm:w-8" />
          </div>

          <div className="min-w-0">
            <div className="font-display text-lg font-black leading-tight text-white sm:text-2xl">
              {t.mockTitle}
            </div>
            <div className="mt-1 text-xs font-semibold text-sky-100/75 sm:text-sm">
              {t.mockDesc}
            </div>
          </div>
        </div>
      </div>

      {/* Growth Card */}
      <div className="rounded-[1.35rem] border border-white/15 bg-gradient-to-br from-white/14 to-white/5 p-4 backdrop-blur sm:rounded-[1.4rem]">
        <div className="mb-3 flex items-center justify-between sm:mb-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.58rem] font-black uppercase tracking-[0.14em] text-sky-100/80 ring-1 ring-white/10 sm:text-[0.68rem] sm:tracking-[0.16em]">
            <Icon name="sparkles" className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            Growth Mindset
          </div>

          <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.9)]" />
        </div>

        <h3 className="font-display text-base font-black tracking-[-0.03em] text-white sm:text-lg">
          {t.learningTitle}
        </h3>

        <p className="mt-2 line-clamp-3 text-xs leading-6 text-sky-100/70 sm:line-clamp-none sm:text-sm sm:leading-7">
          {t.learningDesc}
        </p>
      </div>
    </div>
  </div>

  <div className="glass-panel absolute -bottom-4 right-3 rounded-2xl px-3 py-2 text-xs font-black text-blue-800 shadow-xl float-y sm:-bottom-5 sm:right-4 sm:px-4 sm:py-3 sm:text-sm">
    Creative Stack
  </div>
</div>
      </div>
    </section>
  );
}

function ThaiFlagCircle() {
  return (
    <span className="block h-6 w-6 overflow-hidden rounded-full shadow-sm ring-2 ring-white">
      <span className="block h-[14.28%] bg-[#A51931]" />
      <span className="block h-[14.28%] bg-white" />
      <span className="block h-[42.88%] bg-[#2D2A4A]" />
      <span className="block h-[14.28%] bg-white" />
      <span className="block h-[14.28%] bg-[#A51931]" />
    </span>
  );
}

function UKFlagCircle() {
  return (
    <span className="relative block h-6 w-6 overflow-hidden rounded-full bg-[#012169] shadow-sm ring-2 ring-white">
      <span className="absolute left-1/2 top-0 h-full w-[0.36rem] -translate-x-1/2 bg-white" />
      <span className="absolute left-0 top-1/2 h-[0.36rem] w-full -translate-y-1/2 bg-white" />

      <span className="absolute left-1/2 top-0 h-full w-[0.18rem] -translate-x-1/2 bg-[#C8102E]" />
      <span className="absolute left-0 top-1/2 h-[0.18rem] w-full -translate-y-1/2 bg-[#C8102E]" />

      <span className="absolute left-[-0.35rem] top-1/2 h-[0.24rem] w-[140%] -translate-y-1/2 rotate-[34deg] bg-white" />
      <span className="absolute left-[-0.35rem] top-1/2 h-[0.24rem] w-[140%] -translate-y-1/2 -rotate-[34deg] bg-white" />

      <span className="absolute left-[-0.35rem] top-1/2 h-[0.1rem] w-[140%] -translate-y-1/2 rotate-[34deg] bg-[#C8102E]" />
      <span className="absolute left-[-0.35rem] top-1/2 h-[0.1rem] w-[140%] -translate-y-1/2 -rotate-[34deg] bg-[#C8102E]" />
    </span>
  );
}