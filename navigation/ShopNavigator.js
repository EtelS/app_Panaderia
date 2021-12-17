import {COLORS} from '../constants/color';
import Categories from '../screens/Categories';
import Header from '../components/Header';
import ItemDetail from '../screens/ItemDetail';
import ItemList from '../screens/ItemList';
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
            <Stack.Screen name="ItemDetail" component={ItemDetail} />
            <Stack.Screen
                name="ItemList" component={ItemList} 
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