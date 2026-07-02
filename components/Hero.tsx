"use client";

import React, { useState, useEffect, useRef } from "react";
import { socialLinks } from "../portfolio";
import Image from "next/image";
import { useLanguage } from "../app/LanguageContext";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const { content, t, language } = useLanguage();
  const { greetings } = content;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Typewriter effect configuration
  const words = language === "vi"
    ? ["Backend Systems", "SSO & Bảo mật", "Kiến trúc Microservices", "Tối ưu hóa Database"]
    : ["Backend Systems", "SSO & Security", "Microservices Architecture", "Database Optimization"];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    // Reset state if language changes
    setCurrentWordIndex(0);
    setCurrentText("");
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const activeWord = words[currentWordIndex];
    if (!activeWord) return;

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);

      if (currentText === activeWord) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800); // Wait before starting deletion
      }
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, language]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section 
      id="top" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[100svh] bg-white dark:bg-zinc-950 bg-grid-lines flex items-center justify-center py-20 scroll-mt-20 md:scroll-mt-24 overflow-hidden"
    >
      
      {/* Grid Pattern Fade Mask & Ambient Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mask to fade out the grid pattern at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-zinc-950 z-10" />
        
        {/* Interactive Mouse Spotlight Glow */}
        <div 
          className="absolute inset-0 transition-opacity duration-500 z-0 hidden md:block"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
          }}
        />
        
        {/* Ambient background glow circles */}
        <div className="absolute top-[15%] left-[10%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-[80px] md:blur-[130px] animate-pulse z-0" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[15%] right-[10%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full bg-violet-500/10 dark:bg-violet-500/5 blur-[80px] md:blur-[130px] animate-pulse z-0" style={{ animationDuration: '12s' }} />
      </div>

      <ScrollReveal className="relative z-20 max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        
        {/* Avatar */}
        <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 shadow-md transition-transform duration-500 hover:scale-105">
          <Image
            src="/avatar.png"
            alt={greetings.name}
            width={192}
            height={192}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
            {greetings.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 min-h-[32px]">
            <span>Software Engineer · </span>
            <span className="text-cyan-600 dark:text-cyan-400 border-r-2 border-cyan-600 dark:border-cyan-400 pr-1 animate-shimmer">
              {currentText}
            </span>
          </p>
        </div>

        {/* Bio */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
          {t("heroDescription")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <a
            href={socialLinks.gitlab || socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-all duration-300 font-medium text-sm hover:shadow-lg active:scale-95"
          >
            GitLab
          </a>
          <a
            href="#experience"
            className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-all duration-300 font-medium text-sm active:scale-95"
          >
            {t("heroExperience")}
          </a>
          {greetings.resumeLink ? (
            <a
              href={greetings.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-all duration-300 font-medium text-sm active:scale-95"
            >
              {t("heroResume")}
            </a>
          ) : null}
        </div>
      </ScrollReveal>
    </section>
  );
}
