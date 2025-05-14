import { Image, StyleSheet, TouchableOpacity } from 'react-native';

type AvatarProps = {
  onPress?: () => void;
  avatarUri?: string;
};

const Avatar = ({ onPress, avatarUri }: AvatarProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{
          uri: avatarUri ?? 'https://reqres.in/img/faces/12-image.jpg',
        }}
        style={styles.avatar}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 18,
    marginRight: 16,
  },
});

export default Avatar;
