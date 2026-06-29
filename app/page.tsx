"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AiAssistant from "../components/AiAssistant";
import Hero from "../components/Hero";
import LandingIntro from "../components/LandingIntro";
import Experience from "../components/Experience";
import FeaturedProject from "../components/FeaturedProject";
import ThingsIBuilt from "../components/ThingsIBuilt";
import ArchitecturePlayground from "../components/ArchitecturePlayground";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Feedbacks from "../components/Feedbacks";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

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
      
      <main className="flex-1 w-full">
        {/* Clean Landing Page Flow */}
        <Hero />
        <LandingIntro />
        <Experience />
        <FeaturedProject />
        <ThingsIBuilt />
        <ArchitecturePlayground />
        <Education />
        <Projects />
        <Feedbacks />
        <Contact />
      </main>

      <Footer />

      {/* Assistant Widget */}
      <AiAssistant />
    </div>
  );
}
