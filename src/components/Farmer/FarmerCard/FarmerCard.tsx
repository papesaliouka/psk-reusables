import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Chip, IconButton } from 'react-native-paper';
import {farmerStyle as styles} from '../../../infrastructure/theme/style'; // Assuming your styles are saved in styles.js
import colors from '../../../infrastructure/theme/colors'; // Importing your colors


interface FarmerCardProps {
  name: string;
  surface: string;
  crops: string[];
}

const FarmerCard: React.FC<FarmerCardProps> = ({ name, surface, crops }) => {
  const cropColors: { [key: string]: string } = {
    Riz: colors.blue,
    Mil: colors.yellow,
    Cacao: colors.violet,
    Mais: colors.primary,
    Niebe: colors.orange,
    Ail: colors.sucess,
  };

  return (
    <View style={styles.cardContainer}>
      {/* Avatar and Name */}
      <View style={styles.leftSection}>
        <Avatar.Icon size={40} icon="account" color={colors.white} style={{ backgroundColor: colors.grey_warm }} />
        <Text style={styles.nameText}>{name}</Text>
      </View>

      {/* Crop Chips */}
      <View style={styles.cropChips}>
        {crops.map((crop) => (
          <Chip key={crop} style={[styles.chip, { backgroundColor: cropColors[crop] }]}>
            {crop}
          </Chip>
        ))}
      </View>

      {/* Surface and Zone Icons */}
      <View style={styles.iconSection}>
        <View style={styles.iconWrapper}>
          <IconButton icon="map" style={{backgroundColor:colors.primary}} size={20} />
          <Text style={styles.iconText}>{surface}</Text>
        </View>
        <IconButton icon="earth" style={{backgroundColor:colors.primary}} size={20} />
      </View>
    </View>
  );
};

export default FarmerCard;