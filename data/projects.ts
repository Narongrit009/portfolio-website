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
  id: "nfp-5-june-2026",
  title: {
    th: "NFP 5 June 2026",
    en: "NFP 5 June 2026",
  },
  category: "graphic",
  label: {
    th: "Graphic Design",
    en: "Graphic Design",
  },
  description: {
    th: "ออกแบบกราฟิกข่าวเศรษฐกิจ Non-Farm Payrolls สำหรับ Super Unicorn Academy ใช้โทนเข้มแบบ Financial News พร้อมองค์ประกอบธงสหรัฐ อาคาร FED กราฟ XAUUSD และภาพบุคคล เพื่อสื่อสารประเด็นสำคัญของตลาดทองคำ",
    en: "A financial news graphic for Super Unicorn Academy covering the Non-Farm Payrolls event. The design uses a dark market-news visual style with the U.S. flag, FED building, XAUUSD chart elements, and a key figure to communicate an important gold market update.",
  },
  tools: ["Photoshop", "Canva"],
  icon: "palette",
  gradient: "from-blue-950 via-blue-700 to-sky-400",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780676448/NFP_z4om9q.png",
  featured: true,
},
  {
  id: "trading-mindset-chiangrai-2026",
  title: {
    th: "Trading Mindset Chiang Rai Seminar",
    en: "Trading Mindset Chiang Rai Seminar",
  },
  category: "graphic",
  label: {
    th: "Graphic Design",
    en: "Graphic Design",
  },
  description: {
    th: "ออกแบบกราฟิกประชาสัมพันธ์งานสัมมนา Trading Mindset จังหวัดเชียงราย สำหรับ Super Unicorn Academy และ Guze Markets ใช้โทนสีแดงพรีเมียม เน้นภาพโค้ช ข้อความโปรโมชัน วันที่ สถานที่ และข้อมูลลงทะเบียนให้โดดเด่นชัดเจน",
    en: "A promotional seminar graphic for the Trading Mindset event in Chiang Rai by Super Unicorn Academy and Guze Markets. The design uses a premium red visual style with coach portraits, event details, registration information, and strong promotional messaging.",
  },
  tools: ["Photoshop", "Canva"],
  icon: "palette",
  gradient: "from-red-950 via-red-700 to-orange-400",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780677350/Confidence_hqzm8j.png",
  featured: false,
},
{
  id: "valetax-deposit-bonus-30",
  title: {
    th: "Valetax Deposit Bonus 30%",
    en: "Valetax Deposit Bonus 30%",
  },
  category: "graphic",
  label: {
    th: "Graphic Design",
    en: "Graphic Design",
  },
  description: {
    th: "ออกแบบกราฟิกโปรโมชัน Deposit Bonus 30% สำหรับ Valetax ใช้โทนสีเขียวอมฟ้าและน้ำเงินเข้ม พร้อมตัวเลข 3D สีทอง เพื่อสื่อสารความพรีเมียม น่าเชื่อถือ และดึงดูดสายเทรดให้สนใจโปรโมชัน",
    en: "A promotional graphic design for Valetax Deposit Bonus 30%. The design uses a teal and dark navy color palette with a gold 3D percentage element to communicate a premium, trustworthy, and attractive trading promotion.",
  },
  tools: ["Photoshop", "Canva"],
  icon: "palette",
  gradient: "from-teal-950 via-cyan-700 to-sky-400",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780711924/%E0%B8%BABig_News_1_ztzkoo.png",
  featured: true,
},
{
  id: "free-gold-trading-seminar-chiangrai-2025",
  title: {
    th: "สัมมนาเทรดทองฟรี เชียงราย",
    en: "Free Gold Trading Seminar Chiang Rai",
  },
  category: "graphic",
  label: {
    th: "Graphic Design",
    en: "Graphic Design",
  },
  description: {
    th: "ออกแบบกราฟิกประชาสัมพันธ์งานสัมมนาเทรดทองฟรีที่จังหวัดเชียงราย สำหรับ Super Unicorn Academy และ Guze Markets ใช้โทนสีฟ้า-เขียวสดใส พร้อมตัวอักษร 3D ภาพโค้ช และรายละเอียดกิจกรรม เพื่อสื่อสารความน่าสนใจของงานสัมมนาและกระตุ้นการลงทะเบียน",
    en: "A promotional graphic for a free gold trading seminar in Chiang Rai by Super Unicorn Academy and Guze Markets. The design uses a vibrant blue-teal color palette, 3D typography, coach portraits, and clear event details to communicate the seminar value and encourage registration.",
  },
  tools: ["Photoshop", "Canva"],
  icon: "palette",
  gradient: "from-cyan-300 via-sky-500 to-blue-700",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780711926/Confidence_bgkyt3.png",
  featured: true,
},
{
  id: "santa-bot-trading-promo",
  title: {
    th: "Santa Bot Trading Promo",
    en: "Santa Bot Trading Promo",
  },
  category: "graphic",
  label: {
    th: "Graphic Design",
    en: "Graphic Design",
  },
  description: {
    th: "ออกแบบกราฟิกโปรโมชันสำหรับ Santa Bot Trading ใช้โทนสีแดง-ดำที่โดดเด่น พร้อมคาแรกเตอร์ Santa Bot และองค์ประกอบสินค้า เพื่อสื่อสารจุดขายของระบบ EA Auto Trade และสร้างภาพลักษณ์ที่น่าจดจำสำหรับสายเทรดอัตโนมัติ",
    en: "A promotional graphic for Santa Bot Trading featuring a bold red-and-black visual style, a distinctive Santa Bot character, and product-focused layout elements. The design highlights the EA auto-trading concept and builds a memorable identity for an automated trading product.",
  },
  tools: ["Photoshop", "Canva"],
  icon: "palette",
  gradient: "from-red-950 via-red-700 to-black",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780711925/Santa_Bot_trading_1_gusytl.png",
  featured: true,
},
{
  id: "pip-battle-may-2026",
  title: {
    th: "Pip Battle May 2026",
    en: "Pip Battle May 2026",
  },
  category: "graphic",
  label: {
    th: "Graphic Design",
    en: "Graphic Design",
  },
  description: {
    th: "ออกแบบกราฟิกโปรโมชันกิจกรรม Pip Battle สำหรับ Guze Markets ใช้โทนสีดำ-แดงสไตล์แข่งขัน เน้นตัวอักษร 3D ขนาดใหญ่และบรรยากาศที่ดุดัน เพื่อสื่อสารความตื่นเต้นของแคมเปญและกระตุ้นความสนใจในการเข้าร่วมลุ้นรางวัล",
    en: "A promotional campaign graphic for Pip Battle by Guze Markets. The design uses a bold black-and-red competitive style with large 3D typography and an intense visual atmosphere to communicate the excitement of the campaign and attract participation.",
  },
  tools: ["Photoshop", "Canva"],
  icon: "palette",
  gradient: "from-black via-red-900 to-red-500",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780711925/%E0%B8%BABig_News_x19lry.png",
  featured: true,
},
{
  id: "uni-cafe-checkin-discount",
  title: {
    th: "Uni Cafe Check-in Discount",
    en: "Uni Cafe Check-in Discount",
  },
  category: "graphic",
  label: {
    th: "Graphic Design",
    en: "Graphic Design",
  },
  description: {
    th: "ออกแบบกราฟิกโปรโมชันสำหรับ Uni Cafe เพื่อกระตุ้นการเช็กอินและโพสต์บนโซเชียลมีเดีย โดยใช้โทนสีฟ้า-ขาวที่สะอาดสดใส พร้อมภาพสินค้าเด่นและข้อความโปรโมชันที่อ่านง่าย เพื่อสื่อสารส่วนลด 5% ได้อย่างชัดเจนและน่าสนใจ",
    en: "A promotional graphic for Uni Cafe encouraging customers to check in and post on social media. The design uses a clean blue-and-white visual style, highlighted product photography, and clear promotional messaging to communicate the 5% discount in an attractive and easy-to-understand way.",
  },
  tools: ["Photoshop", "Canva"],
  icon: "palette",
  gradient: "from-sky-100 via-blue-500 to-blue-700",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780712159/cafe_jiwece.jpg",
  featured: true,
},{
  id: "ea-suitable-3-types",
  title: {
    th: "คน 3 ประเภทที่เหมาะกับการใช้ EA",
    en: "3 Types of People Who Should Use EA",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "ตัดต่อวิดีโอสั้นแนวตั้ง 9:16 สำหรับคอนเทนต์ให้ความรู้เรื่อง EA โดยเล่าให้เข้าใจง่ายว่าใครบ้างที่เหมาะกับการใช้ระบบเทรดอัตโนมัติ พร้อมจังหวะภาพ ข้อความ และ pacing ที่เหมาะกับ Shorts/TikTok/Reels",
    en: "A vertical 9:16 short-form video explaining the three types of people who are suitable for using EA automated trading systems. The edit focuses on clear educational storytelling, text highlights, and pacing optimized for Shorts, TikTok, and Reels.",
  },
  tools: ["Premiere Pro", "CapCut"],
  icon: "play",
  gradient: "from-blue-700 via-blue-500 to-sky-300",
  youtubeId: "R5XJIe048tA",
  featured: true,
},
{
  id: "behind-the-edit-ea-suitable-3-types",
  title: {
    th: "เบื้องหลังการตัดต่อ - คน 3 ประเภทที่เหมาะกับการใช้ EA",
    en: "Behind the Edit - 3 Types of People Who Should Use EA",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "วิดีโอเบื้องหลังการตัดต่อคอนเทนต์ EA สำหรับสายเทรด แสดงกระบวนการทำงานของ Editor ตั้งแต่การจัดจังหวะภาพ การใส่ข้อความ การเลือกช่วงสำคัญ และการทำให้คอนเทนต์เรื่อง EA ดูเข้าใจง่ายและน่าสนใจในรูปแบบ Shorts",
    en: "A behind-the-scenes editing video for EA trading content, showing the editor workflow including pacing, text placement, highlight selection, and turning EA-related content into a clear and engaging Shorts-style video.",
  },
  tools: ["Premiere Pro", "CapCut"],
  icon: "video",
  gradient: "from-blue-950 via-blue-700 to-cyan-300",
  youtubeId: "Q4sixSzvLaM",
  featured: true,
},
{
  id: "ea-expert-advisor-promote",
  title: {
    th: "EA Expert Advisor Promote",
    en: "EA Expert Advisor Promote",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "ตัดต่อวิดีโอสั้นแนวตั้ง 9:16 สำหรับโปรโมต EA Expert Advisor โดยเน้นการสื่อสารจุดเด่นของระบบเทรดอัตโนมัติ ให้เข้าใจง่าย กระชับ และเหมาะกับคอนเทนต์บน Shorts, TikTok และ Reels",
    en: "A vertical 9:16 promotional short-form video for EA Expert Advisor, highlighting the key benefits of an automated trading system with clear messaging, fast pacing, and a style optimized for Shorts, TikTok, and Reels.",
  },
  tools: ["Premiere Pro", "CapCut"],
  icon: "play",
  gradient: "from-blue-800 via-blue-500 to-cyan-300",
  youtubeId: "dS9VWCS7YEI",
  featured: true,
},
{
  id: "forex-beginner-starting-point",
  title: {
    th: "มือใหม่ Forex ควรเริ่มจากจุดไหน?",
    en: "Where Should Forex Beginners Start?",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "ตัดต่อวิดีโอสั้นแนวตั้ง 9:16 สำหรับคอนเทนต์ให้ความรู้มือใหม่ Forex โดยเน้นการเล่าเรื่องให้เข้าใจง่าย กระชับ และช่วยให้ผู้เริ่มต้นเห็นภาพว่าควรเริ่มเรียนรู้จากจุดไหนก่อน",
    en: "A vertical 9:16 educational short-form video for Forex beginners, edited to deliver clear, concise, and beginner-friendly guidance on where to start learning first.",
  },
  tools: ["Premiere Pro", "CapCut"],
  icon: "play",
  gradient: "from-sky-700 via-blue-500 to-cyan-300",
  youtubeId: "oviReU_BmOE",
  featured: true,
},
{
  id: "behind-the-edit-forex-beginner-start",
  title: {
    th: "เบื้องหลังการตัดต่อ - มือใหม่ Forex ควรเริ่มจากจุดไหนก่อน?",
    en: "Behind the Edit - Where Should Forex Beginners Start?",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "วิดีโอเบื้องหลังการตัดต่อคอนเทนต์ให้ความรู้ Forex สำหรับมือใหม่ โดยแสดงกระบวนการทำงานด้านการลำดับภาพ การใส่ข้อความ จังหวะการตัด และการจัดองค์ประกอบให้คอนเทนต์เข้าใจง่ายและน่าติดตามมากขึ้น",
    en: "A behind-the-scenes editing video for Forex beginner educational content, showing the workflow behind sequencing, text placement, pacing, and visual composition to make the content clearer and more engaging.",
  },
  tools: ["Premiere Pro", "CapCut"],
  icon: "video",
  gradient: "from-slate-900 via-blue-700 to-sky-400",
  youtubeId: "XXdM9XSoFUI",
  featured: true,
},
{
  id: "construction-pillar-ceremony",
  title: {
    th: "งานช่าง - พิธีลงเสาเอกเสาโท",
    en: "Construction Work - Pillar Ceremony",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "ตัดต่อวิดีโอสั้นแนวตั้ง 9:16 สำหรับคอนเทนต์งานช่างและพิธีลงเสาเอกเสาโท โดยเน้นเรื่องบรรยากาศหน้างาน ขั้นตอนสำคัญ และความน่าเชื่อถือของงานก่อสร้างให้ออกมาดูเป็นมืออาชีพ",
    en: "A vertical 9:16 short-form video for construction work and a pillar ceremony, edited to highlight the on-site atmosphere, key ceremony moments, and professional credibility of the construction process.",
  },
  tools: ["Premiere Pro", "CapCut"],
  icon: "video",
  gradient: "from-slate-900 via-blue-800 to-sky-400",
  youtubeId: "A8BvZlWf84M",
  featured: true,
},
{
  id: "le-soin-gain-hair-care-review",
  title: {
    th: "งานรีวิวสินค้าบำรุงผม - Le Soin GAIN",
    en: "Le Soin GAIN Hair Care Product Review",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "ตัดต่อวิดีโอรีวิวสินค้าบำรุงผม Le Soin GAIN ในรูปแบบวิดีโอสั้นแนวตั้ง 9:16 โดยเน้นภาพสินค้า รายละเอียดการใช้งาน และจังหวะการเล่าเรื่องที่เหมาะกับคอนเทนต์รีวิวบน Shorts, TikTok และ Reels",
    en: "A vertical 9:16 product review video for Le Soin GAIN hair care, edited to highlight the product visuals, usage details, and review-style storytelling optimized for Shorts, TikTok, and Reels.",
  },
  tools: ["Premiere Pro", "CapCut"],
  icon: "video",
  gradient: "from-pink-200 via-sky-300 to-blue-600",
  youtubeId: "ZorrwyKoLK8",
  featured: true,
},
{
  id: "calisthenics-from-zero-vlog",
  title: {
    th: "Vlog + พูดหน้ากล้อง - ฝึก Calisthenics จาก 0",
    en: "Vlog + Talking Head - Calisthenics From Zero",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "ตัดต่อวิดีโอสั้นแนว Vlog และพูดหน้ากล้องเกี่ยวกับการเริ่มฝึก Calisthenics จากศูนย์ โดยเน้นจังหวะการเล่าเรื่องที่เป็นธรรมชาติ ภาพการฝึกจริง และการตัดต่อให้ดูสนุก เข้าใจง่าย เหมาะกับคอนเทนต์สายพัฒนาตัวเองและออกกำลังกาย",
    en: "A vertical 9:16 vlog and talking-head short video about starting Calisthenics from zero. The edit focuses on natural storytelling, real training footage, and an engaging pacing style suitable for self-improvement and fitness content.",
  },
  tools: ["Premiere Pro", "CapCut"],
  icon: "video",
  gradient: "from-slate-900 via-blue-700 to-sky-400",
  youtubeId: "xCiV7i9Gw5U",
  featured: true,
},
{
  id: "calisthenics-from-zero-vlog2",
  title: {
    th: "Vlog + พูดหน้ากล้อง - ฝึก Calisthenics จาก 0",
    en: "Vlog + Talking Head - Calisthenics From Zero",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "ตัดต่อวิดีโอสั้นแนว Vlog และพูดหน้ากล้องเกี่ยวกับการเริ่มฝึก Calisthenics จากศูนย์ โดยเน้นจังหวะการเล่าเรื่องที่เป็นธรรมชาติ ภาพการฝึกจริง และการตัดต่อให้ดูสนุก เข้าใจง่าย เหมาะกับคอนเทนต์สายพัฒนาตัวเองและออกกำลังกาย",
    en: "A vertical 9:16 vlog and talking-head short video about starting Calisthenics from zero. The edit focuses on natural storytelling, real training footage, and an engaging pacing style suitable for self-improvement and fitness content.",
  },
  tools: ["Premiere Pro", "CapCut"],
  icon: "video",
  gradient: "from-slate-900 via-blue-700 to-sky-400",
  youtubeId: "svmWKazthW8",
  featured: true,
},{
  id: "unicafe-ordering-system",
  title: {
    th: "Uni Cafe Ordering System",
    en: "Uni Cafe Ordering System",
  },
  category: "website",
  label: {
    th: "Website",
    en: "Website",
  },
  description: {
    th: "พัฒนาเว็บไซต์สั่งอาหารสำหรับ Uni Cafe พร้อมระบบจัดการออเดอร์ฝั่งแคชเชียร์ โดยใช้ Google Apps Script เป็นระบบหลัก เชื่อมฐานข้อมูลผ่าน Google Sheets และใช้ LINE Messaging API สำหรับแจ้งเตือนออเดอร์ ช่วยให้ร้านจัดการคำสั่งซื้อได้สะดวก รวดเร็ว และเป็นระบบมากขึ้น",
    en: "A food ordering website for Uni Cafe with a cashier-side order management system. Built with Google Apps Script, using Google Sheets as the database and LINE Messaging API for order notifications, helping the cafe manage orders more efficiently and systematically.",
  },
  tools: ["Google Apps Script", "Google Sheets", "LINE Messaging API", "HTML", "CSS", "JavaScript"],
  icon: "globe",
  gradient: "from-sky-200 via-blue-500 to-blue-800",
  websiteUrl: "https://script.google.com/macros/s/AKfycbwti96g3vuIQlnVvk1ZE5l9IHvR-iaLrDsw44PNGim7LDTZuf-_97uzy4KEbK8HJQfAPA/exec?table=U0",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780721971/Uniorder_nsfdyi.jpg",
  featured: true,
},
{
  id: "narongrit-portfolio-website",
  title: {
    th: "Narongrit Portfolio Website",
    en: "Narongrit Portfolio Website",
  },
  category: "website",
  label: {
    th: "Website",
    en: "Website",
  },
  description: {
    th: "พัฒนาเว็บไซต์พอร์ตโฟลิโอส่วนตัวเพื่อโชว์ผลงานด้าน Graphic Design, Video Editing และ Programming โดยใช้ Next.js, TypeScript และ Tailwind CSS พร้อมระบบเปลี่ยนภาษาไทย/อังกฤษ ระบบแสดงผลงานแบบ Popup และ Deploy บน Vercel เพื่อใช้เป็นเว็บพอร์ตหลักในการนำเสนอผลงานอย่างมืออาชีพ",
    en: "A personal portfolio website built to showcase works in Graphic Design, Video Editing, and Programming. Developed with Next.js, TypeScript, and Tailwind CSS, featuring Thai/English language switching, a popup project viewer, and deployment on Vercel as a professional online portfolio.",
  },
  tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  icon: "globe",
  gradient: "from-cyan-300 via-sky-500 to-blue-700",
  websiteUrl: "/",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780722522/portfolio-web_ud89zz.png",
  featured: true,
},
  
];

export const showreel = {
  title: {
    th: "เบื้องหลังการตัดต่อ - มือใหม่ Forex ควรเริ่มจากจุดไหนก่อน?",
    en: "Behind the Edit - Where Should Forex Beginners Start?",
  },
  description: {
    th: "วิดีโอเบื้องหลังการตัดต่อคอนเทนต์ให้ความรู้ Forex สำหรับมือใหม่ แสดงกระบวนการทำงานด้านการลำดับภาพ การใส่ข้อความ จังหวะการตัด และการจัดองค์ประกอบให้คอนเทนต์เข้าใจง่ายและน่าติดตามมากขึ้น",
    en: "A behind-the-scenes editing video for Forex beginner educational content, showing the workflow behind sequencing, text placement, pacing, and visual composition to make the content clearer and more engaging.",
  },
  youtubeId: "XXdM9XSoFUI",
};