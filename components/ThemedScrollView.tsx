import {
    ScrollView as DefaultScrollView,
    type ScrollViewProps as DefaultScrollViewProps
} from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedScrollViewProps = DefaultScrollViewProps & {
    lightColor?: string;
    darkColor?: string;
};


export function ThemedScrollView(props: ThemedScrollViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  
    return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}