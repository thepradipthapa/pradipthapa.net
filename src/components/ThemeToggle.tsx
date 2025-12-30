"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme on first render
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Update theme whenever isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setIsDarkMode(prev => !prev)}
      className="flex items-center gap-2 px-2 py-1 rounded-full transition-colors
                 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      {isDarkMode ? (
        <>
          <FaSun className="text-yellow-400 w-5 h-5 transition-transform duration-300" />
          {/* <span className="text-sm text-gray-200">Day</span> */}
        </>
      ) : (
        <>
          <FaMoon className="text-blue-500 w-5 h-5 transition-transform duration-300" />
          {/* <span className="text-sm  text-gray-800">Night</span> */}
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
