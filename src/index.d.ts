// src/index.d.ts

// Define types for your ButtonComponent
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

// Export the component type
declare module 'psk-reusables' {
  export function ButtonComponent(props: ButtonComponentProps): JSX.Element;
}
