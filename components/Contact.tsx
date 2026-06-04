import { Icon, type IconName } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const contactItems: Array<{ label: string; desc: Record<Lang, string>; icon: IconName; href: string }> = [
  { label: "Email", desc: { th: "ส่งข้อความ", en: "Send message" }, icon: "mail", href: "mailto:your@email.com" },
  { label: "Line", desc: { th: "แชทได้เลย", en: "Chat now" }, icon: "message", href: "https://line.me" },
  { label: "GitHub", desc: { th: "ดู Code", en: "View code" }, icon: "github", href: "https://github.com/Narongrit009" },
  { label: "Facebook", desc: { th: "Follow me", en: "Follow me" }, icon: "facebook", href: "https://facebook.com" },
];

const copy = {
  th: {
    eyebrow: "Let’s Connect",
    titleA: "มาทำงาน",
    titleB: "ด้วยกัน",
    desc: "ไม่ว่าจะเป็นงาน Graphic, Video หรือ Web Development ติดต่อได้เลย พร้อมรับงานและให้คำปรึกษา",
    cta: "ส่ง Email หาฉัน",
  },
  en: {
    eyebrow: "Let’s Connect",
    titleA: "Let’s Work",
    titleB: "Together",
    desc: "For graphic design, video editing, or web development projects, feel free to contact me anytime.",
    cta: "Send Email",
  },
} as const;

export default function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="section-shell max-w-4xl text-center">
        <div className="eyebrow"><Icon name="mail" className="h-4 w-4" /> {t.eyebrow}</div>
        <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-black tracking-[-0.06em] text-blue-950">
          {t.titleA}<span className="gradient-title">{t.titleB}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-600">{t.desc}</p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {contactItems.map((contact) => (
            <a key={contact.label} href={contact.href} className="blue-card magnetic-card rounded-[1.6rem] p-5 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-sky-200 to-blue-600 text-white shadow-lg">
                <Icon name={contact.icon} className="h-6 w-6" />
              </div>
              <div className="mt-4 font-display text-lg font-black text-blue-950">{contact.label}</div>
              <div className="mt-1 text-xs font-bold text-slate-500">{contact.desc[lang]}</div>
            </a>
          ))}
        </div>

        <a href="mailto:your@email.com" className="btn-primary mt-10 px-9 py-4"><Icon name="mail" className="h-5 w-5" /> {t.cta}</a>
      </div>
    </section>
  );
}
