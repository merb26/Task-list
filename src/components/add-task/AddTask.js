import {Button, TextInput, View} from 'react-native';

import {styleAddTask} from './styleAddTask';

const AddTask = ({text, setText, onAddEvent}) => {
  return (
    <View style={styleAddTask.containerAdd}>
      <TextInput
        placeholder='Agrega una tarea'
        style={styleAddTask.txtInpAdd}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button title='+' onPress={() => onAddEvent()} />
    </View>
  );
};

export default AddTask;
