import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    role: "Creative Designer & Digital Developer",
    built: "© 2026 Narongrit. Built with Next.js + Tailwind CSS",
  },
  en: {
    role: "Creative Designer & Digital Developer",
    built: "© 2026 Narongrit. Built with Next.js + Tailwind CSS",
  },
} as const;

export default function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#0c366c,#081e45)] px-4 py-12 text-center text-white">
      <div className="section-shell">
        <div className="font-display text-3xl font-black tracking-[-0.05em]">Narongrit<span className="text-sky-300">.</span></div>
        <p className="mt-2 text-sm font-semibold text-sky-100/62">{t.role}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-bold text-sky-100/68">
          <a className="hover:text-white" href="https://github.com/Narongrit009">GitHub</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#portfolio">Works</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>
        <p className="mt-8 text-xs font-semibold text-sky-100/38">{t.built}</p>
        <a href="#" className="mx-auto mt-7 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-300 to-blue-700 font-black shadow-blue-glow">↑</a>
      </div>
    </footer>
  );
}
