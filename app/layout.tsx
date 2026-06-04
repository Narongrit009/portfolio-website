import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Narongrit — Creative Designer & Digital Developer",
  description:
    "Portfolio website for Graphic Design, Video Editing, and Programming works by Narongrit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body className={`${outfit.variable} ${syne.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
