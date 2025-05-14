import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

type HeaderWithAvatarProps = {
  title: string;
  avatarUri?: string;
};

export const HeaderWithAvatar = ({ title, avatarUri }: HeaderWithAvatarProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { onLogout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await onLogout();
    setModalVisible(false);
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Avatar avatarUri={avatarUri} onPress={() => setModalVisible(true)} />
      <Modal
        transparent
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setModalVisible(false)}>
          <View style={styles.modal}>
            <Text style={styles.greeting}>Hola, Diana!</Text>
            <Pressable style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutText}>Cerrar sesión</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 260,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#4608AD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '500',
  },
});