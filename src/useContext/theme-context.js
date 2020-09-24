import React, { useState } from "react";

const common = {
  width: "200px",
  padding: "10px",
  border: "1px solid",
};

const themes = {
  dark: {
    ...common,
    background: "#000",
    color: "#fff",
  },
  light: {
    ...common,
    background: "#fff",
    color: "#000",
  },
};

export const ThemesContext = React.createContext();

export default function ThemesContextProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    setTheme((prev) => {
      return prev.color === "#fff" ? themes.light : themes.dark;
    });
  }

  return (
    <ThemesContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemesContext.Provider>
  );
}
