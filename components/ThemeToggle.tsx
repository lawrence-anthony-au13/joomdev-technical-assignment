"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const [isChanging, setIsChanging] = React.useState(false);

  // Load theme from localStorage or system preference
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      // Default to system preference if nothing saved
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  // Update theme when changed
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    setIsChanging(true);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    setTimeout(() => setIsChanging(false), 300); // Match transition duration
  };

  return (
    <button
      onClick={handleThemeChange}
      className={cn(
        "relative w-6 h-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
        isChanging && "pointer-events-none",
        className
      )}
      aria-label="Toggle theme"
      disabled={isChanging}
    >
      <Sun className="absolute inset-0 h-full w-full transition-all duration-300 opacity-100 rotate-0 dark:opacity-0 dark:-rotate-90" />
      <Moon className="absolute inset-0 h-full w-full transition-all duration-300 opacity-0 rotate-90 dark:opacity-100 dark:rotate-0" />
    </button>
  );
}
