import React, { useState, useEffect, useContext } from 'react'
import { ScrollView, View } from 'react-native';
import { InputItem, Toast, Switch, List, Picker, Button, Portal, Provider } from '@ant-design/react-native'
import base64 from 'react-native-base64'
import { CMD } from '../../config/cmd'
import { fetchRequest_get, fetchRequest_post } from '../../common/fetchRequest'
export default Wifiset_24g = (props) => {
    const [wifiOpen, setWifiOpen] = useState(true)//wifi开关
    const [ssid, setSsid] = useState("")//ssid
    const [password, setPassword] = useState("")//wifi密码
    const [encryType, setEncryType] = useState(['WPAPSKWPA2PSK'])//加密方式
    const [wpaEncryType, setWpaEncryType] = useState(['AES'])//wpa加密
    const [wepType, setWepType] = useState(['OpenSystem'])//WEP认证
    const [keylen, setKeylen] = useState(['64'])//加密长度
    const [key, setKey] = useState('')//密钥
    const [wmm, setWmm] = useState(true)//wmm
    //高级设置
    const [showAdv, setShowAdv] = useState(false)//是否显示高级设置
    const [power, setPower] = useState(['1'])//发射功率
    const [channel, setChannel] = useState(['0'])//信道
    const [workMode, setWorkMode] = useState(['0'])//Wi-Fi工作模式
    const [bandwidth, setBandwidth] = useState(['0'])//带宽
    const option_24 = {
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
    const getData = async () => {
        let res = await fetchRequest_get({ cmd: CMD.WIRELESS_CONFIG, subcmd: 0 });
        let res_adv = await fetchRequest_get({ cmd: CMD.WIRELESS_ADVANCE });
        setWifiOpen(res.wifiOpen == '1')
        setSsid(base64.decode(res.ssid))
        setPassword(res.key)
        setEncryType([res.authenticationType])
        setWpaEncryType([res.wpa])
        setWepType([res.wepauthentication])
        setKeylen([res.keylen])
        setKey(res.key1)
        setWmm(res.wifiwmm == '1')
        setPower([res_adv.txPower])
        setChannel([res_adv.channel])
        setWorkMode([res_adv.wifiWorkMode])
        setBandwidth([res_adv.bandWidth])
    }
    const post = () => {
        const loading = Toast.loading({ content: '保存中...', duration: 10, mask: false })
        postData()
    }
    const postData = () => {
        let params = {

        }
        fetchRequest_post({ cmd: CMD.WIRELESS_CONFIG, subcmd: 0, params })
        setTimeout(() => {
            Portal.remove(loading)
        }, 2000)
    }
    useEffect(() => {
        getData()
    }, [])
    const WifiSet = () => {
        return (
            <View>
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
                {encryType == 'OPEN' ? null : encryType == 'WEP' ?
                    <>
                        <Picker
                            title="选择WEP认证"
                            data={option_24.wep_option}
                            cols={1}
                            value={wepType}
                            onChange={val => setWepType(val)}
                            onOk={val => setWepType(val)}
                        >
                            <List.Item arrow="horizontal">WEP认证</List.Item>
                        </Picker>
                        <Picker
                            title="选择加密长度"
                            data={option_24.keylen_option}
                            cols={1}
                            value={keylen}
                            onChange={val => setKeylen(val)}
                            onOk={val => setKeylen(val)}
                        >
                            <List.Item arrow="horizontal">加密长度</List.Item>
                        </Picker>
                        <InputItem
                            clear
                            value={key}
                            onChange={value => setKey(value)}
                            placeholder="请输入"
                        >密钥</InputItem>
                    </> :
                    <>
                        <Picker
                            title="选择WPA加密"
                            data={option_24.wpa_option}
                            cols={1}
                            value={wpaEncryType}
                            onChange={val => setWpaEncryType(val)}
                            onOk={val => setWpaEncryType(val)}
                        >
                            <List.Item arrow="horizontal">WPA加密</List.Item>
                        </Picker>
                        <InputItem
                            clear
                            type="password"
                            value={password}
                            onChange={value => setPassword(value)}
                            placeholder="请输入"
                        >密码</InputItem>
                    </>}
                <List.Item
                    extra={
                        <Switch
                            checked={wmm}
                            onChange={val => setWmm(val)}
                        />
                    }
                >WMM</List.Item>
                <List.Item
                    extra={
                        <Switch
                            checked={showAdv}
                            onChange={val => setShowAdv(val)}
                        />
                    }
                >显示高级设置</List.Item>
            </View>
        )
    }
    const WifiAdv = () => {
        return (
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
                    >Wi-Fi开关</List.Item>
                    {wifiOpen ? <><WifiSet />{showAdv ? <WifiAdv /> : null}</> : null}
                </List>
                <Button
                    type="primary"
                    style={{ marginTop: 20 }}
                    onPress={() => post()}>
                    保存
                </Button>
            </ScrollView>
        </Provider>
    )
}
