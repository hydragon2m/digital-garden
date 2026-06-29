"use client";

import React from "react";
import { socialLinks } from "../portfolio";
import { useLanguage } from "../app/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { content, t } = useLanguage();
  const profile = content.contactFallback;

  return (
    <section id="contact" className="min-h-[80svh] pt-16 pb-20 md:pt-20 md:pb-24 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title={t("contactTitle")} />
        <div className="flex flex-col items-center text-center gap-8">
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              {profile.bio}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-4">
            {profile.location && (
              <p className="text-sm text-zinc-600 dark:text-zinc-500">
                {profile.location}
              </p>
            )}
            
            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {socialLinks.email && (
                <a
                  href={socialLinks.email}
                  className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
                >
                  Email
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
                >
                  LinkedIn
                </a>
              )}
              {socialLinks.gitlab && (
                <a
                  href={socialLinks.gitlab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
                >
                  GitLab
                </a>
              )}
              {socialLinks.twitter && socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors font-medium text-sm"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
