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
    (newTheme: ThemeType) => {
      setLocalTheme(newTheme);
    },
    [setLocalTheme]
  );

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', localTheme);
  }, [localTheme]);

  return <ThemeContext.Provider value={{ theme: localTheme, setTheme }}>{children}</ThemeContext.Provider>;
}
