import React, { useReducer } from 'react'
import { View, Button, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomePage1 from './home/HomePage1'
import HomePage2 from './home/HomePage2'
import HomePage3 from './home/HomePage3'

const Tab = createMaterialTopTabNavigator();
export default Info = () => {
    return (
            <Tab.Navigator
                initialRouteName="HomePage1"
                tabBarOptions={{
                    activeTintColor: '#333',
                    labelStyle: { fontSize: 12 },
                    style: { backgroundColor: 'powderblue' },
                }}
            >
                <Tab.Screen
                    name="HomePage1"
                    component={HomePage1}
                    options={{ tabBarLabel: 'HomePage1' }}
                />
                <Tab.Screen
                    name="HomePage2"
                    component={HomePage2}
                    options={{ tabBarLabel: 'HomePage2' }}
                />
                <Tab.Screen
                    name="HomePage3"
                    component={HomePage3}
                    options={{ tabBarLabel: 'HomePage3' }}
                />
            </Tab.Navigator>
    )
}