import { View } from 'react-native';
import { PageWrapper } from '../components/PageWrapper';
import { Text } from 'react-native-paper';
import { Device3dView } from '../components/Device3dView';

export function Settings() {
  return (
    <PageWrapper title="Settings">
      <View>
        <Text>Settings content</Text>
        <Device3dView />
      </View>
    </PageWrapper>
  );
}
