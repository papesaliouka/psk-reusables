// src/screens/LoginScreen.tsx

import React, { useContext, useState, useEffect } from 'react';
import { Text, SafeAreaView, Image, Alert } from 'react-native';
import styles from '../infrastructure/theme/style/index';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import Report from '../components/Report/Report';
import { AuthenticationContext, AuthenticationContextType } from '../services/login/login.context';
import { useTranslation } from 'react-i18next';
import StorageUtils from '../services/storage/storage';
import { StackNavigationProp } from '@react-navigation/stack';

import i18next from '../services/i18next/i18next';

// Define types for props (if you're using React Navigation)
interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
  api_url: string;
}

// Define the `LoginScreen` component with types
export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, api_url }) => {
  // @ts-ignore
  const { onLogin, isLoading, setIsAuthenticated, setUser, setIsLoading } = useContext<AuthenticationContextType>(AuthenticationContext)!;
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const { t } = useTranslation();
  
  const onEmailChange = (label: string, email: string) => {
    setEmail(email);
  };
  
  const onPasswordChange = (label: string, password: string) => {
    setPassword(password);
  };

  const onPress = async () => {
    if (!email || !password) {
      Alert.alert(t('All fields are required'));
      return;
    }

    try {
      const response = await onLogin(decodeURIComponent(email), decodeURIComponent(password),api_url);
      if (!response) {
        Alert.alert(t('Invalid credentials'));
      }
      navigation.navigate('Home');
    } catch (e) {
      Alert.alert(t('something went wrong'));
    }
  };

  const [report, showReport] = useState(false);

  const hideModal = () => showReport(false);
  const showModal = () => showReport(true);

  useEffect(() => {

    const getCredentials = async () => {
      setIsLoading(true);
      const user = await StorageUtils.getItem('user');
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    getCredentials();

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/connexion-illustration.png')} />
      <Text style={styles.typography}>{t('SignIn')}</Text>
      <Text style={styles.typography2}>{t('UseCredentials')}</Text>
      <Input onChange={onEmailChange} style={styles.textInputContainer} label={t('Username')} />
      <Input secure={true} onChange={onPasswordChange} style={styles.textInputContainer} label={t('Password')} />
      <Button style={styles.loginButton} title={t('Login')} onPress={onPress} />
      <Button style={styles.problemButton} title={t('ConnectionProblem')} onPress={()=> null} />
      {isLoading && <Loader text={t('ConnectAccount')} />}
      {report && <Report style={styles.report}  />}
    </SafeAreaView>
  );
};

export default LoginScreen;
