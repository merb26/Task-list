import { useState } from 'react';
import { View } from 'react-native';

import AddTask from './components/add-task/index';
import ListTasks from './components/list-tasks';
import styles from './styles';

const date = new Date();
const dateFormat = date.toLocaleDateString();

const App = () => {
  const [valueInputText, setValueInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddEvent = () => {
    if (valueInputText.length === 0) return;

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
      <AddTask text={valueInputText} setText={setValueInputText} onAddEvent={handleAddEvent} />
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </View>
  );
};

export default App;
