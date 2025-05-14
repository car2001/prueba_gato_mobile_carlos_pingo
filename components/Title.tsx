import React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { ThemedText as Text } from './ThemedText';

type TitleProps = {
    text: string;
    style? : StyleProp<TextStyle>
};

const Title = ({ text, style }: TitleProps) => {
  return (
      <Text style={[styles.title, style]}>
        {text}
      </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight:"700",
    height: 34,
    color:"#1E293B"
  },
});

export default Title;
