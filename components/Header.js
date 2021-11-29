import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {useFonts} from 'expo-font';

const Header = ()=>{
    const [loaded] = useFonts({
        Marker: require('../assets/fonts/Oi-Regular.ttf'),
      });
      
      if (!loaded) {
        return null;
      }
    
    return(
        <>
        <Text style={styles.title}>Feria Americana!</Text>
        <TouchableOpacity onPress={()=>console.log('Aca deberia ir al carrito')}>
            <AntDesign name="shoppingcart" size={24} color="white" />
        </TouchableOpacity>
        </>
    );
};

const styles= StyleSheet.create({
    title:{
        textAlign:'center',
        color: '#fff',
        fontFamily:'Marker',
        
    },
})
export default Header;