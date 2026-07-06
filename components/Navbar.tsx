"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useLanguage } from "../app/LanguageContext";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { language, toggleLanguage, t, content } = useLanguage();

  useEffect(() => {
    const sectionIds = ["top", "about", "experience", "things-built", "projects", "education", "contact"];
    let ticking = false;

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el));

      if (sections.length === 0) return;

      const isAtBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;
      if (isAtBottom) {
        const current = sections[sections.length - 1];
        setActiveSection(current.id);
        const nextHash = `#${current.id}`;
        if (window.location.hash !== nextHash) {
          window.history.replaceState(
            null,
            "",
            `${window.location.pathname}${window.location.search}${nextHash}`
          );
        }
        return;
      }

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
          window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${nextHash}`);
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (!target) return;
    const nextHash = id === "top" ? "" : href;
    setIsOpen(false);
    setActiveSection(id);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}${nextHash}`);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, "#top")}
          className="text-sm font-semibold text-zinc-900 dark:text-white tracking-tight hover:opacity-60 transition-opacity"
        >
          {content.greetings.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-xs font-medium tracking-wide uppercase transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Divider */}
          <span className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

          {/* Theme */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Language */}
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors tracking-widest"
            aria-label={t("languageToggle")}
          >
            {language.toUpperCase()}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={toggleLanguage}
            className="text-xs font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors tracking-widest"
          >
            {language.toUpperCase()}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-700 dark:text-zinc-300"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-zinc-900 dark:text-white"
                  : "text-zinc-400 dark:text-zinc-500"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
