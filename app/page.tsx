"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import ThingsIBuilt from "../components/ThingsIBuilt";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { LanguageProvider } from "./LanguageContext";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    let isDark = true;
    if (savedTheme) {
      isDark = savedTheme === "dark";
    } else {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    
    // Wrap state updates in a timeout to avoid synchronous setState inside useEffect warning
    const timer = setTimeout(() => {
      setDarkMode(isDark);
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
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
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="flex-1 w-full">
          {/* Landing Page: Personal First, Skills Last */}
          <Hero />
          <Experience />
          <ThingsIBuilt />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
