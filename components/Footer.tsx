"use client";

import React from "react";
import { socialLinks } from "../portfolio";
import { useLanguage } from "../app/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { content, t } = useLanguage();

  return (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div className="flex items-center gap-4 text-xs text-zinc-400 dark:text-zinc-600">
          <span>© {currentYear} {content.greetings.name}.</span>
          <span className="hidden md:inline">·</span>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-600 dark:text-emerald-500 font-medium">{t("openToWork")}</span>
          </div>
        </div>

        {/* Right — social links as text */}
        <div className="flex items-center gap-5">
          {socialLinks.gitlab && (
            <a href={socialLinks.gitlab} target="_blank" rel="noopener noreferrer"
              className="text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors">
              GitLab
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors">
              LinkedIn
            </a>
          )}
          {socialLinks.email && (
            <a href={socialLinks.email}
              className="text-xs text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Email
            </a>
          )}
        </div>

      </div>
    </footer>
  );
}
