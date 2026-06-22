"use client";

import React from "react";
import { experience } from "../portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-50 dark:bg-zinc-900/10 border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
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

        <div className="space-y-6">
          {experience.map((exp, index) => {
            const placeholderLetter = exp.company ? exp.company.charAt(0) : "W";

            return (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg rounded-xl p-8 border border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-300 hover:border-cyan-500/30 dark:hover:border-cyan-500/30"
              >
                {/* Header Row: Logo + Company Info + Date */}
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-zinc-200/50 dark:border-zinc-800/50">
                  {/* Logo */}
                  {exp.companyLogo ? (
                    <img
                      src={exp.companyLogo}
                      alt={exp.company}
                      className="w-16 h-16 rounded-lg object-cover shadow-sm flex-shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-500 text-white flex items-center justify-center text-2xl font-black flex-shrink-0 uppercase">
                      {placeholderLetter}
                    </div>
                  )}

                  {/* Company Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                      {exp.company}
                    </h3>
                    <h4 className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2 uppercase tracking-wide">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {exp.date}
                    </span>
                  </div>
                </div>

                {/* Three-Column Layout: Built + Scale + Stack */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* BUILT Column */}
                  <div className="flex flex-col gap-3">
                    <h5 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                      <span className="text-cyan-500">📦</span> BUILT
                    </h5>
                    <div className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                      {exp.descBullets && exp.descBullets.length > 0 ? (
                        exp.descBullets.map((bullet, idx) => (
                          <p key={idx} className="leading-relaxed">{bullet}</p>
                        ))
                      ) : (
                        <p className="leading-relaxed">{exp.desc}</p>
                      )}
                    </div>
                  </div>

                  {/* SCALE Column */}
                  <div className="flex flex-col gap-3">
                    <h5 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                      <span className="text-blue-500">📊</span> SCALE
                    </h5>
                    <div className="space-y-2 text-sm">
                      {exp.company === "Beatcolor" ? (
                        <>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Processing <span className="font-bold text-white">millions</span> of images/videos
                          </p>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            <span className="font-bold text-cyan-400">99.95%</span> uptime across <span className="font-bold text-white">20+</span> services
                          </p>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            <span className="font-bold text-blue-400">1M+</span> requests daily
                          </p>
                        </>
                      ) : exp.company === "LifeteX" ? (
                        <>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            <span className="font-bold text-white">Enterprise</span> systems for government & corporate
                          </p>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Millions of <span className="font-bold text-cyan-400">daily transactions</span>
                          </p>
                          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            <span className="font-bold text-blue-400">Multi-database</span> optimization
                          </p>
                        </>
                      ) : (
                        <p className="text-zinc-600 dark:text-zinc-400">Game development platform</p>
                      )}
                    </div>
                  </div>

                  {/* STACK Column */}
                  <div className="flex flex-col gap-3">
                    <h5 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest flex items-center gap-2">
                      <span className="text-amber-500">🔧</span> STACK
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.company === "Beatcolor" ? (
                        <>
                          <span className="px-2.5 py-1 bg-blue-900/30 text-blue-300 rounded text-xs font-mono border border-blue-800/50">NestJS</span>
                          <span className="px-2.5 py-1 bg-emerald-900/30 text-emerald-300 rounded text-xs font-mono border border-emerald-800/50">gRPC</span>
                          <span className="px-2.5 py-1 bg-orange-900/30 text-orange-300 rounded text-xs font-mono border border-orange-800/50">RabbitMQ</span>
                          <span className="px-2.5 py-1 bg-cyan-900/30 text-cyan-300 rounded text-xs font-mono border border-cyan-800/50">PostgreSQL</span>
                          <span className="px-2.5 py-1 bg-purple-900/30 text-purple-300 rounded text-xs font-mono border border-purple-800/50">Docker</span>
                          <span className="px-2.5 py-1 bg-pink-900/30 text-pink-300 rounded text-xs font-mono border border-pink-800/50">CQRS</span>
                        </>
                      ) : exp.company === "LifeteX" ? (
                        <>
                          <span className="px-2.5 py-1 bg-blue-900/30 text-blue-300 rounded text-xs font-mono border border-blue-800/50">Node.js</span>
                          <span className="px-2.5 py-1 bg-green-900/30 text-green-300 rounded text-xs font-mono border border-green-800/50">MySQL</span>
                          <span className="px-2.5 py-1 bg-yellow-900/30 text-yellow-300 rounded text-xs font-mono border border-yellow-800/50">PostgreSQL</span>
                          <span className="px-2.5 py-1 bg-red-900/30 text-red-300 rounded text-xs font-mono border border-red-800/50">MongoDB</span>
                          <span className="px-2.5 py-1 bg-cyan-900/30 text-cyan-300 rounded text-xs font-mono border border-cyan-800/50">Redis</span>
                          <span className="px-2.5 py-1 bg-purple-900/30 text-purple-300 rounded text-xs font-mono border border-purple-800/50">Python</span>
                        </>
                      ) : (
                        <span className="px-2.5 py-1 bg-violet-900/30 text-violet-300 rounded text-xs font-mono border border-violet-800/50">Game Dev</span>
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
