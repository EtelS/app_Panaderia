import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Categories({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Categorias</Text>
      <Button onPress={() => navigation.navigate('Products')}
             title='IR A LOS PRODUCTOS' />

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
