import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import {categorias} from '../data/categories';

export default function Categories({ navigation }) {
  const handleSelectProduct = (item) => {
    navigation.navigate('Products',{
        name: item.nombre,
        itemID: item.id
    })
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor= {(item)=> item.id}
        renderItem={({item}) =>(
          <TouchableOpacity onPress={() =>handleSelectProduct(item)}>
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
