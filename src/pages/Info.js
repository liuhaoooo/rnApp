import React, { useContext,useEffect } from 'react'
import { View, Button, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';
export default Info = ({ navigation }) => {
    const route = useRoute()
    useEffect(() => {
        console.log('Info')
    },[]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'powderblue' }}>
            {/* <Text>{route.params.userName}</Text> */}
        </View>
    )
}