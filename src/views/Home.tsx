import { useAtom } from 'jotai';
import { View } from 'react-native';
import { DeviceListItem } from '../components/DeviceListItem';
import { PageWrapper } from '../components/PageWrapper';
import { devicesAtom } from '../state/devices';
import { Appbar } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddDevice } from './AddDevice';
import { themeDefinition } from '../theme/reactNativePaperTheme';
import { DeviceDetail } from './DeviceDetail';

const Stack = createNativeStackNavigator();

export function Home() {
  const [devices, setDevices] = useAtom(devicesAtom);

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="HomeStack">
        {({ navigation }) => (
          <PageWrapper
            title="Your Devices"
            actions={
              <Appbar.Action
                icon="plus"
                onPress={() => navigation.navigate('AddDevice')}
              />
            }
          >
            {devices?.map((light, index) => (
              <View key={index}>
                <DeviceListItem
                  currentEffect={light.currentEffect}
                  name={light.name}
                  navigation={navigation}
                />
              </View>
            ))}
          </PageWrapper>
        )}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerShown: false,
          animation: 'fade_from_bottom',
          animationDuration: 200
        }}
        name="AddDevice"
        component={AddDevice}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          animation: 'fade_from_bottom',
          animationDuration: 200
        }}
        name="DeviceDetail"
        component={DeviceDetail}
      />
    </Stack.Navigator>
  );
}
