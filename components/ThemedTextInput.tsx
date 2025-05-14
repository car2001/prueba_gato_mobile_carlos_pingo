import { TextInput as DefaultTextInput, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type ThemedTextInputProps = ThemeProps & DefaultTextInput['props'];


export function ThemedTextInput(props:ThemedTextInputProps){
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'backgroundInputColor');
    const shadowColor = useThemeColor({light: lightColor, dark:darkColor},"shadowInputColor");
    const borderColor = useThemeColor({light: lightColor, dark:darkColor},"borderInputColor");
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const placeHolderTextColor = useThemeColor({ light: lightColor, dark: darkColor }, 'placeholderTextColor');
    
    return (
      <DefaultTextInput 
        placeholderTextColor={placeHolderTextColor} 
        style={[{ backgroundColor, shadowColor, borderColor, color }, styles.textInput, style]} 
        {...otherProps} 
      />
    )
}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 0,
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderRadius: 12,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 5,
    },
})