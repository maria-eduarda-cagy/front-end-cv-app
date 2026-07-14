import { useContext } from "react";
import { ThemeContext, type ThemeContextValue } from "./theme-context-value";

export function useThemeMode(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider");
  }
  return context;
}
