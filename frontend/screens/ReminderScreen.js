import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ReminderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellness Reminders</Text>

      <View style={styles.card}>
        <Text>Drink water</Text>
      </View>

      <View style={styles.card}>
        <Text>Take a short break</Text>
      </View>

      <View style={styles.card}>
        <Text>Stretch and relax</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F8FA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
  },
});
