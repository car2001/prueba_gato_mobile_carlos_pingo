import React from 'react';
import { ActivityIndicator, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type CustomButtonProps = {
  text: string;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  styleButton?: StyleProp<ViewStyle>; 
  styleButtonText?: StyleProp<TextStyle>;
  children?: React.ReactNode;
};

export default function CustomButton({ 
  text, 
  onPress, 
  isLoading, 
  styleButton, 
  styleButtonText, 
  children, 
  disabled 
}: CustomButtonProps) {

    const theme = useColorScheme() ?? "light";
    const primaryColor = Colors[theme]["primaryColor"]

    return (
        <TouchableOpacity
        style={[
            styles.button,
            { backgroundColor: primaryColor },
            styleButton,
            (isLoading || disabled) && { opacity: 0.6 }
        ]}
        disabled={isLoading || disabled}
        onPress={onPress}
        >
        {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
        ) : (
            <Text style={[styleButtonText]}>
            <Text> {children} </Text>
            {text}
            </Text>
        )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button:{
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 12,
    marginVertical: 10,
    elevation: 5,
  }
})
