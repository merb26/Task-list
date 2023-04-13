import {StyleSheet, Text, View} from 'react-native';

import {StatusBar} from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>¡HELLO WORLD!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16A085',
    color: '#CD6155',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
