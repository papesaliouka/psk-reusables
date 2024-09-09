// src/components/Loader.tsx

import * as React from 'react';
import { Portal, Modal, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

// Define the props interface
interface LoaderProps {
  text: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  const [visible, setVisible] = React.useState(true);
  const { t } = useTranslation();

  const hideModal = () => setVisible(false);

  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
        <Text style={styles.textStyle}>{t(`${text}`,`${text}`)}</Text>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textStyle: {
    marginLeft: 16,
  },
});

export default Loader;
