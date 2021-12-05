import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { selectCategory } from '../store/actions/category.actions';

export default function Categories({ navigation }) {
  const dispatch= useDispatch();
  const categories = useSelector(state => state.categories.categories);

  const handleSelectCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products',{
        name: item.nombre,
        itemID: item.id
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor= {(item)=> item.id}
        renderItem={({item}) =>(
          <TouchableOpacity onPress={() =>handleSelectCategory(item)}>
            <Text>{item.nombre}</Text>
          </TouchableOpacity>
        )
        }
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
