import {Text, View} from 'react-native';

import {styleTask} from './styleTask';

const Task = ({title}) => {
  return (
    <View style={styleTask.boxTask}>
      <Text style={styleTask.text}>{title}</Text>
    </View>
  );
};

export default Task;
