import {Button, TextInput, View} from 'react-native';

import {styleAddTask} from './styleAddTask';

const AddTask = () => {
  return (
    <View style={styleAddTask.containerAdd}>
      <TextInput
        placeholder='Agrega una tarea'
        style={styleAddTask.txtInpAdd}
      />
      <Button title='+' />
    </View>
  );
};

export default AddTask;
