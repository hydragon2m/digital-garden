"use client";

import React from "react";
import { socialLinks } from "../portfolio";
import { useLanguage } from "../app/LanguageContext";
import { Link2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { content, t } = useLanguage();

  return (
    <footer
      id="footer"
      className="py-12 border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center md:text-left">
          © {currentYear} {content.greetings.name}. {t("footerRights")}
        </p>

        {/* Small Social Icon Set */}
        <div className="flex items-center gap-5">
          {socialLinks.gitlab && (
            <a
              href={socialLinks.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="GitLab"
            >
              <Link2 className="w-5 h-5" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          {socialLinks.email && (
            <a
              href={socialLinks.email}
              className="text-zinc-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
