import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { MainView } from './src/components/MainView';
import {
  reactNativePaperTheme,
  reactNativePaperTransparentTheme,
  themeDefinition
} from './src/theme/reactNativePaperTheme';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image } from 'react-native';
import { AppBackground } from './src/components/AppBackground';

export default function App() {
  return (
    <NavigationContainer theme={reactNativePaperTransparentTheme as any}>
      <PaperProvider theme={reactNativePaperTheme}>
        <AppBackground>
          <StatusBar style="light" />
          <MainView />
        </AppBackground>
      </PaperProvider>
    </NavigationContainer>
  );
}
