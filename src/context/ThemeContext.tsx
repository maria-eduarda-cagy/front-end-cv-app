import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type ThemeMode } from "./theme-context-value";

const STORAGE_KEY = "theme-mode";

function getStoredTheme(): ThemeMode {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "dark" ? "dark" : "light";
}

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  // Light is the default; the inline script in index.html already applied
  // the stored/light theme to <html data-theme> before this mounts, so we
  // just mirror that value here to avoid a mismatched first render.
  const [mode, setMode] = useState<ThemeMode>(getStoredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((current) => (current === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
