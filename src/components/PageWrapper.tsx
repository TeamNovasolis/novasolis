import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRef } from 'react';
import { ScrollView, Animated, View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { textSizeEasing } from '../theme/easing';
import { themeDefinition } from '../theme/reactNativePaperTheme';

const Stack = createNativeStackNavigator();

type PageWrapperProps = {
  children: React.ReactNode;
  title: string;
};

export function PageWrapper({ children, title }: PageWrapperProps) {
  const { top: topSafeInset } = useSafeAreaInsets();

  const headerMaxHeight = 200;
  const headerMinHeight = 60 + topSafeInset;
  const headerScrollDistance = headerMaxHeight - headerMinHeight;

  const headerFontMaxSize = 38;
  const headerFontMinSize = 24;

  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, headerScrollDistance],
    outputRange: [headerMaxHeight, headerMinHeight],
    extrapolate: 'clamp'
  });

  const fontSize = scrollOffsetY.interpolate({
    inputRange: [0, headerScrollDistance],
    outputRange: [headerFontMaxSize, headerFontMinSize],
    extrapolate: 'clamp',
    easing: textSizeEasing
  });

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name={`${title}Stack`}>
        {() => (
          <>
            <ScrollView
              className="px-4"
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
                {
                  useNativeDriver: false
                }
              )}
            >
              <View style={{ paddingTop: headerMaxHeight + topSafeInset }}>
                {children}
              </View>
            </ScrollView>
            <Animated.View
              className="absolute left-0 right-0 w-max overflow-hidden flex flex-row px-4"
              style={{
                height: headerScrollHeight,
                paddingTop: topSafeInset,
                backgroundColor: themeDefinition.bgPrimary
              }}
            >
              <Animated.Text
                className="self-end pb-4"
                style={{
                  fontSize,
                  color: themeDefinition.textColor
                }}
              >
                {title}
              </Animated.Text>
            </Animated.View>
          </>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
