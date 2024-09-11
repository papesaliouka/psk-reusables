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
export const FarmerViewScreen: React.FC<FarmerViewProps> = ({ navigation, api_url }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Header title="FarmerView" navigation={navigation} search wifi />

      {/* Map Placeholder */}
      <View
        style={{
          backgroundColor: 'grey',
          height: 400,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Map Area Placeholder</Text>
      </View>

      {/* Farmer List */}
      <FarmerList />

    </SafeAreaView>
  );
};

export default FarmerViewScreen;
