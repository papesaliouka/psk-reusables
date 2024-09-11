import React from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';

import { IconButton } from 'react-native-paper';

import colors from '../../../infrastructure/theme/colors';

const ProjectHeader = ( {title='Fairtrade', navigation}) => {

  const onPress = async () => {
    navigation.navigate('ProjectView');
  }

  return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <TouchableOpacity onPress={onPress}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image  width={20} height={20}  source={require('../../../assets/FolderRounded.png')} />
          <Text style={{ color: colors.primary, fontWeight: 'bold' }}>{title}</Text>
        </View>
        <IconButton icon="chevron-right" size={20} />
        </TouchableOpacity>
      </View>
  )
};

export default ProjectHeader;
