import React, { useContext, useState, useEffect } from 'react'
import { View, TouchableHighlight, TouchableWithoutFeedback, Text, TextInput, StyleSheet, Alert, ImageBackground } from 'react-native'
import { Toast, ActivityIndicator } from '@ant-design/react-native';
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


    //登录
    function login() {
        if (phone != '1' && password != 'a') {
            Toast.loading('登录中...', 1, () => {
                Toast.info({ content: "登录成功", duration: 1, mask: false })
                dispatch(changeLoginStateAction(true))
            });
        } else {
            Toast.info({ content: "密码错误", duration: 1, mask: false })
        }
        // fetchRequest(interfaces.LOGIN, 'POST', { openid:phone, password })
        //     .then(res => {
        //         console.log(res)
        //         dispatch(changeLoginStateAction(true))
        //     })
        //     .catch(err => {
        //         Alert.alert('请求失败')
        //     })
    }

    //获取验证码
    function sandCode() {
        setSendCode(true)
        setTimeout(() => {
            setSendCode(false)
            countDown(60)
            Toast.info({ content: "发送成功", duration: 1, mask: false })
        }, 1000);
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
                <TouchableHighlight onPress={() => login()} style={styles.button} >
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