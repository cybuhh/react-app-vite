import type { ThemeContextType } from '../types';
import { createContext } from 'react';

const ThemeContext = createContext<ThemeContextType | null>(null);

export default ThemeContext;
