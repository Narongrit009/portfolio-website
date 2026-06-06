import { showreel } from "@/data/projects";
import { Icon } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

const copy = {
  th: {
    eyebrow: "Showreel",
    title: "Video Showreel",
    empty: "ใส่ YouTube ID ในไฟล์ data/projects.ts",
    badge: "Vertical Edit",
    ratio: "9:16 Shorts Preview",
  },
  en: {
    eyebrow: "Showreel",
    title: "Video Showreel",
    empty: "Add your YouTube ID in data/projects.ts",
    badge: "Vertical Edit",
    ratio: "9:16 Shorts Preview",
  },
} as const;

export default function Showreel({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section
      id="showreel"
      className="section-pad relative overflow-hidden bg-[linear-gradient(160deg,#0c366c_0%,#034d9e_100%)]"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,.28),transparent_28rem)]" />
      <div className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-sky-300/10 blur-3xl" />
      <div className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="section-shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="eyebrow border-sky-300/20 bg-white/10 text-sky-200">
            <Icon name="play" className="h-4 w-4" />
            {t.eyebrow}
          </div>

          <h2 className="mt-5 font-display text-[clamp(2.1rem,5vw,4rem)] font-black tracking-[-0.06em] text-white">
            {t.title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-sky-100/72 sm:text-base">
            {showreel.description[lang]}
          </p>
        </div>

        {/* Vertical Video Preview */}
        <div className="relative mx-auto mt-10 w-full max-w-[340px] sm:max-w-[380px]">
          {/* Glow */}
          <div className="absolute inset-6 rounded-[3rem] bg-sky-400/25 blur-3xl" />

          {/* Floating Badges */}
          <div className="absolute -left-4 top-10 z-20 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-xs font-black text-sky-100 shadow-[0_18px_45px_rgba(8,30,69,0.28)] backdrop-blur-xl sm:block">
            {t.badge}
          </div>

          <div className="absolute -right-4 bottom-12 z-20 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-xs font-black text-sky-100 shadow-[0_18px_45px_rgba(8,30,69,0.28)] backdrop-blur-xl sm:block">
            {t.ratio}
          </div>

          {/* Phone Frame */}
          <div className="deep-panel relative overflow-hidden rounded-[2.4rem] border border-white/20 p-3 shadow-[0_30px_90px_rgba(8,30,69,0.45)]">
            {/* Top camera notch */}
            <div className="absolute left-1/2 top-4 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/25" />

            <div className="relative aspect-[9/16] overflow-hidden rounded-[1.9rem] bg-blue-950/70">
              {showreel.youtubeId && !showreel.youtubeId.includes("YOUR_") ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${showreel.youtubeId}`}
                  title={showreel.title[lang]}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="grid h-full place-items-center px-6">
                  <div className="text-center">
                    <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-sky-300 to-blue-700 text-white shadow-blue-glow float-y">
                      <Icon name="play" className="h-8 w-8" />
                    </div>

                    <p className="mt-6 text-sm font-bold leading-6 text-sky-100/80">
                      {t.empty}
                    </p>
                  </div>
                </div>
              )}

              {/* Overlay Gradient */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />

              {/* Window Dots */}
              <div className="absolute left-4 top-4 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="mx-auto mt-8 max-w-xl text-center">
          <h3 className="font-display text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">
            {showreel.title[lang]}
          </h3>

        </div>
      </div>
    </section>
  );
}