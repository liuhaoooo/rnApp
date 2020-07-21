import React, { useState, useEffect } from 'react'
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
import fetchRequest from '../commom/fetchRequest'
import { interfaces } from '../config/config'

export default Home = () => {
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height;
    const [state, setstate] = useState(0)
    const [dataList, setDataList] = useState([])
    useEffect(() => {
        fetchRequest(interfaces.GET_SELECT_FOOD, 'POST')
            .then(res => {
                setDataList(res.data)
                console.log(dataList)
            })
            .catch(err => {
                Alert.alert('请求失败')
            })
    }, [])

    function newState() {
        return state + 3
    }

    return (
        <View>
            <Text style={styles.text}>
                {state}
            </Text>
            <Button title='提交' onPress={() => setstate(newState)} />
            <FlatList
                data={dataList}
                renderItem={MoveList}
                keyExtractor={(item) => item.openid}
            />
        </View>
    )
}
const MoveList = ({ item }) => {
    return (
        <View>
            <Image
                source={{ uri: item.avatar_url }}
                style={styles.img}
            />
            <Text style={styles.title}>{item.user_name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    img: {
        width: 50,
        height: 50
    },
    title: {
        textAlign: 'center'
    }
});