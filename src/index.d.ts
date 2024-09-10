import { StyleProp, ViewStyle, TextStyle, KeyboardTypeOptions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactNode } from 'react';

// Define types for ButtonComponent
interface ButtonComponentProps {
  title: string;
  onPress: () => void;
  style?: {
    labelStyle?: any;
    textColor?: string;
    [key: string]: any;
  };
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
}

// Define types for Input
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

// Define types for Loader
interface LoaderProps {
  text: string;
}

// Define types for Report
interface ReportProps {
  style?: {
    container: StyleProp<ViewStyle>;
    title: StyleProp<TextStyle>;
    subtitle: StyleProp<TextStyle>;
    textArea: StyleProp<ViewStyle>;
    cancelBtn: {
      color: string;
    } & StyleProp<ViewStyle>;
    confirmBtn: StyleProp<ViewStyle>;
  };
}

// Define types for LoginScreen
interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
  api_url: string;
}

// Define types for AuthenticationContextProvider
interface AuthenticationContextProviderProps {
  children: ReactNode;
}

interface HeaderProps {
  navigation: StackNavigationProp<any>;
  title: string;
  search?: boolean;
  wifi?: boolean;
  icon?: string;
}


// Declare the module 'psk-reusables'
declare module 'psk-reusables' {
  export function ButtonComponent(props: ButtonComponentProps): JSX.Element;
  export function Input(props: InputProps): JSX.Element;
  export function Loader(props: LoaderProps): JSX.Element;
  export function Report(props: ReportProps): JSX.Element;
  export function LoginScreen(props: LoginScreenProps): JSX.Element;
  export function AuthenticationContextProvider(props: AuthenticationContextProviderProps): JSX.Element;
}
