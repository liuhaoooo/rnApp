import React, { useEffect } from 'react'
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

export default Me = ()=>{
    useEffect(()=>{
        console.log('加载Me页面')
    },[])
    return(
        <View>
            <Text>
                me
            </Text>
        </View>
    )
}
