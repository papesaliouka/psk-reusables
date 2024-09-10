import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { AuthenticationContext } from '../../services/login/login.context';

// Define types for the style prop
interface ProfileStyles {
  container?: StyleProp<ViewStyle>;
  textContainer?: StyleProp<ViewStyle>;
  greeting?: StyleProp<TextStyle>;
  username?: StyleProp<TextStyle>;
}

// Define types for the component props
interface ProfileProps {
  style: ProfileStyles;
  icon?: boolean;  // Optional icon prop
  arrow?: boolean;  // Optional arrow prop
  navigatoToSetting?: () => void;
}

const Profile: React.FC<ProfileProps> = ({ style, icon, arrow, navigatoToSetting }) => {
  const { t } = useTranslation();
  const { user, isConnected } = useContext(AuthenticationContext) || {};
  const navigation = useNavigation();

  return (
    <View style={isConnected ? style.container : container}>
      <View style={{ position: 'relative' }}>
        <Avatar.Icon size={60} icon="account" style={{ backgroundColor: '#00522A' }} />
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: isConnected ? '#00522A' : 'pink',
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 45,
            top: 45,
          }}
        >
          <Icon
            style={{ borderRadius: 16 }}
            name="wifi"
            size={16}
            color={isConnected ? 'white' : '#93000A'}
          />
        </View>
      </View>
      <View style={style.textContainer}>
        <Text style={style.greeting}>{t('Greeting')}</Text>
        <Text style={style.username}>{user?.nom_agence}</Text>
      </View>
      {icon && (
        <TouchableOpacity onPress={navigatoToSetting}>
          <Icon name="settings-sharp" size={24} color="#00522A" />
        </TouchableOpacity>
      )}
    </View>
  );
};

// Default container styles
const container: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 'auto',
  paddingHorizontal: 16,
  paddingBottom: 20,
  paddingTop: 12,
  backgroundColor: '#FFFFFF',
};

export default Profile;
