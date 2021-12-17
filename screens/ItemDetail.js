import { Image, StyleSheet, Text, View } from 'react-native';
import { connect, useSelector } from 'react-redux';

import React from 'react';

const ItemDetail= () => {
  const item= useSelector (state => state.items.selected)

  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.imagen} source= {{uri:item.imagenUrl}} />
        </View>
        <View style={styles.cajaprecionombre}>
            <Text style={styles.texto}>{item.nombre}</Text>
            <Text style={styles.texto}>${item.precio}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
     justifyContent: 'center',
    width:300,
  },
  imagen:{
    height:200,
    width:'100%'
},

cajaprecionombre:{
    margin:3,
},
texto:{
    fontWeight:'bold',
    fontSize:20,

},
});

export default connect()(ItemDetail)