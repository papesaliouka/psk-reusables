import React from 'react';
import { View, Text,Image, TouchableOpacity} from 'react-native';

import { folderStyle as styles } from '../../../infrastructure/theme/style';
import colors from '../../../infrastructure/theme/colors';

const ProjectItemCard = ( {title='Surface occupees', quantity=2757, unit='Hectares', imgUrl=require('../../../assets/maximize-02.png'), onPress}) => {

  

  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.contentContainer}>
      <View style={{flexDirection:"row", justifyContent:'space-around'}} >
        <Image width={16} height={16} source={imgUrl} />
        <Text style={{ fontSize: 8, color: colors.text_secondary }}>{title}</Text>
      </View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text_primary }}>{quantity}</Text>
      <Text style={{ fontSize: 8, color: colors.text_secondary }}>{unit}</Text>
    </View>  
    </TouchableOpacity>
  )
};

export default ProjectItemCard;