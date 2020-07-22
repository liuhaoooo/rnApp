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

export default Me = ()=>{
    const { state, dispatch } = useContext(Context)
    useEffect(()=>{
        
    },[])
    return(
        <View>
            <Button title='退出登录' onPress={() => dispatch(changeLoginStateAction(false))} />
        </View>
    )
}
