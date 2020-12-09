import React, { useReducer, useCallback } from 'react'
import { i18n } from '../i18n/index';
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
            initialRouteName="Info"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}
        >
            <Tab.Screen
                name="Info"
                component={Info}
                options={{
                    tabBarLabel: i18n.t('home.home'),
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name='home' size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Status"
                component={Status}
                options={{
                    tabBarLabel: i18n.t('home.status'),
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name='artstation' size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: i18n.t('home.setting'),
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="cog" size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Me"
                component={Me}
                options={{
                    tabBarLabel: i18n.t('home.me'),
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name='account-circle' size={size} color={color} />;
                    }
                }}
            />
        </Tab.Navigator>
    )
}
