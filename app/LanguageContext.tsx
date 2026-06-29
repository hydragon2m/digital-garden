"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { localizedPortfolio, type Language, uiTranslations } from "../portfolio";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof uiTranslations.vi) => string;
  content: (typeof localizedPortfolio)[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang === "vi" || savedLang === "en") {
      setTimeout(() => {
        setLanguageState(savedLang);
      }, 0);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: keyof typeof uiTranslations.vi): string => {
    return uiTranslations[language][key] || uiTranslations["vi"][key] || String(key);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, content: localizedPortfolio[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
