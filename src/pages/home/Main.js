import React, { useContext, useEffect } from 'react'
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useFocusEffect } from '@react-navigation/native';
import { NetworkInfo } from "react-native-network-info";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { List, Flex, Switch, Picker, WhiteSpace, Modal } from '@ant-design/react-native';
export default Main = () => {
    useFocusEffect(
        React.useCallback(() => {
            getDeviceInfo()
            return () => { }
        }, [])
    );
    const getDeviceInfo = async () => {
        NetworkInfo.getIPV4Address().then(data => {
            console.log(data, '=================')
        })
        NetworkInfo.getSSID().then(data => {
            console.log(data, '=================')
        })
        DeviceInfo.getCarrier().then(data => {
            console.log(data, '=================')
        })
        // 网络信息
        // NetworkInfo.getIPAddress()
        // NetworkInfo.getIPV4Address()
        // NetworkInfo.getBroadcast()
        // NetworkInfo.getSSID()
        // NetworkInfo.getSubnet()
        // NetworkInfo.getGatewayIPAddress()
        // NetworkInfo.getFrequency()
        // 设备
        // await console.log('品牌:', DeviceInfo.getBrand());
        // await console.log('当前应用名称:', DeviceInfo.getApplicationName());
        // await console.log('应用编译版本号:', DeviceInfo.getBuildNumber());
        // await console.log('获取应用程序包标识符:', DeviceInfo.getBundleId());
        // await console.log('运营商名称:', DeviceInfo.getCarrier());
        // await console.log('设备ID:', DeviceInfo.getDeviceId());
        // await console.log('设备名称:', DeviceInfo.getDeviceName());
        // await console.log('获取应用初始安装时间:', DeviceInfo.getFirstInstallTime());
        // await console.log('设备字体大小:', DeviceInfo.getFontScale());
        // await console.log('剩余存储容量(字节):', DeviceInfo.getFreeDiskStorage());
        // await console.log('获取应用上次更新时间:', DeviceInfo.getLastUpdateTime());
        // await console.log('设备制造商:', DeviceInfo.getManufacturer());
        // await console.log('获取JVM试图使用的最大内存量(字节):', DeviceInfo.getMaxMemory());
        // await console.log('获取设备模式:', DeviceInfo.getModel());
        // await console.log('获取电话号码:', DeviceInfo.getPhoneNumber());
        // await console.log('获取应用程序可读版本:', DeviceInfo.getReadableVersion());
        // await console.log('设备唯一序列号:', DeviceInfo.getSerialNumber());
        // await console.log('获取系统名称:', DeviceInfo.getSystemName());
        // await console.log('获取系统版本:', DeviceInfo.getSystemVersion());
        // await console.log('完整磁盘空间大小(字节):', DeviceInfo.getTotalDiskCapacity());
        // await console.log('设备总内存(字节):', DeviceInfo.getTotalMemory());
        // await console.log('设备用户代理:', DeviceInfo.getUserAgent());
        // await console.log('设备版本:', DeviceInfo.getVersion());
    }
    return (
        <View>
            <Flex>
                <Flex.Item>
                    <View style={style.wifiInfoCenter}>
                        <Image
                            style={style.tinyLogo}
                            source={require('../../assets/images/earth.png')}
                        />
                    </View>
                </Flex.Item>
                <Flex.Item>
                    <View style={style.wifiInfoCenter}>
                        <Ionicons name='md-ellipsis-horizontal' size={30} color={'#bef8a1'} />
                        <Text style={{fontSize:10}}>已连接</Text>
                    </View>
                </Flex.Item>
                <Flex.Item>
                    <View style={style.wifiInfoCenter}>
                        <Image
                            style={style.tinyLogo}
                            source={require('../../assets/images/route.png')}
                        />
                    </View>
                </Flex.Item>
                <Flex.Item>
                    <View style={style.wifiInfoCenter}>
                        <Ionicons name='ios-close-outline' size={30} color={'#F56C6C'} />
                        <Text style={{fontSize:10}}>未连接</Text>
                    </View>
                </Flex.Item>
                <Flex.Item>
                    <View style={style.wifiInfoCenter}>
                        <Image
                            style={style.tinyLogo}
                            source={require('../../assets/images/phone.png')}
                        />
                    </View>
                </Flex.Item>
            </Flex>
            <WhiteSpace size="lg" />
            <Flex>
                <Flex.Item>
                    <View style={style.wifiInfoCenter}>
                        <Ionicons name='ios-wifi' size={60} color={'#bef8a1'} />
                        <Text>Wi-Fi 2.4G</Text>
                    </View>
                </Flex.Item>
                <Flex.Item>
                    <View style={style.wifiInfoCenter}>
                        <Ionicons name='ios-wifi' size={60} color={'#bef8a1'} />
                        <Text>Wi-Fi 5G</Text>
                    </View>
                </Flex.Item>
            </Flex>
        </View>
    )
}

const style = StyleSheet.create({
    wifiInfoCenter: {
        height: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    tinyLogo: {
        width: 60,
        height: 60,
    },
})