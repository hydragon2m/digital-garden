"use client";

import React from "react";
import { useLanguage } from "../app/LanguageContext";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const { content, t } = useLanguage();
  const { projects } = content;

  return (
    <section
      id="projects"
      className="pt-16 pb-20 md:pt-20 md:pb-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={t("projectsTitle")} />

        <div className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          {projects.map((project, index) => (
            <ScrollReveal
              key={index}
              delay={index * 80}
              className="py-10 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10"
            >
              {/* Left — name + links */}
              <div className="md:col-span-3 flex flex-col gap-3">
                <h3 className="text-base font-bold text-zinc-900 dark:text-white leading-snug">
                  {project.name}
                </h3>

                {/* Tech tags — inline */}
                <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-600 leading-relaxed">
                  {project.tags.join(" · ")}
                </p>

                {/* Links */}
                <div className="flex gap-4 mt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700"
                    >
                      GitLab ↗
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700"
                    >
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Right — description + details */}
              <div className="md:col-span-9 flex flex-col gap-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.desc}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.metrics.users && (
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">{t("usersMetric")}</p>
                        <p className="text-sm font-bold text-zinc-900 dark:text-white">{project.metrics.users}</p>
                      </div>
                    )}
                    {project.metrics.qps && (
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">QPS</p>
                        <p className="text-sm font-bold text-zinc-900 dark:text-white">{project.metrics.qps}</p>
                      </div>
                    )}
                    {project.metrics.uptime && (
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">{t("uptimeMetric")}</p>
                        <p className="text-sm font-bold text-zinc-900 dark:text-white">{project.metrics.uptime}</p>
                      </div>
                    )}
                    {project.metrics.latency && (
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">{t("latencyMetric")}</p>
                        <p className="text-sm font-bold text-zinc-900 dark:text-white">{project.metrics.latency}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h4 className="text-[11px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                      {t("highlightsTitle")}
                    </h4>
                    <div className="flex flex-col gap-1.5">
                      {project.highlights.map((h, idx) => (
                        <p key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {h}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Architecture */}
                {project.architecture && (
                  <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
                    <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-1">{t("architectureTitle")}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {project.architecture.description}
                    </p>
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
