"use client";

import React from "react";
import { projects } from "../portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header (Argon style icon and title) */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-14 h-14 rounded-full bg-white dark:bg-zinc-800 text-cyan-500 shadow-md flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400">
            Projects
          </h2>
        </div>

        {/* 2-Column grid matching the template */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-md hover:shadow-lg rounded-lg p-8 transition-all duration-300 hover:-translate-y-0.5"
            >
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {project.name}
              </h3>
              
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6 flex-1">
                {project.desc}
              </p>

              {/* Action Buttons styled like the template */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#24292e] text-white hover:bg-black transition-colors shadow-sm"
                    aria-label="Github"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 h-10 rounded bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
