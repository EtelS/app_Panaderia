import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {filteredItem, selectItem} from '../store/actions/items.actions'
import { useDispatch, useSelector } from 'react-redux';

import ItemDetail from '../components/ItemDetail'

export default function Products({navigation, route}) {
const dispatch = useDispatch();

const selectedCategories= useSelector(state=> state.categories.selected)
const articulosFiltrados= useSelector( state => state.items.filteredItem);

useEffect(()=>{
    dispatch(filteredItem(selectedCategories))
},[selectedCategories])


  console.log('articulosFiltrados', articulosFiltrados)
  console.log ('selectedCategories', selectedCategories)

  const renderItem= () => <ItemDetail /> 

  return (
    <View style={styles.container}>
      {/* <Text>{route.params.name}</Text> */}
      <FlatList 
        data= {articulosFiltrados}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={renderItem}
      
      />
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
