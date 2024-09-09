// src/components/Input.tsx

import * as React from 'react';
import { TextInput, Text } from 'react-native-paper';
import { StyleProp, ViewStyle, TextStyle, KeyboardTypeOptions } from 'react-native';

interface InputProps {
  label: string;
  value?: string;
  onChange: (label: string, text: string) => void;
  style?: {
    activeUnderlineColor?: string;
    inactiveUnderlineColor?: string;
    [key: string]: any;
  };
  type?: KeyboardTypeOptions;
  secure?: boolean;
}

// TypeScript functional component
const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  style = {},
  type = 'default',
  secure = false,
}) => {
  const [visible, setVisible] = React.useState(false);

  

  return (
    <>
      <Text style={{ marginHorizontal: 20 }}>{label}</Text>
      <TextInput
        label={""}
        style={{ width: '90%', alignSelf: 'center', marginVertical: 10, backgroundColor: 'whitesmoke' }}
        onChangeText={(text) => onChange(label, text)}
        activeUnderlineColor={style.activeUnderlineColor}
        mode="outlined"
        activeOutlineColor={style.activeUnderlineColor}
        keyboardType={type}
        value={value}
        secureTextEntry={!visible && secure}
        right={secure && <TextInput.Icon icon="eye" onPress={() => setVisible((prev) => !prev)} />}
      />
    </>
  );
};

export default Input;
