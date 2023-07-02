"use client";

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <ThemeContext.Provider value={{ loading, setLoading }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
