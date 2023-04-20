import {FlatList, Text, TouchableOpacity, View} from 'react-native';

import ModelDetailTask from './model-detail-task/ModelDetailTask';
import Task from './task/Task';
import {styleListTasks} from './styleListTasks';
import {useState} from 'react';

const ListTasks = ({tasks}) => {
  const [selectedTask, setSelectedTask] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectedTask = (id) => {
    setSelectedTask(tasks.find((task) => task.id === id));
    setModalVisible(true);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleSelectedTask(item.id)}>
      <Task title={item.value} />
    </TouchableOpacity>
  );

  return (
    <View style={styleListTasks.containerListTasks}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        alwaysBounceVertical={false}
      />
      <ModelDetailTask
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        selectedTask={selectedTask}
      />
    </View>
  );
};

export default ListTasks;
