import React, { useReducer, useEffect } from 'react'
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Wifiset from './setting/Wifiset'
import Wpsset from './setting/Wpsset'
import { CMD } from '../config/cmd'

const Tab = createMaterialTopTabNavigator();
const Wifiset_24g = () => {
    const cmd = {
        get: CMD.WIRELESS_CONFIG,
        get_adv: CMD.WIRELESS_ADVANCE,
        post: CMD.WIRELESS_CONFIG,
        post_adv: CMD.WIRELESS_ADVANCE,
    }
    const option = {
        encryption_option: [
            { value: "OPEN", label: 'None' },
            { value: "WEP", label: 'WEP' },
            { value: "WPAPSK", label: "WPA-PSK" },
            { value: "WPA2PSK", label: "WPA2-PSK" },
            { value: "WPAPSKWPA2PSK", label: "WPA-PSK/WPA2-PSK" },
            { value: "WPA3PSK", label: "WPA3-PSK" },
            { value: "WPA2PSKWPA3PSK", label: "WPA2-PSK/WPA3-PSK" }
        ],
        wpa_option: [
            { label: "TKIP", value: "TKIP" },
            { label: "AES", value: "AES" },
            { label: "TKIP+AES", value: "TKIPAES" }
        ],
        power_option: [
            { label: "100%", value: '1' },
            { label: "75%", value: '2' },
            { label: "50%", value: '3' },
            { label: "35%", value: '4' },
            { label: "15%", value: '5' }
        ],
        channel_option: [
            { label: "自动", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "7", value: "7" },
            { label: "8", value: "8" },
            { label: "9", value: "9" },
            { label: "10", value: "10" },
            { label: "11", value: "11" },
            { label: "12", value: "12" },
            { label: "13", value: "13" }
        ],
        workMode_option: [
            { label: "11b only", value: "1" },
            { label: "11g only", value: "4" },
            { label: "11n only", value: "6" },
            { label: "11b/g", value: "0" },
            { label: "11b/g/n", value: "9" },
            { label: "11g/n/ax", value: "16" },
        ],
        bandwidth_option: [
            { label: "20MHz", value: "0" },
            { label: "20/40MHz", value: "2" },
            { label: "40MHz", value: "1" },
        ],
        wep_option: [
            { label: 'open', value: "OpenSystem" },
            { label: 'share', value: "SharedKey" },
            { label: 'open+share', value: "Both" }
        ],
        keylen_option: [
            { value: "64", label: '64-bit' },
            { value: "128", label: '128-bit' }
        ]
    }
    return <Wifiset id={'2g'} option={option} cmd={cmd} />
}
const Wifiset_5g = () => {
    const option = {
        encryption_option: [
            { value: "OPEN", label: 'None' },
            { value: "WEP", label: 'WEP' },
            { value: "WPAPSK", label: "WPA-PSK" },
            { value: "WPA2PSK", label: "WPA2-PSK" },
            { value: "WPAPSKWPA2PSK", label: "WPA-PSK/WPA2-PSK" },
            { value: "WPA3PSK", label: "WPA3-PSK" },
            { value: "WPA2PSKWPA3PSK", label: "WPA2-PSK/WPA3-PSK" }
        ],
        wpa_option: [
            { label: "TKIP", value: "TKIP" },
            { label: "AES", value: "AES" },
            { label: "TKIP+AES", value: "TKIPAES" }
        ],
        power_option: [
            { name: "100%", value: '100' },
            { name: "75%", value: '80' },
            { name: "50%", value: '50' },
            { name: "35%", value: '25' },
            { name: "15%", value: '10' }
        ],
        channel_option: [
            { label: "自动", value: "0" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "7", value: "7" },
            { label: "8", value: "8" },
            { label: "9", value: "9" },
            { label: "10", value: "10" },
            { label: "11", value: "11" },
            { label: "12", value: "12" },
            { label: "13", value: "13" }
        ],
        workMode_option: [
            { name: "11a only", value: "2" },
            { name: "11a/n", value: "8" },
            { name: "11a/n/ac", value: "14" },
            { name: "11n/ac/ax", value: "17" },
        ],
        bandwidth_option: [
            { name: "20MHz", value: "0" },
            { name: "40MHz", value: "1" },
            { name: "80MHz", value: "2" },
        ],
        wep_option: [
            { label: 'open', value: "OpenSystem" },
            { label: 'share', value: "SharedKey" },
            { label: 'open+share', value: "Both" }
        ],
        keylen_option: [
            { value: "64", label: '64-bit' },
            { value: "128", label: '128-bit' }
        ]
    }
    const cmd = {
        get: CMD.WIRELESS5G_CONFIG,
        get_adv: CMD.WIRELESS5G_ADVANCE,
        post: CMD.WIRELESS5G_CONFIG,
        post_adv: CMD.WIRELESS5G_ADVANCE,
    }
    return <Wifiset id={'5g'} option={option} cmd={cmd} />
}
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