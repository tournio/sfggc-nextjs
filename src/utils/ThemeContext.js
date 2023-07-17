import {createContext, useContext, useEffect, useState} from "react";

const initialValue = {
  theme: {
    active: 'light',
    preferred: 'auto',
  },
  updatePreferredTheme: null,
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key);
      if (savedValue !== null) {
        return JSON.parse(savedValue);
      }
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

const ThemeContext = createContext(initialValue);

export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState(null);
  const [storedThemeState, storeThemeState] = useLocalStorage('sfggc-color-theme', ThemeContext.theme);

  const updatePreferredTheme = (toTheme) => {
    let activeTheme = toTheme;
    if (toTheme === 'auto') {
      activeTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light';
    }
    const newTheme = {
      preferred: toTheme,
      active: activeTheme,
    };
    setTheme(newTheme);
    document.documentElement.setAttribute('data-bs-theme', activeTheme);
  }

  // Wait until we can access the window before trying to determine prefers-color-scheme
  // and the document before trying to set data-base-theme on it
  useEffect(() => {
    if (!window || !document) {
      return;
    }
    let preferredTheme = 'auto';
    if (!!storedThemeState && storedThemeState.preferred) {
      preferredTheme = storedThemeState.preferred;
    }
    updatePreferredTheme(preferredTheme);
  }, []);

  // Whenever the theme changes, write it to local storage
  useEffect(() => {
    if (!theme) {
      return;
    }
    storeThemeState(theme);
  }, [theme]);

  return (
    // We provide updatePreferredTheme rather than setTheme because we want updating the theme to
    // result in both storing it in state/storage as well as applying it as the data-bs-theme attribute
    // on the <html> tag.
    <ThemeContext.Provider value={{theme, updatePreferredTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
