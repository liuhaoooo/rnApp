import React, { useState, useEffect, useReducer, useContext } from 'react'
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
// import { connect } from 'react-redux'
import fetchRequest from '../commom/fetchRequest'
import { interfaces } from '../config/config'
import reducer, { initState } from '../store/reducer/index'
const Home = ({ navigation }) => {
    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height;
    const [dataList, setDataList] = useState([])
    const [state, dispatch] = useReducer(reducer, initState)
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
                {state.loginState}
            </Text>
            <Button title='提交' onPress={() => dispatch({ type: 'change_loginState' })} />
            <Button title="跳转" onPress={() => navigation.navigate('Details')} />
            <FlatList
                data={dataList}
                renderItem={MoveList}
                keyExtractor={(item) => item.openid}
            />
        </View>
    )
}
export default Home
// const stateToProps = (state) => {
//     return {
//         loginState: state.loginState
//     }
// }
// const dispatchToProps = (dispatch) => {
//     return {
//         newState() {
//             let action = {
//                 type: 'change_loginState',
//                 value: false
//             }
//             dispatch(action)
//         }
//     }
// }

// export default connect(stateToProps, dispatchToProps)(Home);


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
        fontSize: 20
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