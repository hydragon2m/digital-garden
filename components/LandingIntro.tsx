"use client";

import React from "react";
import { useLanguage } from "../app/LanguageContext";

export default function LandingIntro() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white leading-tight">
              {t("landingIntroTitle")} <span className="text-cyan-500">.</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
              {t("landingIntroDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200/50 dark:border-cyan-900/50">
              <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t("landingIntroFocus1Title")}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("landingIntroFocus1Desc")}</p>
            </div>

            <div className="p-6 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/50">
              <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t("landingIntroFocus2Title")}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("landingIntroFocus2Desc")}</p>
            </div>

            <div className="p-6 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/50">
              <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t("landingIntroFocus3Title")}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{t("landingIntroFocus3Desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
