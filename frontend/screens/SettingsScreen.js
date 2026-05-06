import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.card}>
        <Text>Google Calendar Sync</Text>
      </View>

      <View style={styles.card}>
        <Text>Notification Preferences</Text>
      </View>

      <View style={styles.card}>
        <Text>Privacy Settings</Text>
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
