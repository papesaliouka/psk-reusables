import React from 'react';
import { View, Text} from 'react-native';


import colors from '../../../infrastructure/theme/colors';
import {folderStyle as styles} from '../../../infrastructure/theme/style';

const ProjectLegendItem = ( {title='Riz', color= colors.blue}) => {
  return (
    <View  style={styles.legendItemContainer} >
      <Text>{title}</Text>
    <View style={ {backgroundColor: color, width:8, height:8, borderRadius:50}} />
  </View>
  )
};

export default ProjectLegendItem;
