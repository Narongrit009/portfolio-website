import type { Metadata } from "next";
import { Kanit, Outfit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-kanit",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Narongrit Portfolio | Graphic Designer, Video Editor & Programmer",
  description:
    "Portfolio website of Narongrit showcasing graphic design, video editing, and programming works.",
    icons: {
    icon: "/icon-web.svg",
    shortcut: "/icon-web.svg",
    apple: "/icon-web.svg",
  },
  openGraph: {
    title: "Narongrit Portfolio",
    description: "Graphic Design · Video Editing · Programming",
    url: "https://portfolio-website-six-beta-55.vercel.app",
    siteName: "Narongrit Portfolio",
    locale: "th_TH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}