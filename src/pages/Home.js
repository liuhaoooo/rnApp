import React, { useReducer } from 'react'
import { View, Button, Text, Alert } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Me from './Me'
import Info from './Info'
import Status from './Status'
import Setting from './Setting'

const Tab = createBottomTabNavigator();
export default Home = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: Colors.dark,
            }}
        >
            <Tab.Screen
                name="Info"
                component={Info}
                options={{
                    tabBarLabel: '首页',
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name='home' size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Status"
                component={Status}
                options={{
                    tabBarLabel: '设备',
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name='artstation' size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: '设置',
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="cog" size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Me"
                component={Me}
                options={{
                    tabBarLabel: '我的',
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name='account-circle' size={size} color={color} />;
                    }
                }}
            />
        </Tab.Navigator>
    )
}
