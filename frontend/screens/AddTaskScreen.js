import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import API from '../services/api';

export default function AddTaskScreen() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  const submitTask = () => {
    API.post('/tasks', {
      title,
      time,
    })
      .then(() => {
        setTitle('');
        setTime('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Task title'
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder='Time'
        style={styles.input}
        value={time}
        onChangeText={setTime}
      />

      <TouchableOpacity style={styles.button} onPress={submitTask}>
        <Text style={styles.buttonText}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F8FA',
  },
  input: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#6C8EF5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
