import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import {filteredItem, selectItem} from '../store/actions/items.actions'

import Products from '../components/Products'

const ItemList= ({navigation})=> {
const dispatch = useDispatch();

const selectedCategories= useSelector(state=> state.categories.selected)
const articulosFiltrados= useSelector( state => state.items.filteredItem);

useEffect(()=>{
    dispatch(filteredItem(selectedCategories))
},[selectedCategories])

const handlerSelected=(producto) =>{
    dispatch(selectItem(producto.id))
    navigation.navigate("ItemDetail", {name: producto.nombre})
}


  const renderItem= (itemData) => <Products item={itemData.item} onSelectProduct={handlerSelected}/> 

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
  },
});
export default connect()(ItemList)