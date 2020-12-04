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
    //高级设置
    const [power, setPower] = useState([])//发射功率
    const [channel, setChannel] = useState([])//信道
    const [workMode, setWorkMode] = useState([])//Wi-Fi工作模式
    const [bandwidth, setBandwidth] = useState([])//带宽
    const option_24 = {
        encryption_option:[
            { value: "OPEN", label: 'None' },
            { value: "WEP", label: 'WEP' },
            { value: "WPAPSK", label: "WPA-PSK" },
            { value: "WPA2PSK", label: "WPA2-PSK" },
            { value: "WPAPSKWPA2PSK", label: "WPA-PSK/WPA2-PSK" },
            { value: "WPA3PSK", label: "WPA3-PSK" },
            { value: "WPA2PSKWPA3PSK", label: "WPA2-PSK/WPA3-PSK" }
        ],
        wpa_option:[
            { label: "TKIP", value: "TKIP" },
            { label: "AES", value: "AES" },
            { label: "TKIP+AES", value: "TKIPAES" }
        ],
        power_option:[
            { label: "100%", value: '1' },
            { label: "75%", value: '2' },
            { label: "50%", value: '3' },
            { label: "35%", value: '4' },
            { label: "15%", value: '5' }
        ],
        channel_option:[
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
        workMode_option:[
            { label: "11b only", value: "1" },
            { label: "11g only", value: "4" },
            { label: "11n only", value: "6" },
            { label: "11b/g", value: "0" },
            { label: "11b/g/n", value: "9" },
            { label: "11g/n/ax", value: "16" },
        ],
        bandwidth_option:[
            { label: "20MHz", value: "0" },
            { label: "20/40MHz", value: "2" },
            { label: "40MHz", value: "1" },
        ],
    }
    useEffect(() => {
        console.log('Wifiset_24g')
    }, [])
    const WifiAdv = ()=>{
        return(
            <View>
                <Picker
                        title="选择发射功率"
                        data={option_24.power_option}
                        cols={1}
                        value={power}
                        onChange={val => setPower(val)}
                        onOk={val => setPower(val)}
                    >
                        <List.Item arrow="horizontal">发射功率</List.Item>
                    </Picker>
                    <Picker
                        title="选择信道"
                        data={option_24.channel_option}
                        cols={1}
                        value={channel}
                        onChange={val => setChannel(val)}
                        onOk={val => setChannel(val)}
                    >
                        <List.Item arrow="horizontal">信道</List.Item>
                    </Picker>
                    <Picker
                        title="选择Wi-Fi工作模式"
                        data={option_24.workMode_option}
                        cols={1}
                        value={workMode}
                        onChange={val => setWorkMode(val)}
                        onOk={val => setWorkMode(val)}
                    >
                        <List.Item arrow="horizontal">Wi-Fi工作模式</List.Item>
                    </Picker>
                    <Picker
                        title="选择带宽"
                        data={option_24.bandwidth_option}
                        cols={1}
                        value={bandwidth}
                        onChange={val => setBandwidth(val)}
                        onOk={val => setBandwidth(val)}
                    >
                        <List.Item arrow="horizontal">带宽</List.Item>
                    </Picker>
            </View>
        )
    }
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
                        data={option_24.encryption_option}
                        cols={1}
                        value={encryType}
                        onChange={val => setEncryType(val)}
                        onOk={val => setEncryType(val)}
                    >
                        <List.Item arrow="horizontal">加密方式</List.Item>
                    </Picker>
                    <Picker
                        title="选择WPA 加密"
                        data={option_24.wpa_option}
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
                    {
                        wifiOpen?<WifiAdv/>:null
                    }
                </List>

                <Button
                    type="primary"
                    style={{ marginTop: 20}}
                    onPress={() => Toast.loading({ content: 'Loading...', duration: 1, mask: false })}>
                    保存
                </Button>
            </ScrollView>
        </Provider>
    )
}
