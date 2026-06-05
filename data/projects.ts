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
  tools: string[];
  icon: IconName;
  gradient: string;

  imageUrl?: string; // สำหรับ Graphic / Website Preview
  youtubeId?: string; // สำหรับ Video
  websiteUrl?: string; // สำหรับ Website
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "unicafe-campaign",
    title: {
      th: "Uni Cafe Campaign Design",
      en: "Uni Cafe Campaign Design",
    },
    category: "graphic",
    label: {
      th: "Graphic Design",
      en: "Graphic Design",
    },
    description: {
      th: "ออกแบบกราฟิกโปรโมชันสำหรับ Uni Cafe ให้ดูสดใส อ่านง่าย และเหมาะกับการใช้งานบน Social Media",
      en: "Promotional graphic design for Uni Cafe with a bright, clean, and social-media-ready visual style.",
    },
    tools: ["Photoshop", "Canva"],
    icon: "palette",
    gradient: "from-sky-200 via-sky-400 to-blue-600",
    imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780676448/NFP_z4om9q.png",
    featured: true,
  },
  {
    id: "poster-design",
    title: {
      th: "Poster Design",
      en: "Poster Design",
    },
    category: "graphic",
    label: {
      th: "Graphic Design",
      en: "Graphic Design",
    },
    description: {
      th: "งานออกแบบโปสเตอร์สำหรับโปรโมชัน เน้นความชัดเจนของข้อความและภาพรวมที่ดูมืออาชีพ",
      en: "Poster design focused on clear communication, strong layout, and a professional promotional look.",
    },
    tools: ["Photoshop", "Figma"],
    icon: "palette",
    gradient: "from-blue-100 via-sky-300 to-blue-600",
    imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780677350/Confidence_hqzm8j.png",
  },
  {
    id: "short-video-ads",
    title: {
      th: "Short Video Ads",
      en: "Short Video Ads",
    },
    category: "video",
    label: {
      th: "Video Editing",
      en: "Video Editing",
    },
    description: {
      th: "ตัดต่อวิดีโอสั้นแนวตั้ง 9:16 สำหรับ TikTok, Reels และคอนเทนต์โฆษณา",
      en: "Vertical 9:16 short-form video editing for TikTok, Reels, and social media advertising.",
    },
    tools: ["Premiere Pro", "CapCut", "After Effects"],
    icon: "play",
    gradient: "from-blue-700 via-blue-500 to-sky-300",
    youtubeId: "YOUR_YOUTUBE_ID",
    featured: true,
  },
  {
    id: "event-highlight",
    title: {
      th: "Event Highlight",
      en: "Event Highlight",
    },
    category: "video",
    label: {
      th: "Video Editing",
      en: "Video Editing",
    },
    description: {
      th: "ตัดต่อวิดีโอ Highlight งาน Event ให้กระชับ น่าสนใจ และเล่าเรื่องได้ชัดเจน",
      en: "Event highlight editing with a clean, energetic, and engaging storytelling flow.",
    },
    tools: ["Premiere Pro", "After Effects"],
    icon: "video",
    gradient: "from-blue-800 via-sky-500 to-cyan-300",
    youtubeId: "YOUR_YOUTUBE_ID",
  },
  {
    id: "portfolio-website",
    title: {
      th: "Portfolio Website",
      en: "Portfolio Website",
    },
    category: "website",
    label: {
      th: "Website",
      en: "Website",
    },
    description: {
      th: "พัฒนาเว็บไซต์พอร์ตโฟลิโอด้วย Next.js, TypeScript, Tailwind CSS และ Deploy บน Vercel",
      en: "A portfolio website built with Next.js, TypeScript, Tailwind CSS, and deployed on Vercel.",
    },
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: "globe",
    gradient: "from-cyan-300 via-sky-500 to-blue-700",
    websiteUrl: "https://portfolio-website-six-beta-55.vercel.app",
    imageUrl: "https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/v1/portfolio/portfolio-website-preview.jpg",
    featured: true,
  },
  
];

export const showreel = {
  title: {
    th: "Video Showreel",
    en: "Video Showreel",
  },
  description: {
    th: "รวมผลงานวิดีโอและงานตัดต่อที่คัดเลือกมาให้ดูภาพรวมของสไตล์การทำงาน",
    en: "A selected video showreel showcasing my editing style and creative direction.",
  },
  youtubeId: "YOUR_YOUTUBE_ID",
};