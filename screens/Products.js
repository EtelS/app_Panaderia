import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { useSelector } from 'react-redux';

export default function Products({navigation, route}) {


  const articulosFiltrados= useSelector( state => state.items.filteredItems );
  const selectedCategories= useSelector(state=> state.categories.selected)
  console.log('articulosFiltrados', articulosFiltrados)
  console.log ('selectedCategories', selectedCategories)

  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
      
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
