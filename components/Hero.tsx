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
    <section
      id="top"
      className="min-h-[100svh] bg-white dark:bg-zinc-950 flex items-center py-24 scroll-mt-20 md:scroll-mt-24 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">

          {/* Left — text block */}
          <ScrollReveal className="flex flex-col gap-8">

            {/* Open to Work */}
            <div className="flex items-center gap-2 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                {t("openToWork")}
              </span>
            </div>

            {/* Name — very large, editorial */}
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter leading-[0.95]">
                {greetings.name}
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-normal tracking-normal">
                Software Engineer &middot; Backend Systems
              </p>
            </div>

            {/* Bio */}
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
              {t("heroDescription")}
            </p>

            {/* CTAs — minimal, text-forward */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-md hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors active:scale-95"
              >
                {t("heroContact")}
              </a>
              <a
                href={socialLinks.gitlab || socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-md hover:border-zinc-900 dark:hover:border-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors active:scale-95"
              >
                GitLab
              </a>
              {greetings.resumeLink ? (
                <a
                  href={greetings.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-md hover:border-zinc-900 dark:hover:border-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors active:scale-95"
                >
                  {t("heroResume")}
                </a>
              ) : null}
              <a
                href="#experience"
                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700"
              >
                {t("heroExperience")} ↓
              </a>
            </div>

          </ScrollReveal>

          {/* Right — avatar block */}
          <ScrollReveal delay={120} className="flex flex-col items-center lg:items-end gap-6">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-transform duration-500 hover:scale-105">
              <Image
                src="/avatar.png"
                alt={greetings.name}
                width={224}
                height={224}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Meta info */}
            <div className="text-right flex flex-col gap-1 items-center lg:items-end">
              <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">Hà Nội, Việt Nam</p>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                {t("heroYearsExp")}
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
