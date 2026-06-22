"use client";

import React from "react";
import { experience } from "../portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-50 dark:bg-zinc-900/10 border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with brief icon (ni-briefcase analogue) */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-full bg-white dark:bg-zinc-800 text-cyan-500 shadow-md flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp, index) => {
            // Default letters for company logo placeholder if none provided
            const placeholderLetter = exp.company ? exp.company.charAt(0) : "W";

            return (
              <div
                key={index}
                className="flex flex-col items-center bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl rounded-lg p-8 border-0 text-center transition-all duration-300 hover:-translate-y-1 h-full"
              >
                {/* Company Logo / Placeholder */}
                {exp.companyLogo ? (
                  <img
                    src={exp.companyLogo}
                    alt={exp.company}
                    className="w-28 h-28 rounded-full object-cover shadow-md mb-6 border-4 border-zinc-100 dark:border-zinc-800"
                  />
                ) : (
                  <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 text-white flex items-center justify-center text-4xl font-black shadow-md mb-6 border-4 border-zinc-100 dark:border-zinc-800 uppercase">
                    {placeholderLetter}
                  </div>
                )}

                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                  {exp.company}
                </h3>
                <h4 className="text-md font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                  {exp.role}
                </h4>
                <span className="text-xs font-bold px-3 py-1 rounded bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 mb-6">
                  {exp.date}
                </span>

                <div className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 text-left w-full">
                  <p>{exp.desc}</p>
                  {exp.descBullets && exp.descBullets.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2 list-disc list-inside">
                      {exp.descBullets.map((bullet, idx) => (
                        <li key={idx} className="marker:text-cyan-500">{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
