"use client";

import React from "react";
import { socialLinks } from "../portfolio";
import Image from "next/image";
import { useLanguage } from "../app/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const { content, t } = useLanguage();
  const { greetings } = content;

  return (
    <section id="top" className="relative min-h-[100svh] bg-white dark:bg-zinc-950 flex items-center justify-center py-20 scroll-mt-20 md:scroll-mt-24">
      <ScrollReveal className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        
        {/* Avatar */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-md">
          <Image
            src="/avatar.png"
            alt={greetings.name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white">
            {greetings.name}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            {t("heroTitle")}
          </p>
        </div>

        {/* Bio */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
          {t("heroDescription")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <a
            href={socialLinks.gitlab || socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors font-medium text-sm"
          >
            GitLab
          </a>
          <a
            href="#experience"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
          >
            {t("heroExperience")}
          </a>
          {greetings.resumeLink ? (
            <a
              href={greetings.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
            >
              {t("heroResume")}
            </a>
          ) : null}
        </div>
      </ScrollReveal>
    </section>
  );
}
