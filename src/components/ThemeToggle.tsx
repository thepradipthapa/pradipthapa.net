"use client";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // import icons

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <button
      className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors 
                 hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={() => setIsDarkMode((prev) => !prev)}
    >
      {isDarkMode ? (
        <>
          <FaSun className="text-yellow-400" />
        </>
      ) : (
        <>
          <FaMoon className="text-blue-500" />
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
