import React from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { ThemedText as Text } from './ThemedText';
import { ThemedView as View } from './ThemedView';

type LabelProps = {
  label: string;
  style? : StyleProp<TextStyle>
};

const Label = ({ label, style }: LabelProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, style]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    height: 17
  },
  label: {
    fontSize: 14,
    fontWeight:"500"
  },
});

export default Label;
