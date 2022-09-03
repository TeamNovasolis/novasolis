import { View } from 'react-native';
import { DeviceListItem } from '../components/DeviceListItem';
import { PageWrapper } from '../components/PageWrapper';

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
    },
    {
      name: 'Cloudly Light 2',
      currentEffect: 'weather'
    },
    {
      name: 'Cloudly Light 2',
      currentEffect: 'weather'
    }
  ];

  return (
    <PageWrapper title="Your Devices">
      {devices.map((light, index) => (
        <View key={index}>
          <DeviceListItem
            currentEffect={light.currentEffect}
            name={light.name}
          />
        </View>
      ))}
    </PageWrapper>
  );
}
