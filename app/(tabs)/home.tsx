import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HeaderWithAvatar } from '@/components/HeaderWithAvatar';
import { ThemedView as View } from '@/components/ThemedView';
import UserList from '@/components/UserList';
import { useUser } from '@/context/UserContext';
import { useEffect } from 'react';

export default function Home() {

  const { fetchUsers } = useUser();

  useEffect(() => {
    const loadUsers = async () => {
      await fetchUsers();
    }
    loadUsers();
  }, [fetchUsers])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <ScrollView> */}
        <View style={styles.container}>
          <HeaderWithAvatar title='Hola, Diana!' />
          <UserList />
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 50,
    height: "100%",
    gap: 20
  },
})