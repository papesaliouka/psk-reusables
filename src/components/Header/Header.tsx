import React, { useContext } from 'react';
import { Appbar } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthenticationContext } from '../../services/login/login.context';
// Define the props interface
interface HeaderProps {
  navigation: StackNavigationProp<any>;
  title: string;
  search?: boolean;
  wifi?: boolean;
  icon?: string;
}

const Header: React.FC<HeaderProps> = ({ navigation, title, search, wifi,icon }) => {
  // You can replace this with actual context if needed
  const { isConnected } = useContext(AuthenticationContext)!;

  return (
    <Appbar.Header style={{ backgroundColor: '#005D3A' }}>
      <Appbar.BackAction onPress={() => navigation.goBack()} color="white" />
      <Appbar.Content title={title} color="white" />
      {wifi && (
        <Appbar.Action
          icon={isConnected ? 'wifi' : 'wifi-off'}
          color={isConnected ? 'white' : 'pink'}
        />
      )}
      {icon && <Appbar.Action icon={icon} color="white" />}
      {search && <Appbar.Action icon="account-search" color="white" />}
    </Appbar.Header>
  );
};

export default Header;
