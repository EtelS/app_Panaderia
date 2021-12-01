import { StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import CartNavigator from './CartNavigator';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import ShopNavigator from './ShopNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs= createBottomTabNavigator();

const TabNavigator = () =>{
    return(
        <BottomTabs.Navigator 
            screenOptions={{
                headerShown:false,
                tabBarStyle: styles.tabBar,
                tabBarShowLabel:false,
            }}>
            <BottomTabs.Screen 
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View>
                            {focused ? 
                            <Ionicons name="md-home" size={24} color="#ec6d74"/>: 
                            <Ionicons name="home-outline" size={24} color="#ec6d74" />
                            }
                        </View>
                    )
                }}
                />
            <BottomTabs.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View>
                            {focused ? 
                            <Entypo name="shopping-cart" size={24} color="#ec6d74" /> :
                            <AntDesign name="shoppingcart" size={24} color="#ec6d74" />
                            }
                        </View>
                    )
                }}/>
        </BottomTabs.Navigator>
    )
}

const styles= StyleSheet.create({
    tabBar: {
        position:'absolute',
        bottom: 25,
        left: 20,
        right:20,
        borderRadius: 15,
        height: 90,
        color:'#ec6d74' ,
        shadowColor: '#7f5df0',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,

    },
})
export default TabNavigator;
