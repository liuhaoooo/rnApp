import React, { useReducer } from 'react'
import { View, Button, Text } from 'react-native'
import reducer, { initState } from '../store/reducer'
export default Details = ({ navigation }) => {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{state.loginState}details</Text>
        </View>
    )
}
