import {FlatList, Text, View} from 'react-native';

import Task from './task/Task';
import {styleListTasks} from './styleListTasks';

const ListTasks = ({tasks}) => {
  const renderItem = ({item}) => <Task title={item.value} />;

  return (
    <View style={styleListTasks.containerListTasks}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default ListTasks;
