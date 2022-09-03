import { useState } from 'react';
import { Home } from '../views/Home';
import { Profile } from '../views/Profile';
import { Settings } from '../views/Settings';
import { Store } from '../views/Store';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { reactNativePaperTheme } from '../theme/reactNativePaperTheme';

const Tab = createMaterialBottomTabNavigator();

export function MainView() {
  return (
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
  );
}
