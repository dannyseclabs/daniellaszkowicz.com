import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daniellaszkowicz.com"),
  title: {
    default: "Daniel Łaszkowicz",
    template: "%s | Daniel Łaszkowicz",
  },
  description:
    "A static-first personal digital hub for projects, cybersecurity, homelab notes, writing, gallery work, and self-improvement systems.",
  openGraph: {
    title: "Daniel Łaszkowicz",
    description:
      "Projects, cybersecurity, homelab notes, writing, gallery work, and personal systems from Daniel Łaszkowicz.",
    url: "https://daniellaszkowicz.com",
    siteName: "Daniel Łaszkowicz",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
