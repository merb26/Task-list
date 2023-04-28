import { Modal, Text, View } from 'react-native';

import { stylesDetail } from './styles';
import { CustomButton } from '../../components/custom-button/index';
import { styleGlobal } from '../../styles/style-global';

export const ModalDetailTask = ({ modalVisible, setModalVisible, selectedTask }) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={stylesDetail.containerDT}>
        <View style={stylesDetail.boxTitleDT}>
          <Text style={[stylesDetail.titleDT, styleGlobal.fontColor]}>{selectedTask.value}</Text>
        </View>

        <View style={[styleGlobal.marginBottom20, stylesDetail.boxDetails]}>
          <Text style={styleGlobal.fontColor}>Descripción:</Text>
          <Text style={styleGlobal.fontColor}>Fecha de expiración:</Text>
          <Text style={styleGlobal.fontColor}>Fecha creada: {selectedTask.createdDate}</Text>
        </View>

        <CustomButton title="Salir" onPress={() => setModalVisible(!modalVisible)} />
      </View>
    </Modal>
  );
};

export default ModalDetailTask;
