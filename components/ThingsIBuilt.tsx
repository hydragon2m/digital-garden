"use client";

import React from "react";
import { useLanguage } from "../app/LanguageContext";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function ThingsIBuilt() {
  const { content, t } = useLanguage();

  return (
    <section
      id="things-built"
      className="pt-16 pb-20 md:pt-20 md:pb-24 bg-zinc-50 dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={t("builtTitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
          {content.deliverables.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={(index % 3) * 60}
              className="bg-zinc-50 dark:bg-zinc-900/30 p-6 flex flex-col gap-3 hover:bg-white dark:hover:bg-zinc-900/60 transition-colors"
            >
              <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                {item.category}
              </p>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white leading-snug">
                {item.name}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600"
                  >
                    {tag}{idx < item.tags.length - 1 ? " ·" : ""}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
