"use client";

import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [preferredLanguage, setPreferredLanguage] = useState("en");

  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "pt", name: "Português" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "ja", name: "日本語" },
  ];

  useEffect(() => {
    const storedLang = localStorage.getItem("preferredLanguage");
    if (storedLang) setPreferredLanguage(storedLang);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    localStorage.setItem("preferredLanguage", langCode);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      >
        <Globe className="h-4 w-4" />
        <span>
          {languages.find((lang) => lang.code === preferredLanguage)?.name ||
            "English"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-40 bg-white dark:bg-gray-950 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 ${
                preferredLanguage === lang.code
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
