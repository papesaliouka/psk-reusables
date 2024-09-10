import React from 'react';
import { View, Text,Image } from 'react-native';
import { Card, Chip, IconButton } from 'react-native-paper';
import { folderStyle as styles } from '../../infrastructure/theme/style';

import colors from '../../infrastructure/theme/colors';
import spacing from '../../infrastructure/theme/spacing';


const ProjectCard = () => {
  return (
    <Card style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={{backgroundColor:colors.primary}} width={20} height={20} src={require('../../assets/FolderRounded.png')} />
          <Text style={{ color: colors.primary, fontWeight: 'bold' }}>Fairtrade</Text>
        </View>
        <IconButton icon="chevron-right" size={20} />
      </View>

      {/* Surface and Zones */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <View style={styles.contentContainer}>
          <Image style={{backgroundColor:colors.primary}} width={20} height={20} src={require('../../assets/LayersRounded.png')} />
          <Text style={{ fontSize: 8, color: colors.text_secondary }}>Surfaces occupées</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text_primary }}>2757</Text>
          <Text style={{ fontSize: 8, color: colors.text_secondary }}>Hectares</Text>
        </View>
        <View style={styles.contentContainer}>
          <Image style={{backgroundColor:colors.primary}} width={20} height={20} src={require('../../assets/maximize-02.png')} />
          <Text style={{ fontSize: 8, color: colors.text_secondary }}>Zone(s)</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text_primary }}>20</Text>
        </View>
      </View>

      {/* Cultures */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: spacing.md }}>
        <Image style={{backgroundColor:colors.primary}} width={20} height={20} src={require('../../assets/GrassRounded.png')} />
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: spacing.sm, color: colors.text_primary }}>
          Cultures
        </Text>
        <Chip textStyle={{ color: colors.white, fontWeight: 'bold' }} style={{ backgroundColor: colors.error, borderRadius:100 }}>
          6
        </Chip>
      </View>

      {/* Legend Items */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs }}>
        <View  style={styles.legendItemContainer} >
          <Text>Riz</Text>
          <Chip style={ {backgroundColor: colors.blue}} children='' />
        </View>

        <View  style={styles.legendItemContainer} >
          <Text>Cacao</Text>
          <Chip style={ {backgroundColor: colors.yellow}} children='' />
        </View>

        <View  style={styles.legendItemContainer} >
          <Text>Niebe</Text>
          <Chip style={ {backgroundColor: colors.violet}} children='' />
        </View>

        <View  style={styles.legendItemContainer} >
          <Text>Mais</Text>
          <Chip style={ {backgroundColor: colors.orange}} children='' />
        </View>

        <View  style={styles.legendItemContainer} >
          <Text>Ail</Text>
          <Chip style={ {backgroundColor: colors.sucess}} children='' />
        </View>
      </View>
    </Card>
  );
};

export default ProjectCard;
