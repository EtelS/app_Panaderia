import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useSelector } from 'react-redux';

export default function Products({navigation, route}) {

  let categoria= route.params.itemID;

  const articulosFiltrados= useSelector( state => state.items.filteredItems );
  const selectedCategories= useSelector(state=> state.categories.selectCategory)
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
