import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import React from 'react';

const Products=({item, onSelectProduct}) =>{
return(
    <TouchableOpacity style={styles.touchable}
        onPress={()=> onSelectProduct(item)}>
        <View>
            <Image style={styles.imagen} source= {{uri:item.imagenUrl}} />
        </View>
        <View style={styles.cajaprecionombre}>
            <Text style={styles.texto}>{item.nombre}</Text>
            <Text style={styles.texto}>${item.precio}</Text>
        </View>
    </TouchableOpacity>
)}
const styles= StyleSheet.create({
    imagen:{
        height:200,
        width:'100%'
    },
    touchable:{
        width:300,
        margin:3, 

          
    },
    cajaprecionombre:{
        margin:3,
    },
    texto:{
        fontWeight:'bold',
        fontSize:20,

    },
})
export default Products;