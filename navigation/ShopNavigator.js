import {COLORS} from '../constants/color';
import Categories from '../screens/Categories';
import Detail from '../screens/Detail';
import Header from '../components/Header';
import Products from '../screens/Products';
import React from 'react'
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator();


const ShopNavigator= () =>(
        <Stack.Navigator
            screenOptions={{headerStyle:styles.pantinicio}}
                initialRouteName= "Categories">
            <Stack.Screen 
                name="Categories" component={Categories} 
                options={{
                    headerTitle: ()=> <Header />
                }}
                />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen
                name="Products" component={Products} 
                options={({ route}) =>({
                    title:route.params.name,
                })} 
                />
        </Stack.Navigator>
)

const styles= StyleSheet.create({
    pantinicio:{
            backgroundColor:COLORS.primary,
        },
})
export default ShopNavigator;