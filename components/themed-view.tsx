import { type ViewProps } from 'react-native';
import { View } from 'react-native-css/components';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

export function ThemedView({
  style,
  className,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const useThemeBackground = !className;

  return (
    <View
      style={[useThemeBackground ? { backgroundColor } : undefined, style]}
      className={className}
      {...otherProps}
    />
  );
}
