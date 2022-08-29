import { View } from 'react-native';
import { Appbar, MD3DarkTheme, MD3Theme } from 'react-native-paper';

type PageWrapperProps = {
  children: React.ReactNode;
  title: string;
};

export function PageWrapper({ children, title }: PageWrapperProps) {
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title={title} />
      </Appbar.Header>
      {children}
    </View>
  );
}
