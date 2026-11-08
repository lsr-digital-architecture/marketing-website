import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeContext, type ThemePreference, type ResolvedTheme } from './themeContextCore';

const THEME_STORAGE_KEY = 'lsr_theme_preference';

const isThemePreference = (value: string | null): value is ThemePreference =>
  value === 'system' || value === 'light' || value === 'dark';

const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const resolveTheme = (preference: ThemePreference): ResolvedTheme =>
  preference === 'system' ? getSystemTheme() : preference;

const applyResolvedTheme = (resolved: ResolvedTheme) => {
  const root = document.documentElement;
  if (resolved === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
    root.dataset.theme = 'light';
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
    root.dataset.theme = 'dark';
  }

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', resolved === 'light' ? '#f8fafc' : '#090A0F');
  }
  const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
  if (metaColorScheme) {
    metaColorScheme.setAttribute('content', resolved);
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemePreference>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (isThemePreference(savedTheme)) {
        return savedTheme;
      }
      return 'system';
    }
    return 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => resolveTheme(theme));

  useEffect(() => {
    const apply = () => {
      const resolved = resolveTheme(theme);
      setResolvedTheme(resolved);
      applyResolvedTheme(resolved);
    };

    apply();
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (theme !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => apply();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      if (prev === 'system') return 'light';
      if (prev === 'light') return 'dark';
      return 'system';
    });
  }, []);

  const setTheme = useCallback((newTheme: ThemePreference) => {
    setThemeState(newTheme);
  }, []);

  const value = useMemo(
    () => ({ theme, resolvedTheme, toggleTheme, setTheme }),
    [theme, resolvedTheme, toggleTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
