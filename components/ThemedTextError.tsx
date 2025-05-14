import {
    Text as DefaultText,
    StyleSheet,
} from 'react-native';
  
  import { useThemeColor } from '@/hooks/useThemeColor';

  type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
  };
  
  export type TextProps = ThemeProps & DefaultText['props'];
  
  export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  };


export function ThemedTextError(props: TextProps){
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'errorColor');
    return <DefaultText style={[{ color }, styles.errorMessage]} {...otherProps}/>
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 12,
        position: "absolute",
        top:0
    }
})