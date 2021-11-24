import Categories from '../screens/Categories';
import Detail from '../screens/Detail';
import { NavigationContainer } from '@react-navigation/native';
import Products from '../screens/Products';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack= createNativeStackNavigator();

const ShopNavigator= () =>(
    <NavigationContainer>
        <Stack.Navigator initialRouteName= "Categories">
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default ShopNavigator;