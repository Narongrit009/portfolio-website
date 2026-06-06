import { Icon, type IconName } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const contactItems: Array<{
  label: string;
  desc: Record<Lang, string>;
  icon: IconName;
  href: string;
}> = [
  {
    label: "Email",
    desc: { th: "ส่งข้อความ", en: "Send message" },
    icon: "mail",
    href: "mailto:narongritsuaysom@email.com",
  },
  {
    label: "Line",
    desc: { th: "แชทได้เลย", en: "Chat now" },
    icon: "message",
    href: "https://line.me/ti/p/M3N3XpjBWC",
  },
  {
    label: "GitHub",
    desc: { th: "ดู Code", en: "View code" },
    icon: "github",
    href: "https://github.com/Narongrit009",
  },
  {
    label: "Facebook",
    desc: { th: "Follow me", en: "Follow me" },
    icon: "facebook",
    href: "https://www.facebook.com/share/18L1MeCBDK/?mibextid=wwXIfr",
  },
];

const copy = {
  th: {
    eyebrow: "Let’s Connect",
    titleA: "มาทำงาน",
    titleB: "ด้วยกัน",
    desc: "ไม่ว่าจะเป็นงาน Graphic, Video หรือ Web Dev ติดต่อได้เลย",
    cta: "ส่ง Email หาฉัน",
  },
  en: {
    eyebrow: "Let’s Connect",
    titleA: "Let’s Work",
    titleB: "Together",
    desc: "For graphic design, video editing, or web dev projects.",
    cta: "Send Email",
  },
} as const;

export default function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-8rem] h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="section-shell relative max-w-5xl text-center">
        <div className="eyebrow">
          <Icon name="mail" className="h-4 w-4" />
          {t.eyebrow}
        </div>

        <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.25rem,6vw,4.6rem)] font-black leading-[0.95] tracking-[-0.07em] text-blue-950">
          {t.titleA}
          <br className="sm:hidden" />{" "}
          <span className="gradient-title">{t.titleB}</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {t.desc}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {contactItems.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
              className="group rounded-[1.45rem] border border-white/80 bg-white/70 p-4 text-center shadow-[0_16px_44px_rgba(14,125,228,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_rgba(14,125,228,0.18)] sm:rounded-[1.7rem] sm:p-5"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-300 via-blue-500 to-blue-700 text-white shadow-[0_12px_28px_rgba(37,99,235,0.28)] ring-1 ring-white/40 transition duration-300 group-hover:scale-105 group-hover:shadow-[0_16px_36px_rgba(37,99,235,0.36)]">
                <Icon name={contact.icon} className="h-6 w-6" />
              </div>

              <div className="mt-4 font-display text-base font-black tracking-[-0.03em] text-blue-950 sm:text-lg">
                {contact.label}
              </div>

              <div className="mt-1 text-xs font-bold text-slate-500">
                {contact.desc[lang]}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="mailto:narongritsuaysom@email.com"
            className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 px-8 py-4 text-sm font-black !text-white shadow-[0_16px_42px_rgba(37,99,235,0.30)] ring-1 ring-white/30 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_22px_56px_rgba(37,99,235,0.40)] active:translate-y-0 sm:w-auto"
          >
            <Icon name="mail" className="h-5 w-5" />
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}