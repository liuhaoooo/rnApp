import React, { useEffect, useState } from 'react';
import { Provider } from '@ant-design/react-native';
import { Appearance } from 'react-native';
import { NetworkInfo } from "react-native-network-info";
//react-navigation
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//pages
import { connect } from 'react-redux';
import { fetchRequest_get, fetchRequest_post } from './src/common/fetchRequest'
import { CMD } from './src/config/cmd'
import { authScreens, userScreens, disconnect } from './src/router/index'
import ant_themes from './src/styles/ant_themes'
import { MyTheme } from './src/styles/themes'

const Stack = createStackNavigator();
const scheme = Appearance.getColorScheme()
let getStatus_Timeout = null
const getLoginStatus = () => {
  fetchRequest_get({ cmd: CMD.GET_DEVICE_NAME }).then(res => {
    getStatus_Timeout = setTimeout(() => {
      getLoginStatus()
    }, 5000)
  }).catch(err => {
    clearTimeout(getStatus_Timeout);
  })
}
const App = (props) => {
  const [isConnect, setIsConnect] = useState(true)
  useEffect(() => {//监听登录状态变化
    (async () => {
      let ssid = await NetworkInfo.getSSID()
      setIsConnect(ssid != null)
    })()
    clearTimeout(getStatus_Timeout);
    if (props.loginState) {
      getLoginStatus()
    }
  }, [props.loginState])
  return (
    <Provider theme={ant_themes}>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}  /*theme={scheme === 'dark' ? DarkTheme : DefaultTheme}*/>
          <Stack.Navigator gesturesEnabled={true}>
            {[...(isConnect ? (props.loginState ? authScreens : userScreens) : disconnect)].map((item, index) => (
              <Stack.Screen
                options={{ headerShown: item.headerShown, title: item.title }}
                name={item.name}
                component={item.component}
                key={index} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  )
}
const mapStateToProps = (state) => {
  return {
    loginState: state.loginState
  }
}
export default connect(mapStateToProps, null)(App);


