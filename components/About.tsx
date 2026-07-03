"use client";

import React from "react";
import { useLanguage } from "../app/LanguageContext";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const { t } = useLanguage();

  const philosophies = [
    { title: t("aboutCard1Title"), desc: t("aboutCard1Desc") },
    { title: t("aboutCard2Title"), desc: t("aboutCard2Desc") },
    { title: t("aboutCard3Title"), desc: t("aboutCard3Desc") },
  ];

  return (
    <section
      id="about"
      className="pt-16 pb-20 md:pt-20 md:pb-24 bg-zinc-50 dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={t("aboutTitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — bio */}
          <ScrollReveal className="lg:col-span-5 flex flex-col gap-5" delay={60}>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("aboutIntro")}
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("aboutHistory")}
            </p>
          </ScrollReveal>

          {/* Right — philosophies as clean list */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
            {philosophies.map((philo, index) => (
              <ScrollReveal
                key={index}
                delay={80 + index * 70}
                className="py-5 first:pt-0 flex flex-col gap-1.5"
              >
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {philo.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {philo.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
