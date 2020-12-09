import React, { useEffect } from 'react';
import { Provider } from '@ant-design/react-native';
import { Appearance } from 'react-native';
//react-navigation
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//pages
import { connect } from 'react-redux';
import { fetchRequest_get, fetchRequest_post } from './src/common/fetchRequest'
import { CMD } from './src/config/cmd'
import { authScreens, userScreens } from './src/router/index'

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
//主题
const MyTheme = {
  dark: false,
  colors: {
    primary: '#2ba245',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: '#333',
    border: 'rgb(199, 199, 204)',
    notification: '#2ba245',
  },
};
const App = (props) => {
  useEffect(() => {//监听登录状态变化
    clearTimeout(getStatus_Timeout);
    if (props.loginState) {
      getLoginStatus()
    }
  }, [props.loginState])
  return (
    <Provider>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}  /*theme={scheme === 'dark' ? DarkTheme : DefaultTheme}*/>
          <Stack.Navigator gesturesEnabled={true}>
            {[...(props.loginState ? authScreens : userScreens)].map((item, index) => (
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


