import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { reactNativePaperTheme } from '../theme/reactNativePaperTheme';
import { Home } from '../views/Home';
import { Profile } from '../views/Profile';
import { Settings } from '../views/Settings';
import { Store } from '../views/Store';
import { PageWrapper } from './PageWrapper';

export function MainView() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline'
    },
    { key: 'store', title: 'Store', focusedIcon: 'store' },
    { key: 'profile', title: 'Profile', focusedIcon: 'account' },
    {
      key: 'settings',
      title: 'Settings',
      focusedIcon: 'cog',
      unfocusedIcon: 'cog-outline'
    }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => (
      <PageWrapper title="Your Devices">
        <Home />
      </PageWrapper>
    ),
    store: () => (
      <PageWrapper title="Store">
        <Store />
      </PageWrapper>
    ),
    profile: () => (
      <PageWrapper title="Profile">
        <Profile />
      </PageWrapper>
    ),
    settings: () => (
      <PageWrapper title="Settings">
        <Settings />
      </PageWrapper>
    )
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
