import React, { useState, useEffect, useContext } from 'react'
import { ScrollView, View } from 'react-native';
import { InputItem, Toast, Switch, List, Picker, Button, PickerView, Provider } from '@ant-design/react-native'
export default Wifiset_24g = ({ navigation }) => {
    const [wifiOpen, setWifiOpen] = useState(true)//wifi开关
    const [ssid, setSsid] = useState("")//ssid
    const [password, setPassword] = useState("")//wifi密码
    const [encryType, setEncryType] = useState([])//加密方式
    const [wpaEncryType, setWpaEncryType] = useState([])//wpa加密
    const [wmm, setWmm] = useState(false)//wmm

    const encryption_option = [
        { value: "OPEN", label: 'None' },
        { value: "WEP", label: 'WEP' },
        { value: "WPAPSK", label: "WPA-PSK" },
        { value: "WPA2PSK", label: "WPA2-PSK" },
        { value: "WPAPSKWPA2PSK", label: "WPA-PSK/WPA2-PSK" },
        { value: "WPA3PSK", label: "WPA3-PSK" },
        { value: "WPA2PSKWPA3PSK", label: "WPA2-PSK/WPA3-PSK" }
    ];
    const wpa_option = [
        { label: "TKIP", value: "TKIP" },
        { label: "AES", value: "AES" },
        { label: "TKIP+AES", value: "TKIPAES" }
    ]
    useEffect(() => {
        console.log('Wifiset_24g')
    }, [])
    return (
        <Provider>
            <ScrollView>
                <List>
                    <List.Item
                        extra={
                            <Switch
                                checked={wifiOpen}
                                onChange={val => setWifiOpen(val)}
                            />
                        }
                    >2.4G Wi-Fi开关</List.Item>
                    <InputItem
                        clear
                        value={ssid}
                        onChange={value => setSsid(value)}
                        placeholder="请输入"
                    >Wi-Fi名称</InputItem>
                    <Picker
                        title="选择加密方式"
                        data={encryption_option}
                        cols={1}
                        value={encryType}
                        onChange={val => setEncryType(val)}
                        onOk={val => setEncryType(val)}
                    >
                        <List.Item arrow="horizontal">加密方式</List.Item>
                    </Picker>
                    <Picker
                        title="选择WPA 加密"
                        data={wpa_option}
                        cols={1}
                        value={wpaEncryType}
                        onChange={val => setWpaEncryType(val)}
                        onOk={val => setWpaEncryType(val)}
                    >
                        <List.Item arrow="horizontal">WPA 加密</List.Item>
                    </Picker>
                    <InputItem
                        clear
                        type="password"
                        value={password}
                        onChange={value => setPassword(value)}
                        placeholder="请输入"
                    >密码</InputItem>
                    <List.Item
                        extra={
                            <Switch
                                checked={wmm}
                                onChange={val => setWmm(val)}
                            />
                        }
                    >WMM</List.Item>
                </List>

                <Button type="primary" style={{ marginTop: 20 }}>保存</Button>
            </ScrollView>
        </Provider>
    )
}
