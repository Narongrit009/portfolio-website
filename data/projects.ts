import type { IconName } from "@/components/Icons";
import type { Lang } from "@/lib/i18n";

export type ProjectCategory = "graphic" | "video" | "website";

export type LocalizedText = Record<Lang, string>;

export type Project = {
  id: string;
  title: LocalizedText;
  category: ProjectCategory;
  label: LocalizedText;
  description: LocalizedText;
  role: LocalizedText;
  goal: LocalizedText;
  result: LocalizedText;
  tools: string[];
  icon: IconName;
  gradient: string;
  imageUrl?: string;
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "unicafe-campaign",
    title: { th: "Uni Cafe Campaign Design", en: "Uni Cafe Campaign Design" },
    category: "graphic",
    label: { th: "Graphic Design", en: "Graphic Design" },
    description: {
      th: "ออกแบบกราฟิกโปรโมชันครบชุดสำหรับ Social Media และหน้าร้าน",
      en: "A complete promotional visual set for social media and in-store materials.",
    },
    role: { th: "Graphic Designer", en: "Graphic Designer" },
    goal: {
      th: "สร้าง Visual ที่อ่านง่าย สดใส และดึงดูดลูกค้า",
      en: "Create bright, readable visuals that attract customers.",
    },
    result: {
      th: "ได้ชุดสื่อพร้อมใช้งานทั้ง Online และ In-store",
      en: "Delivered ready-to-use assets for online and in-store channels.",
    },
    tools: ["Photoshop", "Illustrator", "Canva"],
    icon: "palette",
    gradient: "from-sky-200 via-sky-400 to-blue-600",
    featured: true,
  },
  {
    id: "short-video-ads",
    title: { th: "Short Video Ads", en: "Short Video Ads" },
    category: "video",
    label: { th: "Video Editing", en: "Video Editing" },
    description: {
      th: "ตัดต่อวิดีโอสั้นสำหรับ TikTok, Reels และโฆษณา Social Media",
      en: "Short-form edits for TikTok, Reels, and social media ads.",
    },
    role: { th: "Video Editor", en: "Video Editor" },
    goal: {
      th: "ดึงความสนใจภายใน 3 วินาทีแรก",
      en: "Capture attention within the first three seconds.",
    },
    result: {
      th: "ได้วิดีโอที่จังหวะกระชับ มี Hook และ CTA ชัดเจน",
      en: "Delivered fast-paced videos with clear hooks and CTA.",
    },
    tools: ["Premiere Pro", "After Effects", "CapCut"],
    icon: "video",
    gradient: "from-blue-700 via-blue-500 to-sky-300",
    featured: true,
  },
  {
    id: "portfolio-website",
    title: { th: "Portfolio Website", en: "Portfolio Website" },
    category: "website",
    label: { th: "Website", en: "Website" },
    description: {
      th: "พัฒนาเว็บพอร์ตด้วย Next.js + TypeScript + Tailwind CSS",
      en: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    },
    role: { th: "Front-end Developer", en: "Front-end Developer" },
    goal: {
      th: "ทำพอร์ตออนไลน์แทน PDF ให้ดูมืออาชีพและแชร์ง่าย",
      en: "Replace a PDF portfolio with a professional and shareable website.",
    },
    result: {
      th: "Deploy บน Vercel พร้อมต่อยอดเป็น Case Study และ Gallery",
      en: "Deployed on Vercel and ready to expand with case studies and galleries.",
    },
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: "globe",
    gradient: "from-cyan-300 via-sky-500 to-blue-700",
    featured: true,
  },
  {
    id: "brand-identity",
    title: { th: "Brand Identity", en: "Brand Identity" },
    category: "graphic",
    label: { th: "Graphic Design", en: "Graphic Design" },
    description: {
      th: "ออกแบบ Mood & Tone, Logo concept และชุดสื่อสำหรับธุรกิจ SME",
      en: "Mood & tone, logo concepts, and brand assets for SME businesses.",
    },
    role: { th: "Brand Designer", en: "Brand Designer" },
    goal: {
      th: "สร้างภาพจำให้แบรนด์ดูเป็นมืออาชีพ",
      en: "Build a professional and memorable brand image.",
    },
    result: {
      th: "ได้ชุดกราฟิกที่นำไปต่อยอดได้ทั้งออนไลน์และออฟไลน์",
      en: "Created a visual system that works across online and offline media.",
    },
    tools: ["Illustrator", "Figma", "Photoshop"],
    icon: "tag",
    gradient: "from-sky-100 via-sky-300 to-blue-500",
  },
  {
    id: "event-highlight",
    title: { th: "Event Highlight", en: "Event Highlight" },
    category: "video",
    label: { th: "Video Editing", en: "Video Editing" },
    description: {
      th: "ตัดต่อวิดีโอ Highlight งาน Event ให้ดูสนุก กระชับ และเล่าเรื่องชัด",
      en: "Event highlight editing with a clear, energetic, and concise story flow.",
    },
    role: { th: "Video Editor", en: "Video Editor" },
    goal: {
      th: "สรุปบรรยากาศงานให้ดูน่าติดตาม",
      en: "Turn event footage into an engaging social media recap.",
    },
    result: {
      th: "ได้วิดีโอสั้นสำหรับโพสต์ต่อยอดบน Social Media",
      en: "Delivered a short highlight video ready for social media posting.",
    },
    tools: ["Premiere Pro", "After Effects"],
    icon: "play",
    gradient: "from-blue-800 via-sky-500 to-cyan-300",
  },
];

export const showreel = {
  youtubeId: "",
  title: { th: "Creative Showreel", en: "Creative Showreel" },
  description: {
    th: "รวมผลงานกราฟิก วิดีโอ และเว็บในรูปแบบ Highlight",
    en: "A highlight reel featuring selected graphic, video, and web work.",
  },
};
