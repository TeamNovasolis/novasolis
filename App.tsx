import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { MainView } from './src/components/MainView';
import { reactNativePaperTheme } from './src/theme/reactNativePaperTheme';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer theme={reactNativePaperTheme as any}>
      <PaperProvider theme={reactNativePaperTheme}>
        <StatusBar style="light" />
        <MainView />
      </PaperProvider>
    </NavigationContainer>
  );
}
