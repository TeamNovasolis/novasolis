import { View, Image } from 'react-native';
import { themeDefinition } from '../theme/reactNativePaperTheme';

export function AppBackground({ children }) {
  return (
    <View
      className="absolute top-0 left-0 bottom-0 right-0"
      style={{ backgroundColor: themeDefinition.bgPrimary }}
    >
      <Image
        className="absolute top-1/3 left-1/2"
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
          transform: [{ translateX: -150 }, { translateY: -150 }]
        }}
        blurRadius={40}
        source={require('../assets/devices/example-icon-small-1.png')}
      />
      {children}
    </View>
  );
}
