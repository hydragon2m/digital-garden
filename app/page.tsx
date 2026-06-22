"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Console from "../components/Console";
import ArchitectureVisualizer from "../components/ArchitectureVisualizer";
import AiAssistant from "../components/AiAssistant";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Feedbacks from "../components/Feedbacks";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GraphView from "../components/GraphView";
import GardenExplorer from "../components/GardenExplorer";
import NoteReader from "../components/NoteReader";
import { greetings, socialLinks, skillCategories } from "../portfolio";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  if (!mounted) {
    return <div className="min-h-screen bg-zinc-950" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="flex-1 w-full pt-28 pb-16 flex flex-col">
        {/* Dashboard Grid Container */}
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col gap-8 mb-16">
        
        {/* Row 1: Greetings & Console */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Box 1: Greetings - col-span 8 */}
          <div className="md:col-span-8 flex flex-col justify-between p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-3xl" />
            
            <div className="relative z-10 flex flex-col gap-6">
              <span className="inline-flex items-center gap-1.5 self-start px-3 py-1 text-xs font-bold tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 rounded-full animate-pulse">
                🌱 DIGITAL GARDEN ACTIVE
              </span>
              <div>
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none mb-2 bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                  {greetings.title}
                </h1>
                <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 tracking-wide uppercase">
                  {greetings.subtitle}
                </p>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
                {greetings.description}
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-4 mt-8">
              {greetings.resumeLink && (
                <a
                  href={greetings.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 font-bold text-xs shadow-md transition-colors"
                >
                  Download CV
                </a>
              )}
              <div className="flex gap-4">
                {socialLinks.github && (
                  <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" aria-label="GitLab">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                  </a>
                )}
                {socialLinks.linkedin && (
                  <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Box 2: CLI Console Terminal - col-span 4 */}
          <div className="md:col-span-4 h-full min-h-[320px]">
            <Console />
          </div>

        </div>

        {/* Row 2: Digital Garden Hub (Graph & Explorer) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Graph View - col-span 7 */}
          <div className="md:col-span-7">
            <GraphView onSelectNote={setActiveNoteId} />
          </div>

          {/* Garden Explorer - col-span 5 */}
          <div className="md:col-span-5">
            <GardenExplorer onSelectNote={setActiveNoteId} />
          </div>
        </div>

        {/* Row 3: Architecture & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Box 3: System Design visualizer - col-span 6 */}
          <div className="md:col-span-6">
            <ArchitectureVisualizer />
          </div>

          {/* Box 4: Technical Expertise - col-span 6 */}
          <div className="md:col-span-6 flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
            <div className="mb-4 text-left">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                Technical Expertise
              </h3>
              <p className="text-xs text-zinc-400">
                Phân loại kỹ năng đa chiều theo hệ thống lớn của tôi.
              </p>
            </div>
            
            <div className="flex flex-col gap-3.5 pr-1">
              {skillCategories.map((cat, index) => (
                <div key={index} className="flex flex-col gap-1 text-left border-l-2 border-cyan-500 pl-3">
                  <h4 className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {cat.skills.map((s, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/40 dark:border-zinc-700/40"
                        title={s.description}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* Other Sections */}
        <Experience />
        <Education />
        <Projects />
        <Feedbacks />
        <Contact />

      </main>

      <Footer />

      {/* Slide-over Note Reader modal */}
      {activeNoteId && (
        <NoteReader noteId={activeNoteId} onClose={() => setActiveNoteId(null)} onSelectNote={setActiveNoteId} />
      )}

      {/* Assistant Widget */}
      <AiAssistant />
    </div>
  );
}
