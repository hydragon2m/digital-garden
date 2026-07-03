"use client";

import React from "react";
import { useLanguage } from "../app/LanguageContext";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const { content, t } = useLanguage();
  const { educationInfo } = content;

  return (
    <section
      id="education"
      className="pt-16 pb-20 md:pt-20 md:pb-24 bg-zinc-50 dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={t("educationTitle")} />

        <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          {educationInfo.map((edu, index) => (
            <ScrollReveal
              key={index}
              delay={index * 80}
              className="py-8 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10"
            >
              {/* Left */}
              <div className="md:col-span-3 flex flex-col gap-1">
                <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600">{edu.duration}</p>
                {edu.grade && (
                  <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600">{edu.grade}</p>
                )}
              </div>

              {/* Right */}
              <div className="md:col-span-9 flex flex-col gap-2">
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  {edu.schoolName}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.subHeader}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-1">
                  {edu.desc}
                </p>
                {edu.descBullets && edu.descBullets.length > 0 && (
                  <div className="flex flex-col gap-1.5 mt-1">
                    {edu.descBullets.map((bullet, idx) => (
                      <p key={idx} className="text-sm text-zinc-500 dark:text-zinc-400">
                        {bullet}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
