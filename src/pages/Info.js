import React, { useReducer } from 'react'
import { View, Button, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
export default Info = () => {
    return (
            <Tab.Navigator
                initialRouteName="Page1"
                tabBarOptions={{
                    activeTintColor: '#333',
                    labelStyle: { fontSize: 12 },
                    style: { backgroundColor: 'powderblue' },
                }}
            >
                <Tab.Screen
                    name="Page1"
                    component={Page1}
                    options={{ tabBarLabel: 'Home' }}
                />
                <Tab.Screen
                    name="Page2"
                    component={Page2}
                    options={{ tabBarLabel: 'Updates' }}
                />
                <Tab.Screen
                    name="Page3"
                    component={Page3}
                    options={{ tabBarLabel: 'Profile' }}
                />
            </Tab.Navigator>
    )
}

const Page1 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Page1</Text>
        </View>
    )
}
const Page2 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Page2</Text>
        </View>
    )
}
const Page3 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Page3</Text>
        </View>
    )
}