import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { MainView } from './src/components/MainView';
import { reactNativePaperTheme } from './src/theme/reactNativePaperTheme';
import { useEffect } from 'react';
const a = '#262837';

export default function App() {

  return (
    <PaperProvider theme={reactNativePaperTheme}>
      <StatusBar style="light" />
      <MainView />
    </PaperProvider>
  );
}
