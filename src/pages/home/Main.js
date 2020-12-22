import React, { useContext, useMemo, useState } from 'react'
import { Image, ScrollView, Text, View, StyleSheet,ImageBackground } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useFocusEffect } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { CMD } from '../../config/cmd'
import { i18n } from '../../i18n/index';
import { fetchRequest_get, fetchRequest_post } from '../../common/fetchRequest'
import { List, Flex, WhiteSpace } from '@ant-design/react-native';
const Hearder = () => {
    const [ip, setIp] = useState(null)
    const [ssid, setSsid] = useState(null)
    useFocusEffect(
        React.useCallback(() => {
            getDeviceInfo()
            return () => { }
        }, [])
    );
    const getDeviceInfo = async () => {
        NetInfo.fetch().then(res => {
            setIp(res.details.ipAddress)
            setSsid(res.details.ssid)
        })
        let brand = await DeviceInfo.getBrand()
        let name = await DeviceInfo.getDeviceName()
    }
    return (
        <View>
            <Flex>
                <Flex.Item>
                    <View style={style.wifiInfoHeader}>
                        <Image
                            style={style.tinyLogo}
                            source={require('../../assets/images/earth.png')}
                        />
                    </View>
                </Flex.Item>
                <Flex.Item>
                    {/* <View style={style.wifiInfoHeader}>
                        <Ionicons name='ios-close-outline' size={30} color={'#F56C6C'} />
                        <Text style={{ fontSize: 10 }}>未连接</Text>
                    </View> */}
                    <View style={style.wifiInfoHeader}>
                        <Ionicons name='md-swap-horizontal-outline' size={20} color={'#bef8a1'} />
                        <Text style={{ fontSize: 10 }}>已连接</Text>
                    </View>
                </Flex.Item>
                <Flex.Item>
                    <View style={style.wifiInfoHeader}>
                        <Image
                            style={style.tinyLogo}
                            source={require('../../assets/images/route.png')}
                        />
                    </View>
                </Flex.Item>
                <Flex.Item>
                    <View style={style.wifiInfoHeader}>
                        <Ionicons name='md-swap-horizontal-outline' size={20} color={'#bef8a1'} />
                        <Text style={{ fontSize: 10 }}>已连接</Text>
                    </View>
                </Flex.Item>
                <Flex.Item>
                    <View style={style.wifiInfoHeader}>
                        <Image
                            style={style.tinyLogo}
                            source={require('../../assets/images/phone.png')}
                        />
                    </View>
                </Flex.Item>
            </Flex>
            <View style={{ height: 100, backgroundColor: 'rgba(255, 255, 255, 0)' }}>
                <View style={style.wifiInfoHeader}>
                    <Text style={{ color: '#666' }}>当前连接WiFi: {ssid}</Text>
                    <WhiteSpace size="sm" />
                    <Text style={{ color: '#666' }}>当前网络IP: {ip}</Text>
                </View>
            </View>
        </View>
    )
}
const WifiInfo = () => {
    const [networkInfo, setNetworkInfo] = useState({})
    const [is5g, setIs5g] = useState(false)
    const wifiName_4g = useMemo(() => (
        !networkInfo.wifiName_4g || networkInfo.wifiName_4g == 'Wlan2GClose'
    ), [networkInfo.wifiName_4g])
    const wifiName_5g = useMemo(() => (
        !networkInfo.wifiName_5g || networkInfo.wifiName_5g == 'Wlan2GClose'
    ), [networkInfo.wifiName_5g])

    useFocusEffect(
        React.useCallback(() => {
            getData()
            return () => { }
        }, [])
    );

    const getData = async () => {
        let res = await fetchRequest_get({ cmd: CMD.NETWORK_INFO });
        let res_5g = await fetchRequest_get({ cmd: CMD.WIRELESS5G_CONFIG, subcmd: 0 });
        setNetworkInfo(res)
        setIs5g(res_5g.wifiSames == "1")
    }
    return (
        <View>
            {!is5g ? <>
                <Flex>
                    <Flex.Item>
                        <View style={style.wifiInfoHeader}>
                            <Feather name={wifiName_4g ? 'wifi-off' : 'wifi'} size={50} color={wifiName_4g ? '#F56C6C' : '#bef8a1'} />
                            <Text style={{ color: '#666' }}>Wi-Fi 2.4G</Text>
                            <Text>{wifiName_4g ? '已关闭' : networkInfo.wifiName_4g}</Text>
                        </View>
                    </Flex.Item>
                    <Flex.Item>
                        <View style={style.wifiInfoHeader}>
                            <Feather name={wifiName_5g ? 'wifi-off' : 'wifi'} size={50} color={wifiName_5g ? '#F56C6C' : '#bef8a1'} />
                            <Text style={{ color: '#666' }}>Wi-Fi 5G</Text>
                            <Text>{wifiName_5g ? '已关闭' : networkInfo.wifiName_5g}</Text>
                        </View>
                    </Flex.Item>
                </Flex>
                <Flex>
                    <Flex.Item>
                        <View style={style.wifiInfo}>
                            <Text></Text>
                            <Text>带宽: {i18n.t(`device_status.bandwidth_4g_arr.${networkInfo.bandwidth_4g}`)}</Text>
                            <Text>信道: {networkInfo.channel_4g || '-----'}</Text>
                            <Text>当前模式: {i18n.t(`device_status.mode_4g_arr.${networkInfo.mode_4g}`)}</Text>
                        </View>
                    </Flex.Item>
                    <Flex.Item>
                        <View style={style.wifiInfo}>
                            <Text></Text>
                            <Text>带宽: {i18n.t(`device_status.bandwidth_5g_arr.${networkInfo.bandwidth_5g}`)}</Text>
                            <Text>信道: {networkInfo.channel_5g || '-----'}</Text>
                            <Text>当前模式: {i18n.t(`device_status.mode_5g_arr.${networkInfo.mode_5g}`)}</Text>
                        </View>
                    </Flex.Item>
                </Flex>
            </> :
                <>
                    <Flex>
                        <Flex.Item>
                            <View style={style.wifiInfoHeader}>
                                <Feather name={wifiName_5g ? 'wifi-off' : 'wifi'} size={70} color={wifiName_5g ? '#F56C6C' : '#bef8a1'} />
                                <Text style={{ color: '#666' }}>5G优选</Text>
                                <Text>{wifiName_5g ? '已关闭' : networkInfo.wifiName_5g}</Text>
                            </View>
                        </Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex>
                        <Flex.Item>
                            <View style={style.wifiInfo}>
                                <Text style={{ color: '#666' }}>2.4G Wi-Fi</Text>
                                <Text>带宽: {i18n.t(`device_status.bandwidth_4g_arr.${networkInfo.bandwidth_4g}`)}</Text>
                                <Text>信道: {networkInfo.channel_4g || '-----'}</Text>
                                <Text>当前模式: {i18n.t(`device_status.mode_4g_arr.${networkInfo.mode_4g}`)}</Text>
                            </View>
                        </Flex.Item>
                        <Flex.Item>
                            <View style={style.wifiInfo}>
                                <Text style={{ color: '#666' }}>5G Wi-Fi</Text>
                                <Text>带宽: {i18n.t(`device_status.bandwidth_5g_arr.${networkInfo.bandwidth_5g}`)}</Text>
                                <Text>信道: {networkInfo.channel_5g || '-----'}</Text>
                                <Text>当前模式: {i18n.t(`device_status.mode_5g_arr.${networkInfo.mode_5g}`)}</Text>
                            </View>
                        </Flex.Item>
                    </Flex>
                </>}
        </View>
    )
}
export default Main = () => {
    return (
        <LinearGradient colors={['#fff', '#fff', '#fff']} style={{ height: '100%' }}>
            {/* <ImageBackground source={require('../../assets/images/background_main.jpg')} style={{ width: '100%', height: '100%' }}> */}
            <ScrollView
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <WhiteSpace size="lg" />
                    <Hearder />
                    <WhiteSpace size="lg" />
                    <WifiInfo />
                </View>
            </ScrollView>
        </LinearGradient>
        // {/* </ImageBackground> */}
    )
}
//style
const center = {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
}
const style = StyleSheet.create({
    wifiInfoHeader: {
        ...center,
        height: 100,
    },
    wifiInfo: {
        ...center,
        height: 100,
    },
    tinyLogo: {
        width: 60,
        height: 60,
    },
})