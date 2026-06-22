import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seoData } from "../portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: seoData.title,
  description: seoData.description,
  authors: [{ name: seoData.author }],
  keywords: seoData.keywords,
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    images: [
      {
        url: seoData.image,
        width: 800,
        height: 600,
        alt: seoData.title,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-white dark:bg-zinc-950">
        {children}
      </body>
    </html>
  );
}
