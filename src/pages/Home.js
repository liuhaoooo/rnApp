import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    Image,
    useWindowDimensions,
    Alert,
    TouchableNativeFeedback
} from 'react-native';

import fetchRequest from '../commom/fetchRequest'
import { interfaces } from '../config/config'
import { Context } from '../../App'
import { changeLoginStateAction, changeCount } from '../store/action/action'

export default Home = ({ navigation }) => {
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height;
    const [dataList, setDataList] = useState([])
    const context = useContext(Context)
    useEffect(() => {
        fetchRequest(interfaces.GET_SELECT_FOOD, 'POST')
            .then(res => {
                setDataList(res.data)
            })
            .catch(err => {
                Alert.alert('请求失败')
            })
    }, [])


    return (
        <View>
            <Text style={styles.text}>
                {context.state.count}
            </Text>
            <Button title='点击' onPress={() => context.dispatch(changeCount(2))} />
            <Button title='退出登录' onPress={() => context.dispatch(changeLoginStateAction(false))} />
            <Button title="跳转Details" onPress={() => navigation.navigate('Details')} />
            <FlatList
                data={dataList}
                renderItem={MoveList}
                keyExtractor={(item) => item.openid}
                // extraData={}
            />
        </View>
    )
}


//列表
const MoveList = ({ item }) => {
    return (
        <TouchableNativeFeedback onPress={() => Alert.alert(item.user_name)}>
            <View style={styles.list}>
                <Image
                    source={{ uri: item.avatar_url }}
                    style={styles.img}
                />
                <Text style={styles.title}>{item.user_name}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center'
    },
    img: {
        width: 50,
        height: 50
    },
    title: {
        textAlign: 'center'
    },
    list: {
        flex: 1,
        alignItems: "center",
        flexDirection: 'row'
    }
});