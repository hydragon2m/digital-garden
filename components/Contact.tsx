"use client";

import React from "react";
import { socialLinks } from "../portfolio";
import { useLanguage } from "../app/LanguageContext";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const { content, t, language } = useLanguage();
  const profile = content.contactFallback;

  const links = [
    { label: "Email", href: socialLinks.email },
    { label: "LinkedIn", href: socialLinks.linkedin },
    { label: "GitLab", href: socialLinks.gitlab },
    { label: "Twitter", href: socialLinks.twitter },
  ].filter((l) => l.href);

  return (
    <section
      id="contact"
      className="pt-16 pb-20 md:pt-20 md:pb-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={t("contactTitle")} />

        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" delay={60}>

          {/* Left — headline */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Open to Work inline */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                {language === "vi" ? "Đang tìm kiếm cơ hội mới" : "Open to New Opportunities"}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
              {language === "vi"
                ? "Hãy cùng xây dựng\nđiều gì đó tốt hơn."
                : "Let's build something\ngreat together."}
            </h3>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md">
              {profile.bio}
              {profile.location && (
                <span className="block mt-1 text-zinc-400 dark:text-zinc-500">
                  {profile.location}
                </span>
              )}
            </p>
          </div>

          {/* Right — links */}
          <div className="lg:col-span-5 flex flex-col gap-0 divide-y divide-zinc-200 dark:divide-zinc-800">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                className="flex items-center justify-between py-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors group"
              >
                <span>{label}</span>
                <span className="text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors text-xs">↗</span>
              </a>
            ))}
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
}
