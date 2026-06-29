"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <ScrollReveal className="mb-12 flex items-center gap-5">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
    </ScrollReveal>
  );
}
