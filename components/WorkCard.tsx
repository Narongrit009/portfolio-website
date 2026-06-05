import { Icon } from "@/components/Icons";
import type { Project } from "@/data/projects";
import type { Lang } from "@/lib/i18n";

const viewText = {
  th: "ดูรายละเอียด",
  en: "View Details",
} as const;

export default function WorkCard({
  project,
  lang,
  onOpen,
}: {
  project: Project;
  lang: Lang;
  onOpen?: (project: Project) => void;
}) {
  const hasRealImage =
    project.imageUrl &&
    !project.imageUrl.includes("YOUR_CLOUD_NAME") &&
    !project.imageUrl.includes("YOUR_");

  const youtubeThumbnail =
    project.youtubeId && !project.youtubeId.includes("YOUR_")
      ? `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
      : undefined;

  const previewImage = hasRealImage ? project.imageUrl : youtubeThumbnail;

  return (
    <button
  type="button"
  onClick={() => {
    onOpen?.(project);
  }}
  className="group block w-full text-left"
>
      <article className="h-full overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 shadow-[0_18px_50px_rgba(14,125,228,.12)] backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(14,125,228,.20)]">
        <div className="relative aspect-[1.35/1] overflow-hidden bg-gradient-to-br from-sky-100 to-blue-600">
          {previewImage ? (
            <img
              src={previewImage}
              alt={project.title[lang]}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={`grid h-full w-full place-items-center bg-gradient-to-br ${project.gradient}`}
            >
              <div className="grid h-24 w-24 place-items-center rounded-[2rem] bg-white/18 backdrop-blur">
                <Icon name={project.icon} className="h-12 w-12 text-white" />
              </div>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/65 via-blue-950/10 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-black text-white backdrop-blur">
            {project.label[lang]}
          </div>

          <div className="absolute inset-x-4 bottom-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-black text-blue-800 shadow-lg backdrop-blur transition group-hover:bg-blue-700 group-hover:!text-white">
              {viewText[lang]}
              <Icon name="external" className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="font-display text-xl font-black tracking-[-0.04em] text-blue-950">
            {project.title[lang]}
          </h3>

          <p className="mt-2 min-h-[3.25rem] text-sm leading-6 text-slate-600">
            {project.description[lang]}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.slice(0, 3).map((tool) => (
              <span className="tag" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </article>
    </button>
  );
}