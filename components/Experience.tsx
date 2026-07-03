"use client";

import React from "react";
import { useLanguage } from "../app/LanguageContext";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  const { content, t } = useLanguage();
  const { experience } = content;

  return (
    <section
      id="experience"
      className="pt-16 pb-20 md:pt-20 md:pb-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={t("experienceTitle")} />

        <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          {experience.map((exp, index) => (
            <ScrollReveal
              key={index}
              delay={index * 80}
              className="py-10 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              {/* Left — company / role / date */}
              <div className="md:col-span-3 flex flex-col gap-1">
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  {exp.company}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{exp.role}</p>
                <p className="text-xs font-mono text-zinc-400 dark:text-zinc-600 mt-1">{exp.date}</p>

                {/* Stack tags */}
                {exp.stack && exp.stack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-2 py-0.5 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right — bullets + scale */}
              <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Built */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-[11px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                    {t("builtColumn")}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {exp.descBullets && exp.descBullets.length > 0 ? (
                      exp.descBullets.map((bullet, idx) => (
                        <p key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {bullet}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {exp.desc}
                      </p>
                    )}
                  </div>
                </div>

                {/* Scale */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-[11px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                    {t("scaleColumn")}
                  </h4>
                  <div className="flex flex-col gap-2">
                    {(content.scale[exp.company] || content.scale.default).map((item) => (
                      <p key={item} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
