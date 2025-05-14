import {
  View as DefaultView,
  type ViewProps as DefaultViewProps
} from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = DefaultViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
