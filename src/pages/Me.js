import React, { useEffect, useContext, useState } from 'react'
import { List, Flex, Switch, Picker, WhiteSpace, Modal } from '@ant-design/react-native';
import { ScrollView, View, Button, Text } from 'react-native';
import { logout_tool, loading_tool } from '../common/tools'
import { i18n } from '../i18n/index';
import { CMD } from '../config/cmd'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import { fetchRequest_get, fetchRequest_post } from '../common/fetchRequest'
//led指示灯
const LedSwitch = () => {
    const [ledSwitchVal, setLedSwitchVal] = useState(true)
    useFocusEffect(
        React.useCallback(() => {
            (async () => {
                let res = await fetchRequest_get({ cmd: CMD.LED_SWITCH })
                setLedSwitchVal(res.led_status == "0")
            })()
            return () => { }
        }, [])
    );
    const changeLedSwitch = (val) => {
        loading_tool(true)
        fetchRequest_post({ cmd: CMD.LED_SWITCH, led_status: val ? '0' : '1' }).then(() => {
            setLedSwitchVal(val)
            loading_tool(false)
        })
    }
    return (
        <View>
            <List.Item
                extra={
                    <Switch
                        checked={ledSwitchVal}
                        onChange={val => changeLedSwitch(val)}
                    />
                }
            >指示灯开关</List.Item>
        </View>
    )
}
//语言切换
const LangChange = () => {
    const [lang, setLang] = useState(['zh'])
    const lang_option = [
        { label: '简体中文', value: 'zh' },
        { label: '日本語', value: 'jp' }
    ]

    const langChange = (val) => {
        setLang(val)
        i18n.locale = val[0]
    }
    return (
        <Picker
            title="选择语言"
            data={lang_option}
            cols={1}
            value={lang}
            onOk={val => langChange(val)}
        >
            <List.Item arrow="horizontal">语言</List.Item>
        </Picker>
    )
}
//用户
const UserPopup = () => {
    return (
        <View style={{ paddingVertical: 20, paddingHorizontal: 20, height: 200 }}>

        </View>
    )
}

const Me = () => {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <>
            <Modal
                popup
                visible={showPopup}
                animationType="slide-up"
                maskClosable={true}
                onClose={() => setShowPopup(false)}
            >
                <UserPopup />
            </Modal>

            <ScrollView
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <WhiteSpace size="lg" />
                <List>
                    <List.Item arrow="horizontal" extra="superadmin" onPress={() => setShowPopup(true)}>
                        <Ionicons name='md-person-circle-outline' size={60} color={'#ccc'} />
                    </List.Item>
                </List>
                <WhiteSpace size="lg" />
                <List>
                    <LedSwitch />
                    <LangChange />
                    <List.Item arrow="horizontal" onPress={() => { }}>系统日志</List.Item>
                    <List.Item arrow="horizontal" onPress={() => { }}>安全设置</List.Item>
                    <List.Item arrow="horizontal" onPress={() => { }}>网络工具</List.Item>
                </List>
                <WhiteSpace size="lg" />
                <List>
                    <List.Item onPress={() => logout_tool(i18n.t('tips.logout'))}>
                        <Text style={{ fontSize: 14, textAlign: 'center', color: '#409EFF' }}>退出登录</Text>
                    </List.Item>
                    <List.Item onPress={() => logout_tool(i18n.t('tips.logout'))}>
                        <Text style={{ fontSize: 14, textAlign: 'center', color: '#E6A23C' }}>重启设备</Text>
                    </List.Item>
                    <List.Item onPress={() => logout_tool(i18n.t('tips.logout'))}>
                        <Text style={{ fontSize: 14, textAlign: 'center', color: '#F56C6C' }}>恢复出厂</Text>
                    </List.Item>
                </List>
            </ScrollView>
        </>
    )
}
export default Me