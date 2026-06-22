"use client";

import React from "react";
import { greetings, socialLinks } from "../portfolio";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 pt-36 pb-48 overflow-hidden">
      {/* Background Bubble Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute w-24 h-24 rounded-full bg-white/10 left-[8%] top-[25%] blur-[1px] animate-pulse" />
        <span className="absolute w-32 h-32 rounded-full bg-white/5 left-[65%] top-[15%] blur-[2px]" />
        <span className="absolute w-40 h-40 rounded-full bg-white/8 left-[45%] top-[55%] blur-[3px]" />
        <span className="absolute w-16 h-16 rounded-full bg-white/12 left-[85%] top-[40%] blur-[1px]" />
        <span className="absolute w-28 h-28 rounded-full bg-white/5 left-[20%] top-[70%] blur-[2px]" />
        <span className="absolute w-20 h-20 rounded-full bg-white/10 left-[90%] top-[75%] blur-[1px]" />
        <span className="absolute w-36 h-36 rounded-full bg-white/7 left-[3%] top-[50%] blur-[3px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text & Actions */}
          <div className="text-left text-white flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              {greetings.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
              {greetings.description}
            </p>

            {/* Social Links matching template style (Circle buttons with specific colors) */}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              {socialLinks.email && (
                <a
                  href={socialLinks.email}
                  className="w-10 h-10 rounded-full bg-white text-red-500 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#24292e] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
            </div>

            {greetings.resumeLink && (
              <div className="mt-4">
                <a
                  href={greetings.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white hover:bg-zinc-100 text-zinc-900 font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  See My Resume
                </a>
              </div>
            )}
          </div>

          {/* Right: Coding Illustration (SVG Vector Animation) */}
          <div className="flex justify-center items-center select-none drop-shadow-2xl">
            <svg viewBox="0 0 500 350" className="w-full max-w-[450px] h-auto text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Workspace background elements */}
              <rect x="50" y="260" width="400" height="8" rx="4" fill="#ffffff" fillOpacity="0.15" />
              <rect x="100" y="70" width="300" height="190" rx="12" fill="#1e293b" fillOpacity="0.5" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.2" />
              
              {/* Monitor screen details */}
              <rect x="110" y="80" width="280" height="150" rx="6" fill="#0f172a" />
              <rect x="225" y="260" width="50" height="30" fill="#ffffff" fillOpacity="0.2" />
              <path d="M200 290h100l15 10H185l15-10z" fill="#ffffff" fillOpacity="0.2" />

              {/* Code text lines */}
              <rect x="130" y="100" width="80" height="8" rx="4" fill="#38bdf8" />
              <rect x="220" y="100" width="40" height="8" rx="4" fill="#a855f7" />
              <rect x="130" y="115" width="120" height="8" rx="4" fill="#4ade80" />
              <rect x="130" y="130" width="50" height="8" rx="4" fill="#fb7185" />
              <rect x="190" y="130" width="70" height="8" rx="4" fill="#38bdf8" />
              
              <rect x="150" y="150" width="90" height="8" rx="4" fill="#fbbf24" />
              <rect x="250" y="150" width="60" height="8" rx="4" fill="#38bdf8" />
              <rect x="150" y="165" width="110" height="8" rx="4" fill="#4ade80" />
              <rect x="150" y="180" width="40" height="8" rx="4" fill="#a855f7" />

              {/* Glowing decorative lights/dots */}
              <circle cx="120" cy="90" r="4" fill="#ef4444" />
              <circle cx="130" cy="90" r="4" fill="#eab308" />
              <circle cx="140" cy="90" r="4" fill="#22c55e" />

              {/* Floating gear and tech icons */}
              <g className="animate-spin" style={{ transformOrigin: "420px 100px", animationDuration: "12s" }}>
                <path d="M420 85a15 15 0 100 30 15 15 0 000-30zm0 5a10 10 0 110 20 10 10 0 010-20z" fill="#38bdf8" fillOpacity="0.4" />
                <path d="M420 80v5m0 30v5m-20-20h5m30 0h5" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.4" />
              </g>
              <g className="animate-pulse">
                <circle cx="70" cy="120" r="8" fill="#a855f7" fillOpacity="0.4" />
                <path d="M66 120h8M70 116v8" stroke="#ffffff" strokeWidth="2" />
              </g>
              <g className="animate-bounce" style={{ animationDuration: "3s" }}>
                <circle cx="430" cy="200" r="12" fill="#4ade80" fillOpacity="0.3" />
                <path d="M426 200l3 3 5-5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Argon skewed diagonal separator at the bottom */}
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
