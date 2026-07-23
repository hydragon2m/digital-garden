import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { seoData } from "../portfolio";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoData.url),
  title: seoData.title,
  description: seoData.description,
  authors: [{ name: seoData.author }],
  keywords: seoData.keywords,
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: seoData.title,
    description: seoData.description,
    url: "/",
    siteName: seoData.author,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: seoData.image,
        width: 1200,
        height: 630,
        alt: "Do Quoc Huy - Software Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${seoData.url}/#website`,
        "url": seoData.url,
        "name": seoData.author,
        "alternateName": ["Do Quoc Huy"],
      },
      {
        "@type": "WebPage",
        "@id": `${seoData.url}/#webpage`,
        "url": seoData.url,
        "name": seoData.title,
        "isPartOf": { "@id": `${seoData.url}/#website` },
      },
      {
        "@type": "Person",
        "@id": `${seoData.url}/#person`,
        "name": seoData.author,
        "url": seoData.url,
        "jobTitle": "Backend Developer",
        "sameAs": [
          "https://www.linkedin.com/in/itdqh",
          "https://gitlab.com/DQH8391"
        ]
      }
    ]
  };

  return (
    <html
      lang="vi"
      className={`${sora.variable} ${plusJakartaSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased bg-white dark:bg-zinc-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
