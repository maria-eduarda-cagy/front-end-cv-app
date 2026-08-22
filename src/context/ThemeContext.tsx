import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type ThemeMode } from "./theme-context-value";

const STORAGE_KEY = "theme-mode";

function getStoredTheme(): ThemeMode {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  // No stored preference yet? Fall back to the OS/browser preference. The
  // inline script in index.html already applied this same logic to
  // <html data-theme> before this mounts, so we just mirror it here to
  // avoid a mismatched first render.
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
