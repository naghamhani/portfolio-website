"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";

const ThemeCtx = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Sync initial state from the class the pre-paint script already applied.
  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("theme", theme); } catch (e) {}
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  const set = useCallback((t) => setTheme(t), []);

  return (
    <ThemeCtx.Provider value={{ theme, toggle, set, isDark: theme === "dark" }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
