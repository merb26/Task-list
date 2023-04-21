import {Modal, Text, View} from 'react-native';

import {CustomButton} from './../../custom-button/CustomButton';
import {styleGlobal} from './../../../styles/styleGlobal';
import {styleModelDetailTask} from './styleModelDetailTask';

export const ModelDetailTask = ({
  modalVisible,
  setModalVisible,
  selectedTask,
}) => {
  return (
    <Modal animationType='slide' visible={modalVisible}>
      <View style={styleModelDetailTask.containerDT}>
        <View style={styleModelDetailTask.boxTitleDT}>
          <Text style={[styleModelDetailTask.titleDT, styleGlobal.fontColor]}>
            {selectedTask.value}
          </Text>
        </View>

        <View
          style={[styleGlobal.marginBottom20, styleModelDetailTask.boxDetails]}
        >
          <Text style={styleGlobal.fontColor}>Descripción:</Text>
          <Text style={styleGlobal.fontColor}>Fecha de expiración:</Text>
          <Text style={styleGlobal.fontColor}>
            Fecha creada: {selectedTask.createdDate}
          </Text>
        </View>

        <CustomButton
          title='Salir'
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
    </Modal>
  );
};

export default ModelDetailTask;
