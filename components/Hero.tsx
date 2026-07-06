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
      className="min-h-[100svh] bg-white dark:bg-zinc-950 flex items-start md:items-center py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 border-b border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-24 items-start md:items-center pt-2 md:pt-0">

          {/* Left — text block */}
          <ScrollReveal className="flex flex-col items-center md:items-start gap-6 md:gap-8">

            {/* Open to Work */}
            <div className="flex items-center gap-2 w-fit mx-auto md:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                {t("openToWork")}
              </span>
            </div>

            {/* Hidden H1 for SEO Crawler optimization */}
            <h1 className="sr-only">
              {greetings.name} - Software Engineer &middot; Backend Systems
            </h1>

            {/* Name — desktop only */}
            <div className="hidden md:flex flex-col gap-3">
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter leading-[0.95]">
                {greetings.name}
              </p>
              <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-normal tracking-normal">
                Software Engineer &middot; Backend Systems
              </p>
            </div>

            {/* Mobile avatar + actions + copy */}
            <div className="md:hidden flex flex-col items-center gap-4 pt-0">
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="max-w-[6ch] text-4xl font-bold text-zinc-900 dark:text-white tracking-tight leading-[0.95]">
                  {greetings.name}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal tracking-normal">
                  Software Engineer &middot; Backend Systems
                </p>
              </div>

              <div className="w-40 h-40 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-transform duration-500">
                <Image
                  src="/avatar.png"
                  alt={greetings.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col items-center gap-3 w-full">
                <div className="flex flex-row flex-wrap justify-center items-center gap-3 w-full">
                  <a
                    href="#contact"
                    className="px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium rounded-md hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors active:scale-95 whitespace-nowrap"
                  >
                    {t("heroContact")}
                  </a>
                  <a
                    href={socialLinks.gitlab || socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-md hover:border-zinc-900 dark:hover:border-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors active:scale-95 whitespace-nowrap"
                  >
                    GitLab
                  </a>
                  {greetings.resumeLink ? (
                    <a
                      href={greetings.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-md hover:border-zinc-900 dark:hover:border-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors active:scale-95 whitespace-nowrap"
                    >
                      {t("heroResume")}
                    </a>
                  ) : null}
                </div>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal tracking-normal text-center">
                  {t("heroDescription")}
                </p>
                <div className="flex flex-col gap-1 text-center pt-1">
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">{t("heroLocation")}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">{t("heroYearsExp")}</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="hidden md:block text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
              {t("heroDescription")}
            </p>

            {/* Desktop CTAs */}
            <div className="hidden md:flex flex-wrap items-center gap-4">
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
            </div>

          </ScrollReveal>

          {/* Right — avatar block */}
          <ScrollReveal delay={120} className="hidden md:flex flex-col items-center gap-6">
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
            <div className="flex flex-col gap-1 items-center text-center">
              <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono">{t("heroLocation")}</p>
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
