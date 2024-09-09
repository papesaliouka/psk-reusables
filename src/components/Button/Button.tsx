import React from 'react';
import { Pressable, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Button } from 'react-native-paper';

// Define the props interface for type safety
interface ButtonComponentProps {
  title: string;
  onPress: () => void;
  style?: {
    labelStyle?: StyleProp<TextStyle>;
    textColor?: string;
    [key: string]: any;
  } | undefined;
  icon?: string | undefined;
  loading?: boolean;
  disabled?: boolean;
}

// Functional component with TypeScript types
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  onPress,
  style = {},
  icon,
  loading = false,
  disabled = false,
}) => {
  return (
    <Pressable style={{ width: '100%' }} onPress={onPress} disabled={disabled}>
      <Button
        disabled={disabled}
        loading={loading}
        icon={icon}
        labelStyle={style.labelStyle}
        textColor={style.textColor}
        mode="contained"
        style={style as StyleProp<ViewStyle>}
      >
        {title}
      </Button>
    </Pressable>
  );
};

export default ButtonComponent;