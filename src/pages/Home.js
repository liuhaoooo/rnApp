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

// import { useNavigation } from '@react-navigation/native';

import fetchRequest from '../common/fetchRequest'
import { interfaces } from '../config/config'
import { Context } from '../../App'
import { changeCountAction } from '../store/action/action'

export default Home = ({navigation}) => {
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height;
    const [dataList, setDataList] = useState([])
    const { state, dispatch } = useContext(Context)
    useEffect(() => {
        fetchRequest(interfaces.GET_SELECT_FOOD, 'POST')
            .then(res => {
                setDataList(res.data)
            })
            .catch(err => {
                Alert.alert('请求失败')
            })
    }, [])

    //列表
    const MoveList = ({ item }) => {
        return (
            <TouchableNativeFeedback onPress={() => navigation.navigate('Details',{userName:item.user_name})}>
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
    return (
        <View>
            <Text style={styles.text}>
                {state.count}
            </Text>
            <Button title='点击' onPress={() => dispatch(changeCountAction(2))} />

            <FlatList
                data={dataList}
                renderItem={MoveList}
                keyExtractor={(item) => item.openid}
            // extraData={}
            />
        </View>
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