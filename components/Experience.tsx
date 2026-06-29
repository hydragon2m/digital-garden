"use client";

import React from "react";
import { experience } from "../portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-12">
          Experience
        </h2>

        <div className="space-y-6">
          {experience.map((exp, index) => {
            return (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 rounded-lg p-8 border border-zinc-200 dark:border-zinc-800 transition-all duration-300"
              >
                {/* Header Row: Company Info + Date */}
                <div className="mb-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                  {/* Company Info */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
                    {exp.company}
                  </h3>
                  <h4 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2">
                    {exp.role}
                  </h4>
                  <span className="text-xs text-zinc-500 dark:text-zinc-500">
                    {exp.date}
                  </span>
                </div>

                {/* Three-Column Layout: Built + Scale + Stack */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* BUILT Column */}
                  <div className="flex flex-col gap-3">
                    <h5 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">Built</h5>
                    <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {exp.descBullets && exp.descBullets.length > 0 ? (
                        exp.descBullets.map((bullet, idx) => (
                          <p key={idx} className="leading-relaxed">• {bullet}</p>
                        ))
                      ) : (
                        <p className="leading-relaxed">{exp.desc}</p>
                      )}
                    </div>
                  </div>

                  {/* SCALE Column */}
                  <div className="flex flex-col gap-3">
                    <h5 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">Scale</h5>
                    <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {exp.company === "Beatcolor" ? (
                        <>
                          <p className="leading-relaxed">Processing millions of images/videos</p>
                          <p className="leading-relaxed">99.95% uptime across 20+ services</p>
                          <p className="leading-relaxed">1M+ requests daily</p>
                        </>
                      ) : exp.company === "LifeteX" ? (
                        <>
                          <p className="leading-relaxed">Enterprise systems for government & corporate</p>
                          <p className="leading-relaxed">Millions of daily transactions</p>
                          <p className="leading-relaxed">Multi-database optimization</p>
                        </>
                      ) : (
                        <p className="leading-relaxed">Game development platform</p>
                      )}
                    </div>
                  </div>

                  {/* STACK Column */}
                  <div className="flex flex-col gap-3">
                    <h5 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.company === "Beatcolor" ? (
                        <>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">NestJS</span>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">gRPC</span>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">RabbitMQ</span>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">PostgreSQL</span>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">Docker</span>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">CQRS</span>
                        </>
                      ) : exp.company === "LifeteX" ? (
                        <>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">Node.js</span>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">MySQL</span>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">PostgreSQL</span>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">MongoDB</span>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">Redis</span>
                          <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">Python</span>
                        </>
                      ) : (
                        <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-300 dark:border-zinc-700">Game Dev</span>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
