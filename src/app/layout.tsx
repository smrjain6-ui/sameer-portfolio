import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Sameer Jain — Growth, AI & Strategy",
  description:
    "Personal portfolio of Sameer Jain — growth professional exploring the intersection of growth strategy, experimentation, and AI.",
  openGraph: {
    title: "Sameer Jain — Growth, AI & Strategy",
    description:
      "Growth professional with 4+ years across startups and enterprises. Writing on business, building AI tools, and exploring strategy.",
    type: "website",
    url: "https://sameer-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Jain — Growth, AI & Strategy",
    description:
      "Growth strategy, experimentation, and AI. Writing, tools, and portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
