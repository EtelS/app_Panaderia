import CartNavigator from './CartNavigator';
import React from 'react';
import ShopNavigator from './ShopNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs= createBottomTabNavigator();

const TabNavigator = () =>{
    return(
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="ShopTab" component={ShopNavigator}/>
            <BottomTabs.Screen name="CartTab" component={CartNavigator}/>
        </BottomTabs.Navigator>
    )
}
export default TabNavigator;
