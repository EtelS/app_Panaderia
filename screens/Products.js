import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {ApiItems} from '../data/articulos';
import { articulos } from '../data/articulos';

export default function Products({navigation, route}) {

  let categoria= route.params.itemID;

  const articulosFiltrados= articulos.filter(art=>art.catid===categoria);
  console.log('articulosFiltrados', articulosFiltrados)



  // const [articulos, setArticulos]= useState([]);

  // useEffect(()=>{
  //   const prom= new Promise((resolve, reject)=>{
  //     setTimeout(()=>{
  //       if (categoria){
  //         resolve(

  //           ApiItems.get2(categoria)
  //         )
  //       }
  //     })
  // })
  // prom.then((res)=>{
  //     setArticulos(res)
  // })
  // },[categoria]);

  // console.log('articulos', articulos)


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
