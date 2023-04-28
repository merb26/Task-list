import { TextInput, View } from 'react-native';

import { styles } from './styles';
import CustomButton from '../custom-button';

const AddTask = ({ text, setText, onAddEvent }) => {
  return (
    <View style={styles.containerAdd}>
      <TextInput
        placeholder="Agrega una tarea"
        style={styles.txtInputAdd}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <CustomButton title="+" onPress={onAddEvent} />
    </View>
  );
};

export default AddTask;
