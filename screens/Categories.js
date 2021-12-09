import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { LinearGradient } from 'expo-linear-gradient';
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
       
          <LinearGradient
              colors={['#ec6d74', '#EA969A', '#FDC6C9']}
              style={styles.touchable}>

          <TouchableOpacity onPress={() =>handleSelectCategory(item)}
                            >
            <Text style={styles.text}>{item.nombre}</Text>
          </TouchableOpacity>
          </LinearGradient>
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
  touchable:{
    width:300,
    height:100,
    alignItems:'center',
    justifyContent: 'center',
    marginTop:20,
    borderRadius:15,
  },

  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },

});
