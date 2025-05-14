import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { UserForm } from '@/components/forms/UserForm';
import { ThemedView as View } from '@/components/ThemedView';

const titles = {
  add: "Crear usuario",
  edit: "Editar usuario",
};


export default function DetailUser() {

  const { id_user } = useLocalSearchParams();
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
    if (id_user && id_user !== "new") {
      setMode("edit");
      // loadUser();
    } else {
      setMode("add");
    }
  }, [id_user]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <UserForm mode={mode} userDefaultValues={userData}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})