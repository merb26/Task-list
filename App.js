import {StyleSheet, View} from 'react-native';

import AddTask from './src/components/add-task/AddTask';
import ListTasks from './src/components/list-tasks/ListTasks';
import {useState} from 'react';

export default function App() {
  const [valueInputText, setValueInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddEvent = () => {
    if (valueInputText.length === 0) return;

    const date = new Date();
    const dateFormat = date.toLocaleDateString();

    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: valueInputText,
        createdDate: dateFormat,
      },
    ]);

    setValueInputText('');
  };

  return (
    <View style={styles.container}>
      <AddTask
        text={valueInputText}
        setText={setValueInputText}
        onAddEvent={handleAddEvent}
      />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBDB',
    paddingTop: 40,
    paddingHorizontal: 15,
    paddingBottom: 45,
  },
});
