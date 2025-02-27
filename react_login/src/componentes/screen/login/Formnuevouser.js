import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';

const Formnuevouser = () => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </PaperProvider>
  );
};

export default Formnuevouser;
