export type ThemeType = 'light' | 'dark';
export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (newTheme: ThemeType) => void;
}
