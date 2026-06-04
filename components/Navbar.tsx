const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Works", "#portfolio"],
  ["Showreel", "#showreel"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 shadow-[0_20px_70px_rgba(0,0,0,.25)] backdrop-blur-2xl sm:px-5">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[linear-gradient(135deg,#38bdf8,#8b5cf6)] text-lg shadow-[0_10px_24px_rgba(56,189,248,.25)]">N</span>
          <span className="hidden font-[var(--font-display)] text-sm font-black tracking-tight text-white sm:block">Narongrit</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-bold text-slate-300 md:flex">
          {links.map(([label, href]) => <a className="nav-link hover:text-white" href={href} key={href}>{label}</a>)}
        </div>
        <a href="#contact" className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(255,255,255,.18)] sm:px-5">Hire Me</a>
      </nav>
    </header>
  );
}
