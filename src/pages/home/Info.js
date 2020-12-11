import React, { useContext, useEffect, useState } from 'react'
import { View, Button, Text, ScrollView } from 'react-native'
import { List, WhiteSpace, WingBlank, SwipeAction } from '@ant-design/react-native';
import { useFocusEffect } from '@react-navigation/native';
import { CMD } from '../../config/cmd'
import { i18n } from '../../i18n/index';
import { fetchRequest_get, fetchRequest_post } from '../../common/fetchRequest'
export default Info = () => {
    const [deviceInfo, setDeviceInfo] = useState([])
    const [ipv4Info, setIpv4Info] = useState([])
    const [ipv6Info, setIpv6Info] = useState([])
    useFocusEffect(
        React.useCallback(() => {
            getData()
            return () => { }
        }, [])
    );
    const getData = async () => {
        let res = await fetchRequest_get({ cmd: CMD.DEVICE_INFO });
        let res1 = await fetchRequest_get({ cmd: CMD.NETWORK_INFO });
        let deviceInfoTmp = [
            { label: "设备型号", value: res.board_type },
            { label: "设备厂商", value: res.device_firm },
            { label: "SN", value: res.device_sn },
            { label: "硬件版本", value: res.hwversion },
            { label: "软件版本", value: res.real_fwversion },
            { label: "运行时长", value: res.uptime },
            { label: "配置版本", value: res.config_version },
            { label: "编译时间", value: res.build_date },
            { label: "git 分支", value: res.git_branch },
            { label: "TZ版本", value: res.fake_version },
            { label: "CMEI", value: res.device_cmei },
            { label: "平均负载", value: res.cpuload },
            { label: "内存总量", value: res.memory1 },
            { label: "可用内存", value: res.memory2 },
            { label: "内存缓存", value: res.memory3 },
            { label: "git commit 号", value: res.git_sha }
        ]
        let ipv4InfoTmp = [
            { label: "WAN IP 地址", value: res1.wan_ip_v4 },
            { label: "LAN IP 地址", value: res1.lan_ip_v4 },
            { label: "默认网关", value: res1.gateway_v4 },
            { label: "DNS 服务器", value: res1.dns_v4 },
        ]
        let ipv6InfoTmp = [
            { label: "默认网关", value: res1.gateway_v6 },
            { label: "DNS 服务器", value: res1.dns_v6 },
            { label: "前缀", value: res1.prefix },
            { label: "链路本地地址", value: res1.link_addr },
            { label: "WAN IP 地址", value: res1.wan_ip_v6 },
        ]
        setDeviceInfo(deviceInfoTmp)
        setIpv4Info(ipv4InfoTmp)
        setIpv6Info(ipv6InfoTmp)
    }
    return (
        <ScrollView
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <List renderHeader={'设备信息'}>
                {
                    deviceInfo.map((item, index) => (
                        <List.Item extra={item.value} key={index}>{item.label}</List.Item>
                    ))
                }
            </List>
            <List renderHeader={'IPv4信息'}>
                {
                    ipv4Info.map((item, index) => (
                        <List.Item extra={item.value} key={index}>{item.label}</List.Item>
                    ))
                }
            </List>
            <List renderHeader={'IPv6信息'}>
                {
                    ipv6Info.map((item, index) => (
                        <List.Item extra={item.value} key={index}>{item.label}</List.Item>
                    ))
                }
            </List>
        </ScrollView>
    )
}