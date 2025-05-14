import { FieldError } from "react-hook-form";
import { KeyboardTypeOptions, StyleProp, StyleSheet, TextStyle } from "react-native";

import Label from "./Label";
import PasswordInput from "./PasswordInput";
import { ThemedTextError as TextError } from "./ThemedTextError";
import { ThemedTextInput as TextInput } from "./ThemedTextInput";
import { ThemedView as View } from "./ThemedView";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

type CustomTextInputProps = {
	label?: string;
	placeholder?:string;
	value?: string;
	editable?: boolean;
	errors?: FieldError;
	onChangeText?: (...event: any[]) => void;
	secureTextEntry?: boolean;
	styleInput?: StyleProp<TextStyle>;
	styleContainer?: object;
	keyboardType?: KeyboardTypeOptions | undefined;
	maxLength?: number;
}

const CustomTextInput = ({
	label,
	placeholder,
	value,
	editable= true,
	errors,
	maxLength = undefined,
	onChangeText = () => {},
	secureTextEntry = false,
	styleInput,
	styleContainer,
	keyboardType = "default",
}: CustomTextInputProps) => {

  const theme = useColorScheme() ?? 'light';
  const errorColor = Colors[theme]["errorColor"];
  const borderInputColor = Colors[theme]["borderInputColor"];
  const labelColor = Colors[theme]["labelColor"];
  const backgroundDisabledInputColor = Colors[theme]["backgroundDisabledInputColor"];
  const backgroundInputColor = Colors[theme]["backgroundInputColor"];
  
  const handleChange = (text: string) => {
    if (/^\d*\.?\d*$/.test(text)) {
      onChangeText(text);
    }
  };

  return(
	<View style={[styles.container, styleContainer]}>
		{label ? 
			(
			    <Label 
					label={label}
					style={[styles.label, {color: labelColor}]}
				/>
			) : null
		}
		{!secureTextEntry ? (
			<View>
				<TextInput
					value={value || ""}
					onChangeText={ 
						keyboardType === "numeric" 
						? handleChange
						: onChangeText
					}
					placeholder={placeholder}
					editable={editable}
					keyboardType={keyboardType}
					maxLength={maxLength}
					secureTextEntry={secureTextEntry}
					style={[
						{
							borderColor: errors ? errorColor: borderInputColor
						},
						editable ? styleInput: styles.disabledInput, 
						{backgroundColor: !editable ? backgroundDisabledInputColor: backgroundInputColor} ,
						styleInput
					]}
				/>
			</View>
		): (
			<PasswordInput
				value={value || ""}
				onChangeText={onChangeText}
				editable={editable}
				placeholder={placeholder}
				style={[
					{
						borderColor: errors ? errorColor: borderInputColor
					},
					editable ? styleInput: styles.disabledInput,
					styleInput
				]}
			/>
		)}
		{!!errors?.message && (
			<View style={styles.errorMessageContainer}>
				<TextError>
					{errors?.message}
				</TextError>
			</View>
		)}
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
		paddingBottom:8,
		paddingTop: 10,
		marginBottom: 5,
		marginTop: 5,
	},
	label: {
		position: "absolute",
	},
	disabledInput: {
		pointerEvents:"none", 
		backgroundColor:"#f5f5f5"
	},
    errorMessageContainer: {
        position: "relative",
        paddingBottom:10,
        paddingTop:5
    }
});

export default CustomTextInput