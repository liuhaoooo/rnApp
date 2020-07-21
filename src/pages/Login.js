import React, { useContext } from 'react'
import { View, Button,Text } from 'react-native'
import {Context} from '../../App'
import {changeLoginStateAction} from '../store/action/action'

export default Login = ({navigation}) => {
    const context = useContext(Context)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='LOGIN' onPress={()=>context.dispatch(changeLoginStateAction(true))}/>
        </View>
    )
}
