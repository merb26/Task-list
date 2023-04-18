import {StyleSheet, View} from 'react-native';

import AddTask from './src/components/add-task/AddTask';
import ListTasks from './src/components/list-tasks/ListTasks';

export default function App() {
  return (
    <View style={styles.container}>
      <AddTask />
      <ListTasks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBDB',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
});
