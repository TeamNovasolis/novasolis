import { Chip, Text } from 'react-native-paper';
import { Image, View } from 'react-native';
import { themeDefinition } from '../theme/reactNativePaperTheme';
import { TouchableRipple } from 'react-native-paper';

type DeviceListItemProps = {
  name: string;
  currentEffect: string;
  navigation: any;
};

export function DeviceListItem({
  name,
  currentEffect,
  navigation
}: DeviceListItemProps) {
  return (
    <View
      className="rounded-3xl mb-5 overflow-hidden"
      style={{ backgroundColor: themeDefinition.bgSecondary }}
    >
      <TouchableRipple
        onPress={() => {
          navigation.navigate('DeviceDetail', {
            device: { name, currentEffect }
          });
        }}
        className="py-5 pr-5 pl-3"
      >
        <View className="flex flex-row">
          <Image
            className="mr-3"
            style={{ width: 80, height: 80, resizeMode: 'contain' }}
            source={require('../assets/devices/example-icon-small-1.png')}
          />
          <View className="flex flex-col">
            <Text variant="bodyLarge">{name}</Text>
            <View className="flex flex-row">
              <Chip
                className="bg-transparent my-2 block"
                compact={true}
                style={{ backgroundColor: themeDefinition.primaryTranslucent }}
              >
                {currentEffect}
              </Chip>
            </View>
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
}
