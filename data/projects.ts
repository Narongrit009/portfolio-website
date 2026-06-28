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
  featured: false,
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
  featured: false,
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
  featured: false,
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
  featured: false,
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
  featured: false,
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
  featured: false,
},{
  id: "muji-house-review",
  title: {
    th: "รีวิวบ้านสไตล์มูจิ",
    en: "Muji Style House Review",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "ตัดต่อวิดีโอสั้นแนวตั้ง 9:16 สำหรับคอนเทนต์รีวิวบ้านสไตล์มูจิ เน้นบรรยากาศอบอุ่น เรียบง่าย มินิมอล ถ่ายทอดจุดเด่นของบ้าน พื้นที่ใช้สอย แสงธรรมชาติ และดีไซน์ภายในให้ดูน่าอยู่ เหมาะสำหรับ Shorts/TikTok/Reels",
    en: "A vertical 9:16 short-form house review video featuring a Muji-inspired home style. The edit highlights a warm, simple, and minimalist atmosphere, showcasing the home's key spaces, natural lighting, interior design, and livable mood, optimized for Shorts, TikTok, and Reels.",
  },
  tools: ["CapCut"],
  icon: "play",
  gradient: "from-stone-700 via-neutral-400 to-amber-100",
  youtubeId: "TretxEcIYl0",
  featured: true,
},{
  id: "pong-phrabat-land-review",
  title: {
    th: "รีวิวที่ดินโป่งพระบาท",
    en: "Pong Phrabat Land Review",
  },
  category: "video",
  label: {
    th: "Video Editing",
    en: "Video Editing",
  },
  description: {
    th: "ตัดต่อวิดีโอสั้นแนวตั้ง 9:16 สำหรับคอนเทนต์รีวิวที่ดินทำเลโป่งพระบาท ถ่ายทอดบรรยากาศพื้นที่จริง มุมมองโดยรอบ ทางเข้า จุดเด่นของทำเล และศักยภาพการใช้งานของที่ดิน พร้อมจังหวะภาพและข้อความที่เหมาะสำหรับ Shorts/TikTok/Reels",
    en: "A vertical 9:16 short-form land review video showcasing a property in the Pong Phrabat area. The edit presents the real location, surrounding views, access route, location highlights, and land potential with pacing and text highlights optimized for Shorts, TikTok, and Reels.",
  },
  tools: ["CapCut"],
  icon: "play",
  gradient: "from-emerald-800 via-green-500 to-lime-200",
  youtubeId: "I_AS8ADQhck",
  featured: true,
},
{
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
  tools: ["CapCut"],
  icon: "play",
  gradient: "from-blue-700 via-blue-500 to-sky-300",
  youtubeId: "R5XJIe048tA",
  featured: false,
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
  tools: ["CapCut"],
  icon: "video",
  gradient: "from-blue-950 via-blue-700 to-cyan-300",
  youtubeId: "Q4sixSzvLaM",
  featured: false,
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
  tools: ["CapCut"],
  icon: "play",
  gradient: "from-blue-800 via-blue-500 to-cyan-300",
  youtubeId: "dS9VWCS7YEI",
  featured: false,
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
  tools: ["CapCut"],
  icon: "play",
  gradient: "from-sky-700 via-blue-500 to-cyan-300",
  youtubeId: "oviReU_BmOE",
  featured: false,
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
  tools: ["CapCut"],
  icon: "video",
  gradient: "from-slate-900 via-blue-700 to-sky-400",
  youtubeId: "XXdM9XSoFUI",
  featured: false,
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
  tools: ["CapCut"],
  icon: "video",
  gradient: "from-slate-900 via-blue-800 to-sky-400",
  youtubeId: "A8BvZlWf84M",
  featured: false,
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
  tools: ["CapCut"],
  icon: "video",
  gradient: "from-pink-200 via-sky-300 to-blue-600",
  youtubeId: "ZorrwyKoLK8",
  featured: false,
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
  tools: ["CapCut"],
  icon: "video",
  gradient: "from-slate-900 via-blue-700 to-sky-400",
  youtubeId: "xCiV7i9Gw5U",
  featured: false,
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
  tools: ["CapCut"],
  icon: "video",
  gradient: "from-slate-900 via-blue-700 to-sky-400",
  youtubeId: "svmWKazthW8",
  featured: false,
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
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780751092/web1_ihbo9o.png",
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
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780751100/web2_m1z9nn.png",
  featured: false,
},
{
  id: "vps-unicorn-tech-solutions",
  title: {
    th: "UX/UI VPS Unicorn Tech Solutions",
    en: "UX/UI VPS Unicorn Tech Solutions",
  },
  category: "website",
  label: {
    th: "Website",
    en: "Website",
  },
  description: {
    th: "ออกแบบ UX/UI สำหรับเว็บไซต์ VPS ของ Unicorn Tech Solutions โดยเน้นโครงสร้างการใช้งานที่ชัดเจน หน้าตาเรียบสะอาด ทันสมัย และช่วยให้ผู้ใช้งานเข้าถึงข้อมูลบริการได้ง่าย พร้อมออกแบบ Flow การใช้งานตั้งแต่หน้า Landing Page, Login, Register ไปจนถึงหน้าจัดการระบบภายใน เพื่อสร้างประสบการณ์ใช้งานที่ลื่นไหลและเป็นมืออาชีพ",
    en: "A UX/UI website design project for Unicorn Tech Solutions, focused on creating a clean, modern, and user-friendly experience. The design covers key user flows including Landing Page, Login, Register, and internal management pages, helping users access VPS service information easily through a seamless and professional interface.",
  },
  tools: ["Figma", "UX/UI Design", "Wireframe", "Prototype"],
  icon: "globe",
  gradient: "from-sky-200 via-blue-500 to-blue-800",
  websiteUrl: "https://www.figma.com/design/MHc2yMsopYVOaQVySQirDl/Project-VPS?node-id=0-1&t=DJp0WibINtJvb86P-1",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780741417/figma1_aokzoy.png",
  featured: false,
},
{
  id: "spy-link",
  title: {
    th: "UX/UI Design SPY Link",
    en: "UX/UI Design SPY Link",
  },
  category: "website",
  label: {
    th: "Website",
    en: "Website",
  },
  description: {
    th: "ออกแบบ UX/UI สำหรับระบบ SPY Link โดยเน้นการใช้งานที่เข้าใจง่าย ทันสมัย และเหมาะกับระบบจัดการงานด้านขนส่งหรือติดตามข้อมูล ออกแบบตั้งแต่หน้า Login, Dashboard, รายการคำสั่งซื้อ, การติดตามสถานะ และรายละเอียดข้อมูล เพื่อให้ผู้ใช้งานสามารถเข้าถึงข้อมูลสำคัญได้รวดเร็วและเป็นระบบ",
    en: "A UX/UI website design project for SPY Link, focused on creating a clean, modern, and easy-to-use interface for logistics or tracking management. The design covers key screens including Login, Dashboard, Orders, Tracking, and Detail pages, helping users access important information quickly and systematically.",
  },
  tools: ["Figma", "UX/UI Design", "Wireframe", "Prototype"],
  icon: "globe",
  gradient: "from-sky-200 via-blue-500 to-cyan-700",
  websiteUrl: "https://www.figma.com/design/xfJQRZ76fnyuG72oAYuDfz/SpyLink?node-id=0-1&t=E5VEuYY0SyFFoYPL-1",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780741418/figma2_as1mvl.png",
  featured: true,
},
{
  id: "kp-house",
  title: {
    th: "UX/UI Design K.P. House",
    en: "UX/UI Design K.P. House",
  },
  category: "website",
  label: {
    th: "Website",
    en: "Website",
  },
  description: {
    th: "ออกแบบ UX/UI สำหรับเว็บไซต์ K.P. House บริษัทรับเหมาก่อสร้างบ้าน โดยเน้นภาพลักษณ์ที่น่าเชื่อถือ ทันสมัย และเข้าถึงง่ายสำหรับลูกค้า ออกแบบโครงสร้างการนำเสนอข้อมูลตั้งแต่หน้าแรก, เกี่ยวกับเรา, ผลงานก่อสร้าง และจุดเด่นของบริการ เพื่อช่วยให้ผู้ใช้งานเข้าใจธุรกิจและตัดสินใจติดต่อได้ง่ายขึ้น",
    en: "A UX/UI website design project for K.P. House, a home construction company. The design focuses on trust, modern presentation, and easy access to key information. It includes core sections such as Home, About Us, Construction Portfolio, and service highlights to help visitors better understand the business and make contact more easily.",
  },
  tools: ["Figma", "UX/UI Design", "Wireframe", "Prototype"],
  icon: "globe",
  gradient: "from-pink-200 via-pink-500 to-rose-700",
  websiteUrl: "https://www.figma.com/design/3hTnQmuVWUTAY50Axhzo0F/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%AB%E0%B8%A1%E0%B8%B2?node-id=0-1&t=O4bEuTjJN8GsvGzN-1",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780741418/figma3_byufcv.png",
  featured: false,
},
{
  id: "safe-eater",
  title: {
    th: "UX/UI Design Safe Eater",
    en: "UX/UI Design Safe Eater",
  },
  category: "website",
  label: {
    th: "Website",
    en: "Website",
  },
  description: {
    th: "ออกแบบ UX/UI สำหรับ Safe Eater แอปพลิเคชันด้านสุขภาพและโภชนาการ ที่ช่วยให้ผู้ใช้งานค้นหาเมนูอาหาร ดูข้อมูลโภชนาการ และติดตามพฤติกรรมการกินได้อย่างสะดวก โดยเน้นดีไซน์ที่สดใส ใช้งานง่าย และช่วยให้ผู้ใช้เข้าถึงข้อมูลสำคัญได้อย่างชัดเจน เพื่อสร้างประสบการณ์ใช้งานที่เป็นมิตรและส่งเสริมการดูแลสุขภาพในชีวิตประจำวัน",
    en: "A UX/UI design project for Safe Eater, a health and nutrition application that helps users explore food menus, view nutrition information, and track their eating habits conveniently. The design focuses on a fresh, user-friendly interface that makes important health data easy to access, creating an engaging experience that supports healthier daily choices.",
  },
  tools: ["Figma", "UX/UI Design", "Wireframe", "Prototype"],
  icon: "globe",
  gradient: "from-sky-200 via-cyan-400 to-emerald-400",
  websiteUrl: "https://www.figma.com/design/VYew8gMHaSZBHvNdjzsfv2/Project-SafeEater?node-id=0-1&t=hxyPyt2pf5TqtFlL-1",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780742197/figma4_k5dk9r.png",
  featured: false,
},
{
  id: "the-sun-odyssey",
  title: {
    th: "UX/UI Design The Sun Odyssey",
    en: "UX/UI Design The Sun Odyssey",
  },
  category: "website",
  label: {
    th: "Website",
    en: "Website",
  },
  description: {
    th: "ออกแบบ UX/UI สำหรับเว็บไซต์ The Sun Odyssey แพลตฟอร์มท่องเที่ยวและแพ็กเกจทัวร์ระดับพรีเมียม โดยเน้นภาพลักษณ์ที่หรูหรา น่าเชื่อถือ และใช้งานง่าย ออกแบบทั้งฝั่งผู้ใช้งานและหน้าจัดการข้อมูล เพื่อให้การเลือกแพ็กเกจ ดูรายละเอียดทริป และจัดการข้อมูลทัวร์เป็นไปอย่างลื่นไหล พร้อมช่วยสะท้อนเอกลักษณ์ของแบรนด์ด้านการท่องเที่ยวได้อย่างชัดเจน",
    en: "A UX/UI website design project for The Sun Odyssey, a premium travel and tour platform. The design focuses on a luxurious, trustworthy, and user-friendly experience, covering both customer-facing pages and management interfaces. It helps users explore tour packages, view trip details, and navigate the platform smoothly while reflecting a strong premium travel brand identity.",
  },
  tools: ["Figma", "UX/UI Design", "Wireframe", "Prototype"],
  icon: "globe",
  gradient: "from-amber-200 via-amber-500 to-yellow-700",
  websiteUrl: "https://www.figma.com/design/YHjYxNaHxLps9lrLtL4r2C/The-Sun-Odyssey?node-id=5-3&t=DgajAi8NZkk1UBMO-1",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780742520/figma5_vpyb65.png",
  featured: false,
},
{
  id: "depa-careerpath",
  title: {
    th: "UX/UI Design depa CareerPath",
    en: "UX/UI Design depa CareerPath",
  },
  category: "website",
  label: {
    th: "Website",
    en: "Website",
  },
  description: {
    th: "ออกแบบ UX/UI สำหรับระบบ depa CareerPath แพลตฟอร์มวางแผนเส้นทางอาชีพและการพัฒนาตนเอง โดยออกแบบโครงสร้างการใช้งานให้เข้าใจง่าย ครอบคลุมการจัดการข้อมูลโปรไฟล์ เส้นทางอาชีพ สุขภาพ และการวางแผนด้านการเงิน พร้อมออกแบบหน้าจอทั้งฝั่งผู้ใช้งานและระบบภายใน เพื่อให้ผู้ใช้เข้าถึงข้อมูลสำคัญได้อย่างเป็นระบบและใช้งานได้สะดวก",
    en: "A UX/UI website design project for depa CareerPath, a digital platform for career planning and personal development. The design focuses on clear information architecture and user-friendly workflows, covering profile management, career path planning, health, and wealth-related features. It includes both user-facing and internal system screens to help users access important information efficiently and systematically.",
  },
  tools: ["Figma", "UX/UI Design", "Wireframe", "Prototype"],
  icon: "globe",
  gradient: "from-yellow-200 via-yellow-400 to-blue-900",
  websiteUrl: "https://www.figma.com/design/xC7uqovMMrkzWObLpNu6t0/depa-CareerPath-UI?node-id=34-31&t=hxyPyt2pf5TqtFlL-1",
  imageUrl: "https://res.cloudinary.com/dnikfaqwc/image/upload/v1780742853/fihma6_hwlpiv.png",
  featured: false,
},
  
];

export const showreel = { title: { th: "รีวิวบ้านสไตล์มูจิ", en: "Muji Style House Review", }, description: { th: "วิดีโอรีวิวบ้านสไตล์มูจิ ถ่ายทอดบรรยากาศบ้านที่อบอุ่น เรียบง่าย และมินิมอล เน้นการลำดับภาพให้เห็นพื้นที่ใช้สอย แสงธรรมชาติ ดีไซน์ภายใน และมุมมองโดยรวมของบ้านให้น่าอยู่ เหมาะสำหรับคอนเทนต์แนว Shorts/TikTok/Reels", en: "A Muji-style house review video showcasing a warm, simple, and minimalist living atmosphere. The edit highlights the home's functional spaces, natural lighting, interior design, and overall livable mood, optimized for Shorts, TikTok, and Reels.", }, youtubeId: "TretxEcIYl0", };