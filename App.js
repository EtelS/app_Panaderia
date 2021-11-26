import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import ShopNavigator from './navigation/ShopNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <ShopNavigator />
      <StatusBar />
    </>
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
