"use client";

import { useState } from "react";
import { Icon, type IconName } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    open: "เปิดเมนูด่วน",
    close: "ปิดเมนูด่วน",
    menu: [
      {
        label: "About",
        desc: "เกี่ยวกับฉัน",
        href: "#about",
        icon: "user",
        position: "-translate-x-[104px] translate-y-0",
      },
      {
        label: "Skills",
        desc: "ความสามารถ",
        href: "#skills",
        icon: "sparkles",
        position: "-translate-x-[88px] -translate-y-[54px]",
      },
      {
        label: "Works",
        desc: "ผลงาน",
        href: "#portfolio",
        icon: "palette",
        position: "-translate-x-[54px] -translate-y-[88px]",
      },
      {
        label: "Contact",
        desc: "ติดต่อ",
        href: "#contact",
        icon: "mail",
        position: "translate-x-0 -translate-y-[104px]",
      },
    ],
  },
  en: {
    open: "Open quick menu",
    close: "Close quick menu",
    menu: [
      {
        label: "About",
        desc: "Who I am",
        href: "#about",
        icon: "user",
        position: "-translate-x-[104px] translate-y-0",
      },
      {
        label: "Skills",
        desc: "Expertise",
        href: "#skills",
        icon: "sparkles",
        position: "-translate-x-[88px] -translate-y-[54px]",
      },
      {
        label: "Works",
        desc: "Projects",
        href: "#portfolio",
        icon: "palette",
        position: "-translate-x-[54px] -translate-y-[88px]",
      },
      {
        label: "Contact",
        desc: "Get in touch",
        href: "#contact",
        icon: "mail",
        position: "translate-x-0 -translate-y-[104px]",
      },
    ],
  },
} as const;

export default function FloatingMenu({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];

  return (
    <div className="fixed bottom-[5.5rem] right-5 z-[99999] sm:bottom-24 sm:right-7">
      {/* soft glow only */}
      <div
        className={`pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-full bg-sky-400/25 blur-2xl transition-all duration-300 ${
          open ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      />

      {/* menu items */}
      {t.menu.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setOpen(false)}
          aria-label={item.label}
          className={`group absolute bottom-1.5 right-1.5 grid h-11 w-11 place-items-center rounded-full border border-white/70 bg-white/90 text-blue-800 shadow-[0_12px_30px_rgba(37,99,235,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-sky-400 hover:to-blue-700 hover:!text-white hover:shadow-[0_18px_44px_rgba(37,99,235,0.30)] ${
            open
              ? `${item.position} scale-100 opacity-100`
              : "translate-x-0 translate-y-0 scale-50 opacity-0"
          }`}
          style={{
            transitionDelay: open ? `${index * 55}ms` : "0ms",
          }}
        >
          <Icon name={item.icon as IconName} className="h-5 w-5" />

          <span className="pointer-events-none absolute right-13 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-blue-950/90 px-3 py-1.5 text-xs font-black text-white shadow-[0_12px_30px_rgba(8,30,69,0.28)] backdrop-blur-xl sm:block">
            {item.label}
          </span>
        </a>
      ))}

      {/* main button */}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? t.close : t.open}
        className={`relative grid h-[58px] w-[58px] place-items-center rounded-full border border-white/40 bg-gradient-to-br from-sky-300 via-blue-500 to-blue-700 !text-white shadow-[0_18px_44px_rgba(37,99,235,0.36)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-1 hover:brightness-110 active:translate-y-0 ${
          open ? "rotate-45" : "rotate-0"
        }`}
      >
        <span className="absolute inset-0 rounded-full bg-sky-300/30 blur-xl" />

        <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/10 backdrop-blur">
          {open ? (
            <span className="text-2xl font-black leading-none">×</span>
          ) : (
            <Icon name="sparkles" className="h-6 w-6" />
          )}
        </span>
      </button>
    </div>
  );
}