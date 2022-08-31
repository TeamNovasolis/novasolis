import { ScrollView, View } from 'react-native';
import { DeviceListItem } from '../components/DeviceListItem';

export function Home() {
  const devices = [
    {
      name: 'Abstract Table Light',
      currentEffect: 'strobe'
    },
    {
      name: 'Cloudly Light',
      currentEffect: 'weather'
    },
    {
      name: 'Main House Light',
      currentEffect: 'daylight'
    },
    {
      name: 'Garden Light',
      currentEffect: 'ambient'
    },
    {
      name: 'Cloudly Light 2',
      currentEffect: 'weather'
    }
  ];

  return (
    <ScrollView className="px-4" style={{ marginBottom: 175 }}>
      {devices.map((light, index) => (
        <View key={index}>
          <DeviceListItem
            currentEffect={light.currentEffect}
            name={light.name}
          />
        </View>
      ))}
    </ScrollView>
  );
}
