// src/components/Report.tsx

import * as React from 'react';
import { Portal, Modal, TextInput } from 'react-native-paper';
import { Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

// Define the props interface
interface ReportProps {
  style?: {
    container: StyleProp<ViewStyle>;
    title: StyleProp<TextStyle>;
    subtitle: StyleProp<TextStyle>;
    textArea: StyleProp<ViewStyle>;
    cancelBtn: {
      color: string;
    } & StyleProp<ViewStyle>;
    confirmBtn: StyleProp<ViewStyle>;
  };
}

const Report: React.FC<ReportProps> = ({ style }) => {
  const [visible, setVisible] = React.useState(true);
  const { t } = useTranslation();

  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={style?.container}>
        <Text style={style?.title}>{t('ReportProblem')}</Text>
        <Text style={style?.subtitle}>{t('ExplainProblem')}</Text>
        <TextInput
          placeholder={t('ExplainProblem')}
          style={style?.textArea}
          activeOutlineColor="#ffffff"
          outlineColor="#ffffff"
          multiline={true}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Button title={t('Cancel')} style={style?.cancelBtn} onPress={()=>null} />
          <Button title={t('Send')} style={{}} onPress={()=>null} />
        </View>
      </Modal>
    </Portal>
  );
};

export default Report;
