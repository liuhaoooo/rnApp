import React, { useContext, useState, useEffect } from 'react'
import { View, TouchableHighlight, TouchableWithoutFeedback, Text, TextInput, StyleSheet, Alert, ImageBackground } from 'react-native'
import { Toast } from '@ant-design/react-native';
import { Context } from '../../App'
import { changeLoginStateAction } from '../store/action/action'
import { interfaces } from '../config/config'
import fetchRequest from '../common/fetchRequest'
export default Login = ({ navigation }) => {
    const context = useContext(Context)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [isRegister, setRegister] = useState(false)
    function login() {
        if (phone == '18877611836' && password == '321123aaa') {
            Toast.loading('登录中...', 1, () => {
                context.dispatch(changeLoginStateAction(true))
                Toast.info("登录成功")
            });
        } else {
            Toast.info("密码错误")
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
    function sandCode() {
        Toast.loading('加载中...', 1, () => {
            Toast.info("发送成功")
        });
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
                            style={[styles.input, { width: 150, marginRight: 20 }]}
                            onChangeText={text => setCode(text)}
                            value={code}
                            placeholder='验证码'
                        />
                        <TouchableHighlight onPress={() => sandCode()} style={[styles.button, { width: 70, borderRadius: 4 }]} >
                            <View>
                                <Text style={styles.button_text}>发送验证码</Text>
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
        backgroundColor: '#fff'
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