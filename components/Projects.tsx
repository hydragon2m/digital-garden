"use client";

import React from "react";
import { projects } from "../portfolio";

// SSO Architecture Diagram Component
const SSOArchitectureDiagram = () => (
  <svg viewBox="0 0 600 220" className="w-full h-auto">
    <defs>
      <marker id="arrowSSO" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
      </marker>
    </defs>
    
    {/* Client Apps */}
    <rect x="20" y="20" width="70" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="55" y="50" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">App 1</text>
    
    <rect x="100" y="20" width="70" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="135" y="50" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">App 2</text>
    
    <rect x="180" y="20" width="70" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2" rx="6" />
    <text x="215" y="50" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">App 3</text>
    
    {/* Arrows to SSO */}
    <line x1="55" y1="70" x2="130" y2="110" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrowSSO)" />
    <line x1="135" y1="70" x2="135" y2="110" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrowSSO)" />
    <line x1="215" y1="70" x2="140" y2="110" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrowSSO)" />
    
    {/* SSO Gateway Load Balancer */}
    <rect x="90" y="110" width="90" height="50" fill="#18181b" stroke="#06b6d4" strokeWidth="2.5" rx="6" />
    <text x="135" y="135" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">SSO Identity</text>
    <text x="135" y="148" textAnchor="middle" fill="#06b6d4" fontSize="8">(NestJS Cluster)</text>
    
    {/* Arrow to databases */}
    <line x1="180" y1="135" x2="240" y2="75" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#arrowSSO)" />
    <line x1="180" y1="135" x2="280" y2="135" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrowSSO)" />
    <line x1="180" y1="135" x2="240" y2="180" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrowSSO)" />
    
    {/* Database Cluster */}
    <rect x="240" y="50" width="70" height="50" fill="#18181b" stroke="#3b82f6" strokeWidth="2" rx="6" />
    <text x="275" y="75" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">MySQL</text>
    <text x="275" y="88" textAnchor="middle" fill="#a1a1aa" fontSize="7">(Master)</text>
    
    {/* Redis Cache */}
    <rect x="330" y="110" width="70" height="50" fill="#18181b" stroke="#10b981" strokeWidth="2" rx="6" />
    <text x="365" y="135" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Redis</text>
    <text x="365" y="148" textAnchor="middle" fill="#10b981" fontSize="7">(Session)</text>
    
    {/* Message Broker */}
    <rect x="240" y="170" width="70" height="50" fill="#18181b" stroke="#f59e0b" strokeWidth="2" rx="6" />
    <text x="275" y="195" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">RabbitMQ</text>
    <text x="275" y="208" textAnchor="middle" fill="#f59e0b" fontSize="7">(Audit Log)</text>
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
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

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-md hover:shadow-lg rounded-xl p-8 transition-all duration-300"
            >
              {/* Title & Stars */}
              <div className="flex items-start justify-between mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  {project.stars && (
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">{project.stars} GitLab Stars</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6">
                {project.desc}
              </p>

              {/* Two-Column Layout: Left (Details) + Right (Diagram) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Left Column: Metrics & Highlights */}
                <div className="space-y-6">
                  {/* Metrics */}
                  {project.metrics && (
                    <div>
                      <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest mb-3">
                        📊 Key Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project.metrics.users && (
                          <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200/50 dark:border-blue-800/50">
                            <p className="text-[10px] text-zinc-600 dark:text-zinc-400 uppercase font-bold mb-1">Users</p>
                            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{project.metrics.users}</p>
                          </div>
                        )}
                        {project.metrics.qps && (
                          <div className="p-3 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200/50 dark:border-cyan-800/50">
                            <p className="text-[10px] text-zinc-600 dark:text-zinc-400 uppercase font-bold mb-1">QPS</p>
                            <p className="text-lg font-bold text-cyan-600 dark:text-cyan-400">{project.metrics.qps}</p>
                          </div>
                        )}
                        {project.metrics.uptime && (
                          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200/50 dark:border-green-800/50">
                            <p className="text-[10px] text-zinc-600 dark:text-zinc-400 uppercase font-bold mb-1">Uptime</p>
                            <p className="text-lg font-bold text-green-600 dark:text-green-400">{project.metrics.uptime}</p>
                          </div>
                        )}
                        {project.metrics.latency && (
                          <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200/50 dark:border-purple-800/50">
                            <p className="text-[10px] text-zinc-600 dark:text-zinc-400 uppercase font-bold mb-1">Latency</p>
                            <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{project.metrics.latency}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Implementation Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest mb-3">
                        ✓ Implementation Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2">
                            <span className="text-cyan-500 font-bold flex-shrink-0">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column: Architecture Diagram */}
                {project.architecture && (
                  <div className="flex flex-col">
                    <h4 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-widest mb-3">
                      🏗️ System Architecture
                    </h4>
                    <div className="bg-zinc-900 rounded-lg p-6 flex-1 flex items-center justify-center border border-zinc-800">
                      <SSOArchitectureDiagram />
                    </div>
                  </div>
                )}
              </div>

              {/* Architecture Description */}
              {project.architecture && (
                <div className="mb-6 p-4 rounded-lg bg-zinc-100/50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-zinc-700/50">
                  <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    {project.architecture.description}
                  </p>
                </div>
              )}

              {/* Tech Stack Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-mono border border-zinc-200/50 dark:border-zinc-700/50 hover:border-cyan-500/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
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
