import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import React from 'react';

const Products=({item}) =>{
return(
    <TouchableOpacity style={styles.touchable}>
        <View>
            <Image style={styles.imagen} source= {{uri:item.imagenUrl}} />
        </View>
        <View>
            <Text>{item.nombre}</Text>
            <Text>${item.precio}</Text>
        </View>
    </TouchableOpacity>
)}
const styles= StyleSheet.create({
    imagen:{
        height:100,
        width:'100%'
    },
    touchable:{
        width:300,
        borderColor:'#000',
        borderWidth:1,
        margin:3,   
    },
})
export default Products;