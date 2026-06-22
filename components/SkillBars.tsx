"use client";

import React from "react";

export default function SkillBars() {
  const skillsData = [
    { Stack: "System Architecture (Microservices, DDD, Event-driven)", progressPercentage: "95" },
    { Stack: "Backend Engineering (Go, NestJS, gRPC, PostgreSQL)", progressPercentage: "90" },
    { Stack: "Cloud & DevOps (AWS, Kubernetes, Docker, Terraform)", progressPercentage: "85" },
    { Stack: "AI Integrations (RAG, Vector DB, Agent Frameworks)", progressPercentage: "80" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Progress bars */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-extrabold text-zinc-900 dark:text-white mb-2 text-center lg:text-left">
              Năng lực chuyên môn
            </h2>
            
            <div className="flex flex-col gap-6">
              {skillsData.map((skill, index) => (
                <div key={index} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-sm font-bold text-zinc-700 dark:text-zinc-300">
                    <span>{skill.Stack}</span>
                    <span>{skill.progressPercentage}%</span>
                  </div>
                  {/* Progress bar container */}
                  <div className="w-full h-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.progressPercentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Building SVG Vector Illustration */}
          <div className="flex justify-center select-none drop-shadow-md">
            <svg viewBox="0 0 500 350" className="w-full max-w-[420px] h-auto text-cyan-500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Construction backdrop details */}
              <circle cx="250" cy="175" r="130" fill="#06b6d4" fillOpacity="0.05" />
              
              {/* Central Gear assembly */}
              <g className="animate-spin" style={{ transformOrigin: "250px 175px", animationDuration: "20s" }}>
                <circle cx="250" cy="175" r="45" stroke="#06b6d4" strokeWidth="6" strokeOpacity="0.4" />
                <path d="M250 120v20m0 70v20m-45-45h20m70 0h20m-15-35l-15 15m50 50l-15 15m-50 0l-15-15m50-50l-15-15" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.4" />
              </g>

              {/* Smaller gear */}
              <g className="animate-spin" style={{ transformOrigin: "320px 220px", animationDuration: "10s", animationDirection: "reverse" }}>
                <circle cx="320" cy="220" r="25" stroke="#818cf8" strokeWidth="4" strokeOpacity="0.4" />
                <path d="M320 190v10m0 40v10m-25-25h10m30 0h10" stroke="#818cf8" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.4" />
              </g>

              {/* Graphical nodes/charts */}
              <rect x="120" y="80" width="70" height="40" rx="8" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
              <circle cx="155" cy="100" r="10" fill="#06b6d4" fillOpacity="0.3" />
              <path d="M151 100l3 3 5-5" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />

              <rect x="310" y="70" width="80" height="50" rx="8" fill="#1e293b" stroke="#818cf8" strokeWidth="2" />
              <rect x="325" y="85" width="20" height="20" rx="2" fill="#818cf8" fillOpacity="0.3" />
              <rect x="355" y="90" width="25" height="4" rx="2" fill="#e2e8f0" />
              <rect x="355" y="98" width="15" height="4" rx="2" fill="#94a3b8" />

              <rect x="100" y="220" width="90" height="60" rx="10" fill="#1e293b" stroke="#22c55e" strokeWidth="2" />
              <path d="M115 260l20-20 15 15 25-25" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="175" cy="230" r="4" fill="#22c55e" />

              {/* Connector wires */}
              <path d="M190 100h50M310 95h-40M190 250h50" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
