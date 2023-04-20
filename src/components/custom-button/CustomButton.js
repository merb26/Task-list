import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B9D2B1',
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    color: '#4F5D75',
    fontSize: 20,
  },
});

export default CustomButton;
