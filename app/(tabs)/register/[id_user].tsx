import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { UserForm } from '@/components/forms/UserForm';
import { ThemedScrollView as ScrollView } from "@/components/ThemedScrollView";
import { ThemedView as View } from '@/components/ThemedView';
import { useUser } from "@/context/UserContext";
import { User } from "@/models/user";


export default function DetailUser() {

  const { id_user } = useLocalSearchParams();
  const [mode, setMode] = useState<"add" | "edit">("add");
  const [userData, setUserData] = useState<User>();
  const { addUser, updateUser, getUserById } = useUser();

  useEffect(() => {

    const loadUser = async () => {
      console.log(typeof id_user);
      if (id_user) {
        console.log("search")
        const user = getUserById(id_user.toString());
        console.log(user);
        setUserData(user);
      }
    }

    if (id_user) {
      setMode("edit");
      loadUser();
    } else {
      setMode("add");
    }
  }, [id_user, getUserById]);

  const handleSave = async ({ user }: { user: User }) => {
    try {
      if (!id_user && mode === "add") {
        addUser(user);
      }

      if (id_user && mode === "edit") {
        console.log("edit")
        updateUser(user);
      }

      setTimeout(() => router.navigate("/home"), 1000);
    }
    catch (exception: any) {
      console.error(exception);
    }
  }
  const transformedUserData = userData
  ? {
      ...userData,
      repeat_password: "",
    }
  : undefined;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View style={styles.container}>
          <UserForm
            mode={mode}
            userDefaultValues={transformedUserData}
            handleSaveUser={handleSave}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})