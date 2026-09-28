import { createContext } from "react";
import { ReactNode, useState } from "react";

interface ThemeContext {
  themes: "dark"|"white";
  setThemes: (category: "dark"|"white") => void;
}

interface CategoryProviderProps {
  children: ReactNode;
}
  export const ThemeContext = createContext({} as ThemeContext);

export function ContextTheme({ children }: CategoryProviderProps) {

  const [themes, setThemes] = useState< "dark"|"white">("white");



  return (
    <ThemeContext.Provider
      value={{
        themes,
        setThemes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}