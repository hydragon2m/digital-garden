"use client";

import React from "react";
import { useLanguage } from "../app/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { content, t } = useLanguage();
  const { projects } = content;

  return (
    <section id="projects" className="min-h-[100svh] pt-16 pb-20 md:pt-20 md:pb-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 snap-start scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={t("projectsTitle")} />

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-md hover:shadow-lg rounded-xl p-8 transition-all duration-300"
            >
              {/* Title & Stars */}
              <div className="mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                  {project.name}
                </h3>
                {project.stars && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">{project.stars} {t("gitlabStars")}</p>
                )}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
                {project.desc}
              </p>

              {/* Details Section */}
              <div className="space-y-6 mb-8">
                {/* Metrics */}
                {project.metrics && (
                  <div>
                    <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-3">
                      {t("metricsTitle")}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {project.metrics.users && (
                        <div>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mb-1">{t("usersMetric")}</p>
                          <p className="text-sm font-bold text-zinc-900 dark:text-white">{project.metrics.users}</p>
                        </div>
                      )}
                      {project.metrics.qps && (
                        <div>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mb-1">QPS</p>
                          <p className="text-sm font-bold text-zinc-900 dark:text-white">{project.metrics.qps}</p>
                        </div>
                      )}
                      {project.metrics.uptime && (
                        <div>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mb-1">{t("uptimeMetric")}</p>
                          <p className="text-sm font-bold text-zinc-900 dark:text-white">{project.metrics.uptime}</p>
                        </div>
                      )}
                      {project.metrics.latency && (
                        <div>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mb-1">{t("latencyMetric")}</p>
                          <p className="text-sm font-bold text-zinc-900 dark:text-white">{project.metrics.latency}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Implementation Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-3">
                      {t("highlightsTitle")}
                    </h4>
                    <ul className="space-y-1.5">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Architecture Description */}
              {project.architecture && (
                <div className="mb-6 p-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide mb-2">
                    {t("architectureTitle")}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.architecture.description}
                  </p>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-200/50 dark:border-zinc-700/50 hover:border-cyan-500/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
                  >
                    GitLab
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
