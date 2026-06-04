import { showreel } from "@/data/projects";
import { Icon } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    eyebrow: "Showreel",
    title: "Video Showreel",
    empty: "ใส่ YouTube ID ในไฟล์ data/projects.ts",
  },
  en: {
    eyebrow: "Showreel",
    title: "Video Showreel",
    empty: "Add your YouTube ID in data/projects.ts",
  },
} as const;

export default function Showreel({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section id="showreel" className="section-pad relative overflow-hidden bg-[linear-gradient(160deg,#0c366c_0%,#034d9e_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,.28),transparent_28rem)]" />
      <div className="section-shell relative max-w-5xl text-center">
        <div className="eyebrow border-sky-300/20 bg-white/10 text-sky-200"><Icon name="play" className="h-4 w-4" /> {t.eyebrow}</div>
        <h2 className="mt-5 font-display text-[clamp(2.1rem,5vw,4rem)] font-black tracking-[-0.06em] text-white">{t.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sky-100/72">{showreel.description[lang]}</p>

        <div className="deep-panel mock-window mx-auto mt-10 aspect-video max-w-4xl overflow-hidden rounded-[2rem] p-3 sm:p-4">
          <div className="relative h-full overflow-hidden rounded-[1.4rem] bg-blue-950/60">
            {showreel.youtubeId ? (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${showreel.youtubeId}`}
                title={showreel.title[lang]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="grid h-full place-items-center px-6">
                <div>
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-sky-300 to-blue-700 text-white shadow-blue-glow float-y">
                    <Icon name="play" className="h-8 w-8" />
                  </div>
                  <p className="mt-6 text-sm font-bold text-sky-100/80">{t.empty}</p>
                </div>
              </div>
            )}
            <div className="absolute left-4 top-4 flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
