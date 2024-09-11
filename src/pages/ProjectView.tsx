// src/screens/LoginScreen.tsx

import React, { useContext, useState, useEffect } from 'react';
import { Text, SafeAreaView, Image, Alert,View } from 'react-native';
import styles from '../infrastructure/theme/style/index';

import { StackNavigationProp } from '@react-navigation/stack';

import Header from '../components/Header/Header';

import i18next from '../services/i18next/i18next';
import { ProjectCard } from '../components/Project';

// Define types for props (if you're using React Navigation)
interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
  api_url: string;
}

// Define the `LoginScreen` component with types
export const ProjectViewScreen: React.FC<LoginScreenProps> = ({ navigation, api_url }) => {
 

  const onPress = async () => {
      navigation.navigate('Home');
  };

 

  return (
    <SafeAreaView style={styles.container}>
      <Header title="ProjectView" navigation={navigation} search wifi />
      <View style={{
        // help build a container that will represent a map area placeholder in grey
        backgroundColor: 'grey',
        height: 400,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }} >

      </View>
      <ProjectCard header={false} navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProjectViewScreen;
