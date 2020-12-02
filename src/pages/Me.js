import React, { useEffect,useContext } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    Image,
    useWindowDimensions,
    Alert
} from 'react-native';
import { Context } from '../../App'
import { changeLoginStateAction } from '../store/action/action'
import { logout_tool } from '../common/tools'
export default Me = ()=>{
    const { state, dispatch } = useContext(Context)
    useEffect(()=>{
        
    },[])
    return(
        <View>
            <Button title='退出登录' onPress={() => logout_tool(dispatch,"确定退出登陆吗?")} />
        </View>
    )
}
