// components/HeaderWithAvatar.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

type HeaderWithAvatarProps = {
  title: string;
  avatarUri?: string;
};

export const HeaderWithAvatar = ({ title, avatarUri }: HeaderWithAvatarProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Avatar avatarUri={avatarUri}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
  }
});
