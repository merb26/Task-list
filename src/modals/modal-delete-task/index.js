import { Modal, Text, View } from 'react-native';

import { stylesDetail } from './../modal-detail-task/styles';
import { styles } from './styles';
import { styleGlobal } from '../../../styles/style-global';
import CustomButton from '../../custom-button';

export const ModalDeleteTask = ({ modalVisible, onDeleteTask, setModalVisible }) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={stylesDetail.containerDT}>
        <View style={stylesDetail.boxTitleDT}>
          <Text style={[stylesDetail.titleDT, styleGlobal.fontColor]}>
            ¿Estás seguro de eliminar la tarea?
          </Text>
        </View>

        <View style={styles.gapButtons}>
          <CustomButton title="Eliminar" onPress={() => onDeleteTask()} />

          <CustomButton title="Cancelar" onPress={() => setModalVisible(!modalVisible)} />
        </View>
      </View>
    </Modal>
  );
};
