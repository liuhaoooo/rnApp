import React, { useContext } from 'react'
import { View, Button, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Context } from '../../App'
export default Details = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    const route = useRoute()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.params.userName}</Text>
        </View>
    )
}
