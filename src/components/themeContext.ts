import type { ThemeContextType } from '../@types/themeContext';
import { createContext } from 'react';

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export default ThemeContext;
