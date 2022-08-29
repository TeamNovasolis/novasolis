import { MD3Theme, MD3DarkTheme } from 'react-native-paper';

export const reactNativePaperTheme: MD3Theme = {
  ...MD3DarkTheme,
  dark: true,
  roundness: 2,
  version: 3,
  mode: 'exact',
  colors: {
    ...MD3DarkTheme.colors,
    surface: '#161827',
    background: '#161827',
    primary: '#B5179E',
    secondary: '#262837',
    tertiary: '#a1b2c3'
  }
};
