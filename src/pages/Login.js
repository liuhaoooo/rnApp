import React, { useContext, useState, useEffect } from 'react'
import { View, TouchableHighlight, TouchableWithoutFeedback, Text, TextInput, StyleSheet, ImageBackground } from 'react-native'
import { Portal, Toast, ActivityIndicator } from '@ant-design/react-native';
import { Context } from '../../App'
import { changeLoginStateAction } from '../store/action/action'
import { CMD } from '../config/cmd'
import { fetchRequest_get, fetchRequest_post } from '../common/fetchRequest'
import base64 from 'react-native-base64'

export default Login = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [times, setTimes] = useState(0)
    const [loginTimesIsShow, setLoginTimesIsShow] = useState(false)
    useEffect(() => {
        getNextText()
    },[]);
    //登录
    async function login() {
        if (!username || !password) {
            dispatch(changeLoginStateAction(true))
            return
        }
        const key = Toast.loading('登录中...')
        let json = {
            cmd: CMD.LOGIN,
            username: username,
            passwd: base64.encode(password),
            isAutoUpgrade: "0"
        };
        fetchRequest_post(json)
            .then(res => {
                if (res.login_fail === "fail") {
                    Portal.remove(key)
                    Toast.info({ content: '登录失败', duration: 1, mask: false })
                    if (parseInt(res.login_times, 10) < 1) {
                        getNextText();
                    }
                } else {//登录成功
                    Portal.remove(key)
                    dispatch(changeLoginStateAction(true))
                }
            })
    }
    async function getNextText() {
        let res = await fetchRequest_get({ cmd: CMD.GET_NEXT_LOGIN_TIME });
        if (res.buffer == "0") {
            setTimes(180 - res.netx_login_time);
            setLoginTimesIsShow(true);
            setTimeout(() => {
                getNextText();
            }, 1000);
        } else {
            setLoginTimesIsShow(false);
        }
    }

    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => setUsername(text)}
                    value={username}
                    placeholder='账 号'
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder='密 码'
                />
                <TouchableHighlight onPress={() => login()} style={styles.button} >
                    <View>
                        <Text style={styles.button_text}>{'登录'}</Text>
                    </View>
                </TouchableHighlight>
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