import React, { useReducer, useCallback } from 'react'
import { i18n } from '../i18n/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Main from './home/Main'
import Me from './home/Me'
import Info from './home/Info'
import Status from './home/Status'
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
//主要内容
const Pages = () => {
    return (
        <Tab.Navigator
            initialRouteName="main"
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
                name="main"
                component={Main}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="globe-americas" size={50} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Status}
                options={{
                    tabBarLabel: i18n.t('home.me'),
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="account-circle" size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Me"
                component={Me}
                options={{
                    tabBarLabel: i18n.t('home.setting'),
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name='cog' size={size} color={color} />;
                    }
                }}
            />
        </Tab.Navigator>
    )
}
//抽屉内容
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="退出登陆"
                onPress={() => { }}
            />
        </DrawerContentScrollView>
    );
}
export default Home = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Pages" component={Pages} options={{ title: '首页' }} />
        </Drawer.Navigator>
    )
}