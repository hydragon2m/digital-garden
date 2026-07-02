"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useLanguage } from "../app/LanguageContext";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { language, setLanguage, t, content } = useLanguage();

  useEffect(() => {
    const sectionIds = ["top", "about", "experience", "things-built", "projects", "education", "contact"];
    let ticking = false;

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));

      if (sections.length === 0) return;

      const readingLine = window.scrollY + window.innerHeight * 0.38;
      const current = sections.find((section, index) => {
        const next = sections[index + 1];
        const start = section.offsetTop;
        const end = next ? next.offsetTop : document.documentElement.scrollHeight;

        return readingLine >= start && readingLine < end;
      });

      if (current) {
        setActiveSection(current.id);

        const nextHash = current.id === "top" ? "" : `#${current.id}`;
        if (window.location.hash !== nextHash) {
          window.history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}${nextHash}`
          );
        }
      }
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;

    const navOffset = 72;
    const top = id === "top" ? 0 : target.getBoundingClientRect().top + window.scrollY - navOffset;
    const nextHash = id === "top" ? "" : href;

    setIsOpen(false);
    setActiveSection(id);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}${nextHash}`
    );
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: t("navAbout"), href: "#about" },
    { name: t("navExperience"), href: "#experience" },
    { name: t("navBuilt"), href: "#things-built" },
    { name: t("navProjects"), href: "#projects" },
    { name: t("navEducation"), href: "#education" },
    { name: t("navContact"), href: "#contact" },
  ];

  const languageToggle = (
    <button
      onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
      className="group flex items-center justify-center rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 px-3 py-1.5 text-xs font-bold text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm min-w-[42px]"
      aria-label={t("languageToggle")}
    >
      <span className="tracking-wider">{language.toUpperCase()}</span>
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-lg border-b border-zinc-200/50 dark:border-zinc-800/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          onClick={(event) => scrollToSection(event, "#top")}
          className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white hover:opacity-80 transition-opacity"
        >
          {content.greetings.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => scrollToSection(event, link.href)}
              className={`group flex flex-col items-center gap-2 text-sm font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <span>{link.name}</span>
              <span
                className={`h-0.5 w-full origin-left rounded-full transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "scale-x-100 bg-zinc-900 dark:bg-white"
                    : "scale-x-0 bg-zinc-400/40 group-hover:scale-x-100"
                }`}
              />
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:scale-110 active:scale-95 transition-all"
            aria-label="Toggle Theme"
            title={t("themeToggle")}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {languageToggle}
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            aria-label="Toggle Theme"
            title={t("themeToggle")}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {languageToggle}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-800 dark:text-zinc-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex flex-col gap-4 animate-fade-in shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => scrollToSection(event, link.href)}
              className={`flex flex-col gap-1 text-base font-medium py-2 ${
                activeSection === link.href.replace("#", "")
                  ? "text-zinc-950 dark:text-white"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <span>{link.name}</span>
              <span
                className={`h-0.5 w-16 origin-left rounded-full transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "scale-x-100 bg-zinc-900 dark:bg-white"
                    : "scale-x-0 bg-zinc-400/40"
                }`}
              />
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
