"use client";

import React from "react";
import { useLanguage } from "../app/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLanguage();
  const philosophies = [
    {
      title: t("aboutCard1Title"),
      desc: t("aboutCard1Desc"),
      mark: "01",
    },
    {
      title: t("aboutCard2Title"),
      desc: t("aboutCard2Desc"),
      mark: "02",
    },
    {
      title: t("aboutCard3Title"),
      desc: t("aboutCard3Desc"),
      mark: "03",
    },
  ];

  return (
    <section id="about" className="min-h-[100svh] pt-16 pb-20 md:pt-20 md:pb-24 bg-zinc-50 dark:bg-zinc-900/20 border-t border-zinc-200/50 dark:border-zinc-800/50 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={t("aboutTitle")} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Brief bio text */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("aboutIntro")}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("aboutHistory")}
            </p>
          </div>

          {/* Right Column: Philosophies cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {philosophies.map((philo, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60 hover:shadow-md transition-shadow text-left"
              >
                <div className="text-sm font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 flex-shrink-0 p-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                  {philo.mark}
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">
                    {philo.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {philo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
