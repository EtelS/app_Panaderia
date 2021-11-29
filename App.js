import { StyleSheet, Text, View } from 'react-native';

import MainNavigator from './navigation';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <MainNavigator />
      <StatusBar style="auto"/>
    </>
  );
}

