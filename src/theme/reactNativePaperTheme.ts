import { MD3Theme, MD3DarkTheme } from 'react-native-paper';

export const themeDefinition = {
  bgPrimary: '#161827',
  bgSecondary: '#262837',
  bgDark: '#131524',
  primary: '#B5179E',
  primaryTranslucent: '#B5179E',
  textColor: '#FFFFFF'
};

export const reactNativePaperTheme: MD3Theme = {
  ...MD3DarkTheme,
  dark: true,
  roundness: 2,
  version: 3,
  mode: 'exact',
  colors: {
    ...MD3DarkTheme.colors,
    surface: themeDefinition.bgPrimary,
    background: themeDefinition.bgPrimary,
    primary: themeDefinition.primary
  }
};
