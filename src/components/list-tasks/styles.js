import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerListTasks: {
    marginVertical: 15,
  },

  boxTaskRender: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },

  styleTask: {
    width: '85%',
  },

  styleIcon: {
    // width: '15%',
    backgroundColor: '#e63946',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 5,
  },
});
