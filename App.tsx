import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {
  Provider as PaperProvider,
  ActivityIndicator
} from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View className="text-lime-300 flex">
        <View className="m-auto">
          <Text>ballere!</Text>
          <ActivityIndicator animating={true} />
          <StatusBar style="auto" />
        </View>
      </View>
    </PaperProvider>
  );
}
