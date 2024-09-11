import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import styles from '../infrastructure/theme/style/index';
import { StackNavigationProp } from '@react-navigation/stack';

import Header from '../components/Header/Header';
import FarmerList from '../components/Farmer/FarmerList/FarmerList'; // Import the FarmerList component

// Define types for props (if you're using React Navigation)
interface FarmerViewProps {
  navigation: StackNavigationProp<any>;
  api_url: string;
}

// FarmerView component
export const ZoneViewScreen: React.FC<FarmerViewProps> = ({ navigation, api_url }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Header title="ZoneView" navigation={navigation} search wifi />

      <FarmerList />

    </SafeAreaView>
  );
};

export default ZoneViewScreen;
