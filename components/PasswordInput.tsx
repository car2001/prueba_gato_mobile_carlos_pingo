import React, { useState } from "react";
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity } from "react-native";

import { EyeIcon, EyeSlashIcon } from "../lib/Icons";
import { ThemedTextInput as TextInput } from "./ThemedTextInput";
import { ThemedView as View } from "./ThemedView";

const PasswordInput = ({
    placeholder,
    value,
    onChangeText,
    style,
    editable = true
}:{
    placeholder?:string;
    value: string;
    onChangeText: (...event: any[]) => void;
    style?: StyleProp<TextStyle>;
    editable?:boolean;
}) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        editable={editable}
        secureTextEntry={secureText}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity
        disabled={!editable}
        onPress={() => setSecureText(!secureText)}
        style={styles.icon}
        accessibilityLabel="Mostrar u ocultar contraseña"
        accessibilityRole="button"
      >
        {secureText ? <EyeSlashIcon /> : <EyeIcon />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  input: {
    flex: 1,
    paddingRight: 40,
    width:"90%"
  },
  icon: {
    position: "absolute",
    right: 15,
  },
});

export default PasswordInput;
