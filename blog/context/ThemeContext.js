import { createContext } from 'react';

export const themes = {
  light: {
    type: 'light',
    foreground: '#000000',
    background: '#F4F7F9',
  },
  dark: {
    type: 'dark',
    foreground: '#ffffff',
    background: '#2b2c38',
  },
};

export const ThemeContext = createContext({});
