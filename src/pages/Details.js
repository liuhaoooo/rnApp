import React, { useContext } from 'react'
import { View, Button, Text } from 'react-native'
import { Context } from '../../App'
export default Details = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>details:{state.count}</Text>
        </View>
    )
}
