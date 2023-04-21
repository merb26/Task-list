import {Modal, Text, View} from 'react-native';

import CustomButton from '../../custom-button/CustomButton';
import {styleGlobal} from '../../../styles/styleGlobal';
import {styleModalDeleteTask} from './styleModalDeleteTask';
import {styleModelDetailTask} from '../model-detail-task/styleModelDetailTask';

export const ModalDeleteTask = ({
  modalVisible,
  onDeleteTask,
  setModalVisible,
}) => {
  return (
    <Modal animationType='slide' visible={modalVisible}>
      <View style={styleModelDetailTask.containerDT}>
        <View style={styleModelDetailTask.boxTitleDT}>
          <Text style={[styleModelDetailTask.titleDT, styleGlobal.fontColor]}>
            ¿Estás seguro de eliminar la tarea?
          </Text>
        </View>
        <View style={styleModalDeleteTask.gapButtons}>
          <CustomButton title='Eliminar' onPress={() => onDeleteTask()} />

          <CustomButton
            title='Cancelar'
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </View>
    </Modal>
  );
};
