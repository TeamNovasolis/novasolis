import { Home } from '../views/Home';
import { Profile } from '../views/Profile';
import { Settings } from '../views/Settings';
import { Store } from '../views/Store';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export function MainView() {
  return (
    // <View>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: 'home' }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{ tabBarIcon: 'store' }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: 'account' }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ tabBarIcon: 'cog' }}
      />
    </Tab.Navigator>
    // </View>
  );
}
