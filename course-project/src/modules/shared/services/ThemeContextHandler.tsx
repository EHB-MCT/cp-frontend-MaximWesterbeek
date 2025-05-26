import { createContext, useEffect, useState } from 'react';
import { ThemeContextType } from './themeContext.types';

export const ThemeContext = createContext<Partial<ThemeContextType>>({});

export const ThemeContextProvider = (props: any) => {
  // State to hold the current theme (true for dark mode, false for light mode)
  let [theme, setTheme] = useState(false);

  useEffect(() => {
    // When theme changes
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme ? 'dark-mode' : 'light-mode');

  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
