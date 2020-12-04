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
const Me = ()=>{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#b3f586'}}>
            <Text>Me</Text>
        </View>
    )
}
export default Me;