import { View } from 'react-native';
import { PageWrapper } from '../components/PageWrapper';
import { Text } from 'react-native-paper';

export function Profile() {
  return (
    <PageWrapper title="Profile">
      <View>
        <Text>Profile content</Text>
      </View>
    </PageWrapper>
  );
}
