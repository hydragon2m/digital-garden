"use client";

import React from "react";
import { useLanguage } from "../app/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function ThingsIBuilt() {
  const { content, t } = useLanguage();

  return (
    <section id="things-built" className="min-h-[100svh] pt-16 pb-20 md:pt-20 md:pb-24 bg-zinc-50 dark:bg-zinc-900/20 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={t("builtTitle")} />

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.deliverables.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col h-full"
            >
              {/* Category Badge */}
              <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-2">
                {item.category}
              </p>

              {/* Title */}
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 leading-tight">
                {item.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
                {item.description}
              </p>

              {/* Achievement Highlight */}
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4">
                {item.achievement}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
