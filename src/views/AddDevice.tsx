import { View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

export function AddDevice({ navigation }) {
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Add Device" />
      </Appbar.Header>
    </View>
  );
}
