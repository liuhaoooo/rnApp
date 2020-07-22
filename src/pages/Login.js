import React, { useContext, useState } from 'react'
import { View, TouchableHighlight, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { Context } from '../../App'
import { changeLoginStateAction } from '../store/action/action'

export default Login = ({ navigation }) => {
    const context = useContext(Context)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function login() {
        if (userName == 'admin' && password == '123456') {
            context.dispatch(changeLoginStateAction(true))
        } else {
            Alert.alert('密码错误')
        }
    }

    return (
        <View style={styles.content}>
            <TextInput
                style={styles.input}
                onChangeText={text => setUserName(text)}
                value={userName}
                placeholder='用户名'
            />
            <TextInput
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder='密码'
            />
            <TouchableHighlight onPress={() => login()} style={styles.button} >
                <View>
                    <Text style={{ textAlign: 'center', lineHeight: 40, color: '#fff' }}>登录</Text>
                </View>
            </TouchableHighlight>
        </View>
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
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#43D289',
        width: 200,
        height: 40,
        borderRadius:8
    }
})