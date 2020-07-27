import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    Image,
    useWindowDimensions,
    TouchableNativeFeedback
} from 'react-native';

import fetchRequest from '../../common/fetchRequest'
import { interfaces } from '../../config/config'
import { Context } from '../../../App'
import { changeCountAction } from '../../store/action/action'

export default HomePage1 = ({navigation}) => {
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height;
    const [dataList, setDataList] = useState([])
    const { state, dispatch } = useContext(Context)
    useEffect(() => {
        // fetchRequest(interfaces.GET_SELECT_FOOD, 'POST')
        //     .then(res => {
        //         console.log(res)
        //         setDataList(res)
        //     })
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

            {/* <FlatList
                data={dataList}
                renderItem={MoveList}
                keyExtractor={(item) => item.id}
            /> */}
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