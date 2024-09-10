import React from 'react';
import { View, Text} from 'react-native';

import spacing from '../../../infrastructure/theme/spacing';

import ProjectLegendItem from '../ProjectLegendItem/ProjectLegendItem';

interface Legend {
  title: string;
  color: string;
}

interface ProjectLegendItemProps {
  legends: Legend[];
}


const ProjectLegend: React.FC<ProjectLegendItemProps> = ({ legends = [] }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs }} >
      {
        legends.map(({title, color }) => (
          <ProjectLegendItem key={title} title={title} color={color} />
        )) 
      }
    </View>
  )
};

export default ProjectLegend;
