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
  const { language, setLanguage, t, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("navAbout"), href: "#" },
    { name: t("navExperience"), href: "#experience" },
    { name: t("navBuilt"), href: "#things-built" },
    { name: t("navProjects"), href: "#projects" },
  //  { name: "Đánh giá", href: "#feedbacks" },
    { name: t("navContact"), href: "#contact" },
  ];

  const languageToggle = (
    <div
      className="flex items-center gap-1 rounded-full bg-zinc-100 dark:bg-zinc-800 p-1 text-xs font-bold text-zinc-700 dark:text-zinc-300"
      aria-label={t("languageToggle")}
    >
      <Languages size={16} className="ml-1" />
      {(["vi", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`min-w-8 rounded-full px-2 py-1 transition-colors ${
            language === lang
              ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
              : "hover:bg-zinc-200 dark:hover:bg-zinc-700"
          }`}
          aria-pressed={language === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
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
          href="#"
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
              className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {link.name}
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
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
