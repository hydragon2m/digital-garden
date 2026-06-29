"use client";

import React from "react";
import { educationInfo } from "../portfolio";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationInfo.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                {edu.schoolName}
              </h3>
              <h4 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
                {edu.subHeader}
              </h4>
              
              <div className="flex flex-wrap gap-2 mb-4 text-xs text-zinc-600 dark:text-zinc-500">
                <span>{edu.duration}</span>
                {edu.grade && <span className="text-zinc-400 dark:text-zinc-600">•</span>}
                {edu.grade && <span>{edu.grade}</span>}
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                {edu.desc}
              </p>

              {edu.descBullets && edu.descBullets.length > 0 && (
                <ul className="space-y-1.5">
                  {edu.descBullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400">
                      • {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
