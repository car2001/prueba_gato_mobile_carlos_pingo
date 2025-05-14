import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HeaderWithAvatar } from '@/components/HeaderWithAvatar';
import { ThemedView as View } from '@/components/ThemedView';

export default function Register() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#fff" }}>
        <View style={styles.container}>
          <HeaderWithAvatar title='Hola, Diana!'/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
      marginTop: 50,
      height: "100%"
    },
})