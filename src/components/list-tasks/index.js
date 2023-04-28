import { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ModalDeleteTask } from './modal-delete-task/ModalDeleteTask';
import ModelDetailTask from './model-detail-task/ModelDetailTask';
import { styles } from './styles';
import Task from './task/Task';

const ListTasks = ({ tasks, setTasks }) => {
  const [selectedTask, setSelectedTask] = useState([]);
  const [modalVisibleDetail, setModalVisibleDetail] = useState(false);
  const [modalVisibleDelete, setModalVisibleDelete] = useState(false);

  const onHandleSelectedTask = (id, modal) => {
    setSelectedTask(tasks.find((task) => task.id === id));
    switch (modal) {
      case 'detail':
        setModalVisibleDetail(!modalVisibleDetail);
        break;
      case 'delete':
        setModalVisibleDelete(!modalVisibleDelete);
        break;
    }
  };

  const handleDeleteTask = () => {
    setTasks(tasks.filter((task) => task.id !== selectedTask.id));
    setModalVisibleDelete(!modalVisibleDelete);
  };

  const renderTask = ({ item }) => (
    <View style={styles.boxTaskRender}>
      <TouchableOpacity
        style={styles.styleTask}
        onPress={() => onHandleSelectedTask(item.id, 'detail')}>
        <Task title={item.value} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.styleIcon}
        onPress={() => onHandleSelectedTask(item.id, 'delete')}>
        <Icon name="trash" size={30} color="#FFFBDB" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.containerListTasks}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        alwaysBounceVertical={false}
      />
      <ModelDetailTask
        setModalVisible={setModalVisibleDetail}
        modalVisible={modalVisibleDetail}
        selectedTask={selectedTask}
      />
      <ModalDeleteTask
        modalVisible={modalVisibleDelete}
        onDeleteTask={handleDeleteTask}
        setModalVisible={setModalVisibleDelete}
      />
    </View>
  );
};

export default ListTasks;
