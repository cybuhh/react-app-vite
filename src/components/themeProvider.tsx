import type { ThemeType } from '../@types/themeContext';
import useLocalStorage from '../hooks/useLocalStorage';
import ThemeContext from './themeContext';
import { useEffect, useCallback } from 'react';

interface Props {
  children: React.ReactElement;
}

export default function Theme({ children }: Props) {
  const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [localTheme, setLocalTheme] = useLocalStorage<string, ThemeType>('theme', prefersColorScheme);

  const setTheme = useCallback(
    (darkMode: boolean) => {
      setLocalTheme(darkMode ? 'dark' : 'light');
    },
    [setLocalTheme]
  );

  useEffect(() => {
    const root = document.querySelector(':root');
    if (localTheme === 'dark') {
      root?.classList.add('dark');
    } else {
      root?.classList.remove('dark');
    }
  }, [localTheme]);

  return <ThemeContext.Provider value={{ theme: localTheme, setTheme }}>{children}</ThemeContext.Provider>;
}
