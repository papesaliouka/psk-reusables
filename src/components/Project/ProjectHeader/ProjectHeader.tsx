import React from 'react';
import { View, Text,Image } from 'react-native';

import { IconButton } from 'react-native-paper';

import colors from '../../../infrastructure/theme/colors';

const ProjectHeader = ( {title='Fairtrade'}) => {
  return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image  width={20} height={20}  source={require('../../../assets/FolderRounded.png')} />
          <Text style={{ color: colors.primary, fontWeight: 'bold' }}>{title}</Text>
        </View>
        <IconButton icon="chevron-right" size={20} />
      </View>
  )
};

export default ProjectHeader;
