import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Products from '../components/Products'
import {filteredItem} from '../store/actions/items.actions'

const ItemList= ({navigation})=> {
const dispatch = useDispatch();

const selectedCategories= useSelector(state=> state.categories.selected)
const articulosFiltrados= useSelector( state => state.items.filteredItem);

useEffect(()=>{
    dispatch(filteredItem(selectedCategories))
},[selectedCategories])



  const renderItem= (itemData) => <Products item={itemData.item}/> 

  return (
    <View style={styles.container}>
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
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    width:'100%',
    height: Dimensions.get('window').height*0.5,
  },
});
export default connect()(ItemList)