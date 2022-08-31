import { View } from 'react-native';
import { Appbar, Text } from 'react-native-paper';

type PageWrapperProps = {
  children: React.ReactNode;
  title: string;
};

export function PageWrapper({ children, title }: PageWrapperProps) {
  return (
    <View>
      <Appbar.Header mode="large">
        <Appbar.Content title={title} />
      </Appbar.Header>
      {children}
    </View>
  );
}
