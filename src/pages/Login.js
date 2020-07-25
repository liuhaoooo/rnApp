import React, { useContext, useState, useEffect } from 'react'
import { View, TouchableHighlight, TouchableWithoutFeedback, Text, TextInput, StyleSheet, Alert, ImageBackground } from 'react-native'
import { Portal, Toast, ActivityIndicator } from '@ant-design/react-native';
import { Context } from '../../App'
import { changeLoginStateAction } from '../store/action/action'
import { interfaces } from '../config/config'
import fetchRequest from '../common/fetchRequest'

let timer = null
export default Login = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)//登录状态
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [isRegister, setRegister] = useState(false)//当前是否为注册页面
    const [isSendCode, setSendCode] = useState(false)
    const [codeText, setCodeText] = useState("获取验证码")//验证码按钮文字

    useEffect(() => {
        return () => {
            clearInterval(timer)
        };
    }, [])

    //获取验证码
    function sandCode() {
        if (!phone) return
        setSendCode(true)
        fetchRequest(interfaces.SENDSMS, 'POST', { phone })
            .then(res => {
                setSendCode(false)
                countDown(60)
                Toast.info({ content: res.msg, duration: 1, mask: false })
            })
    }
    //注册
    function zhuce() {
        if (!phone || !password || !code) return
        fetchRequest(interfaces.ZHUCE, 'POST', { phone, password, code })
            .then(res => {
                res.success && dispatch(changeLoginStateAction(true))
                Toast.info({ content: res.msg, duration: 1, mask: false })
            })
    }
    //登录
    function login() {
        if (!phone || !password) return
        const key = Toast.loading('登录中...')
        fetchRequest(interfaces.LOGIN, 'POST', { phone, password })
            .then(res => {
                console.log(res.token)
                Portal.remove(key)
                res.success && dispatch(changeLoginStateAction(true))
                Toast.info({ content: res.msg, duration: 1, mask: false })
            })
    }
    //倒计时
    function countDown(sec) {
        timer = setInterval(() => {
            setCodeText(sec);
            sec--;
            if (sec == "00") {
                setCodeText("获取验证码");
                clearInterval(timer);
                return;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }
            setCodeText(sec);
        }, 1000);
    }


    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPhone(text)}
                    value={phone}
                    placeholder='手机号'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder='密  码'
                />
                {isRegister ? (
                    <View style={styles.code}>
                        <TextInput
                            style={[styles.input, { width: 120, marginRight: 20 }]}
                            onChangeText={text => setCode(text)}
                            value={code}
                            placeholder='验证码'
                        />
                        <TouchableHighlight
                            onPress={() => sandCode()}
                            style={[styles.button, { width: 100, borderRadius: 4 }]}
                            disabled={isSendCode}>
                            <View>
                                {isSendCode ? <ActivityIndicator color="#fff" size="large" /> :
                                    <Text style={styles.button_text}>{codeText}</Text>}
                            </View>
                        </TouchableHighlight>
                    </View>) : null
                }
                <TouchableHighlight onPress={() => isRegister ? zhuce() : login()} style={styles.button} >
                    <View>
                        <Text style={styles.button_text}>{isRegister ? '注册' : '登录'}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableWithoutFeedback onPress={() => setRegister(!isRegister)} >
                    <View>
                        <Text style={styles.button_text}>{isRegister ? '去登录' : '去注册'}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        width: 240,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 15,
        backgroundColor: '#fff',
        borderRadius: 6
    },
    button: {
        marginTop: 15,
        backgroundColor: '#43D289',
        width: 240,
        height: 40,
        borderRadius: 8
    },
    button_text: {
        textAlign: 'center',
        lineHeight: 40,
        color: '#fff'
    },
    code: {
        justifyContent: 'center',
        flexDirection: 'row'
    }
})