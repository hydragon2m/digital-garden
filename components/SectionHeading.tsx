"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  index?: string; // e.g. "01", "02"
}

export default function SectionHeading({ title, index }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-14 border-b border-zinc-200 dark:border-zinc-800 pb-6">
      <div className="flex items-baseline gap-4">
        {index && (
          <span className="text-xs font-mono text-zinc-400 dark:text-zinc-600 tracking-widest select-none">
            {index}
          </span>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          {title}
        </h2>
      </div>
    </ScrollReveal>
  );
}
