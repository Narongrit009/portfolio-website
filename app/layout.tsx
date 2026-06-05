import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Narongrit Portfolio | Graphic Designer, Video Editor & Programmer",
  description:
    "Portfolio website of Narongrit showcasing graphic design, video editing, and programming works.",
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
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Prompt:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}