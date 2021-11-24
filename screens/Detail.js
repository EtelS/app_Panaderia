import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
