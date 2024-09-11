import React from 'react';
import { FlatList, View } from 'react-native';
import FarmerCard from '../FarmerCard/FarmerCard'; // Assuming FarmerCard is in the same directory

// Sample list of farmers with their respective crops and land information
const farmers = [
  {
    id: '1',
    name: 'Amadou Fall',
    surface: '100 Ha',
    crops: ['Riz', 'Mil', 'Cacao'],
  },
  {
    id: '2',
    name: 'Fatou Ndiaye',
    surface: '150 Ha',
    crops: ['Mais', 'Niebe', 'Ail'],
  },
  {
    id: '3',
    name: 'Aliou Diop',
    surface: '200 Ha',
    crops: ['Riz', 'Cacao'],
  },
];

const FarmerList = () => {
  return (
    <FlatList
      data={farmers}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <FarmerCard
          name={item.name}
          surface={item.surface}
          crops={item.crops}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
};

export default FarmerList;
