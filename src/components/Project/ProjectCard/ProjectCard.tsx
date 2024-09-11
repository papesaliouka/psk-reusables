import React from 'react';
import { View} from 'react-native';
import { Card} from 'react-native-paper';
import { folderStyle as styles } from '../../../infrastructure/theme/style';

import colors from '../../../infrastructure/theme/colors';
import ProjectHeader from '../ProjectHeader/ProjectHeader';
import ProjectItemCard from '../ProjectItemCard/ProjectItemCard';
import ProjectCulture from '../ProjectCulture/ProjectCulture';

import ProjectLegend from '../ProjectLegend/ProjectLegend';



const ProjectCard = ( {header=false, navigation} ) => {

  const legends = [
    {title:'Riz', color: colors.blue},
    {title:'Cacao', color: colors.yellow},
    {title:'Niebe', color: colors.violet},
    {title:'Mais', color: colors.orange},
    {title:'Ail', color: colors.sucess}
  ];

  const navigateToZoneView = () => {
    navigation.navigate('ZoneView');
  } 

  const navigateToSurfaceView = () => {
    navigation.navigate('FarmerView');
  }



  return (
    <Card style={styles.container}>
      {header && <ProjectHeader title='Faitrade' navigation={navigation} />}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}} >
        <ProjectItemCard title='Surface occupées' quantity={2757} unit='Hectares' imgUrl={require('../../../assets/LayersRounded.png')} onPress={navigateToSurfaceView}  />
        <ProjectItemCard title='Zone(s)' quantity={20} unit='' imgUrl={require('../../../assets/maximize-02.png')} onPress={navigateToZoneView}   />
      </View>
      <ProjectCulture title='Cultures' imgUrl={require('../../../assets/GrassRounded.png')} quantity={6} />
      <ProjectLegend legends={legends} />    
    </Card>
  );
};

export default ProjectCard;