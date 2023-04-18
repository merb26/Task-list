import {Text, View} from 'react-native';

import Task from './task/Task';
import {styleListTasks} from './styleListTasks';

const ListTasks = () => {
  return (
    <View style={styleListTasks.containerListTasks}>
      <Task title='Estudiar React Native' />
      <Task title='Ir al Gym' />
    </View>
  );
};

export default ListTasks;
