import React, { useContext, useState, useEffect } from 'react'
import { View, TouchableHighlight, TouchableWithoutFeedback, Text, TextInput, StyleSheet, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Portal, Toast } from '@ant-design/react-native';
import { CMD } from '../config/cmd'
import { fetchRequest_get, fetchRequest_post } from '../common/fetchRequest'
import base64 from 'react-native-base64'
import { connect } from 'react-redux';
import { changeLoginStateAction } from '../redux/action/index';
import { loading_tool } from '../common/tools';
import { i18n } from '../i18n/index';
const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [times, setTimes] = useState(0)
    const [loginTimesIsShow, setLoginTimesIsShow] = useState(false)
    const [loginLoading, setLoginLoading] = useState(false)
    useEffect(() => {
        getNextText()
    }, []);
    //登录
    async function login() {
        if (!username || !password) {
            return
        }
        loading_tool(true, i18n.t('tips.logining'))
        let json = {
            cmd: CMD.LOGIN,
            username: username,
            passwd: base64.encode(password),
            isAutoUpgrade: "0"
        };
        fetchRequest_post(json)
            .then(async res => {
                if (res.login_fail === "fail") {
                    loading_tool(false)
                    Toast.fail({ content: i18n.t('tips.loginfail') + res.login_times, duration: 1, mask: false })
                    if (parseInt(res.login_times, 10) < 1) {
                        getNextText();
                    }
                } else {//登录成功
                    try {
                        await AsyncStorage.setItem('sessionId', res.sessionId);
                    } catch (error) { }
                    loading_tool(false)
                    props.changeLoginState(true)
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
                    placeholder={i18n.t('login.username')}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder={i18n.t('login.password')}
                />
                <TouchableHighlight onPress={() => login()} style={styles.button} disabled={loginTimesIsShow}>
                    <View>
                        <Text style={styles.button_text}>{loginTimesIsShow ? `${times} s` : i18n.t('login.loginbtn')}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeLoginState: (value) => {
            dispatch(changeLoginStateAction(value));
        }
    }
};
export default connect(null, mapDispatchToProps)(Login);

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