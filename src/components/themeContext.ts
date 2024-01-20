import type { ThemeContextType } from '../@types/themeContext';
import { createContext } from 'react';

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
