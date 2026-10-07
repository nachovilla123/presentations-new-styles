import { createContext, useContext } from 'react';
import type { ThemeDef } from './types';

export const ThemeContext = createContext<ThemeDef | null>(null);

/** Theme of the enclosing `ThemedSlide`. Throws when used outside one. */
export function useTheme(): ThemeDef {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error('useTheme must be used inside a <ThemedSlide>');
  return theme;
}
