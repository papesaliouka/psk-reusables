import React from 'react';
import { View, Text,Image } from 'react-native';

import { Chip } from 'react-native-paper';

import colors from '../../../infrastructure/theme/colors';
import spacing from '../../../infrastructure/theme/spacing';

const ProjectCulture = ( {title='Cultures', imgUrl=require('../../../assets/GrassRounded.png'), quantity=6 }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: spacing.md }}>
    <Image  width={20} height={20} source={imgUrl} />
    <Text style={{ fontWeight: 'bold', fontSize: 16, marginRight: spacing.sm, color: colors.text_primary }}>
      {title}
    </Text>
    <Chip textStyle={{ color: colors.white, fontWeight: 'bold', fontSize:8 }} style={{ backgroundColor: colors.error, borderRadius:100, width:16,height:16 }}>
      {quantity}
    </Chip>
  </View>
  )
};

export default ProjectCulture;
