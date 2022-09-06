import { View, Image } from 'react-native';
import { Appbar, Card, Paragraph, Title } from 'react-native-paper';
import { themeDefinition } from '../theme/reactNativePaperTheme';

export function DeviceDetail({ route, navigation }) {
  const { device } = route.params;

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={device.name} />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <View className="flex flex-col w-full items-center">
        <Image
          className="mr-3"
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
          source={require('../assets/devices/example-icon-small-1.png')}
        />
        <Paragraph>Current Effect: {device.currentEffect}</Paragraph>
      </View>
    </View>
  );
}
