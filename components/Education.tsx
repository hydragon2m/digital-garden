"use client";

import React from "react";
import { educationInfo } from "../portfolio";

export default function Education() {
  return (
    <section id="education" className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 pt-20 pb-36 overflow-hidden my-12">
      {/* Background Bubble Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute w-24 h-24 rounded-full bg-white/10 left-[5%] top-[10%] blur-[1px]" />
        <span className="absolute w-32 h-32 rounded-full bg-white/5 left-[75%] top-[55%] blur-[2px]" />
        <span className="absolute w-16 h-16 rounded-full bg-white/12 left-[45%] top-[30%] blur-[1px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header with brief icon and title */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-full bg-white text-cyan-600 shadow-md flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationInfo.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl rounded-lg p-8 border-0 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">
                {edu.schoolName}
              </h3>
              <h4 className="text-md font-bold text-zinc-800 dark:text-zinc-200 mb-4">
                {edu.subHeader}
              </h4>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">
                  {edu.duration}
                </span>
                {edu.grade && (
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                    {edu.grade}
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-4">
                {edu.desc}
              </p>

              {edu.descBullets && edu.descBullets.length > 0 && (
                <ul className="flex flex-col gap-2 list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400">
                  {edu.descBullets.map((bullet, idx) => (
                    <li key={idx} className="marker:text-cyan-500">{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skewed separator at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-[90px] pointer-events-none transform translate-z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
          className="w-full h-full fill-white dark:fill-zinc-950"
        >
          <polygon points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  );
}
