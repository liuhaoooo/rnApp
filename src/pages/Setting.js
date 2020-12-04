import React, { useReducer } from 'react'
import { View, Button, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Wifiset_24g from './setting/Wifiset_24g'
import Wifiset_5g from './setting/Wifiset_5g'
import Wpsset from './setting/Wpsset'

const Tab = createMaterialTopTabNavigator();
export default Setting = () => {
    return (
            <Tab.Navigator
                initialRouteName="wifi_24"
                tabBarOptions={{
                    activeTintColor: '#333',
                    labelStyle: { fontSize: 12 },
                    style: { backgroundColor: 'powderblue' },
                }}
            >
                <Tab.Screen
                    name="wifi_24"
                    component={Wifiset_24g}
                    options={{ tabBarLabel: 'Wi-Fi 2G设置' }}
                />
                <Tab.Screen
                    name="wifi_5"
                    component={Wifiset_5g}
                    options={{ tabBarLabel: 'Wi-Fi 5G设置' }}
                />
                <Tab.Screen
                    name="wps"
                    component={Wpsset}
                    options={{ tabBarLabel: 'WPS 设置' }}
                />
            </Tab.Navigator>
    )
}