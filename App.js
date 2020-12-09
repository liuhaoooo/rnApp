import React, { createContext, useReducer, useCallback, useEffect } from 'react';
import { Provider } from '@ant-design/react-native';
import { i18n } from './src/i18n/index';
import { Appearance } from 'react-native';
//react-navigation
import { NavigationContainer, DrawerActions, useFocusEffect,DefaultTheme,DarkTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
//pages
import Home from './src/pages/Home'
import Login from './src/pages/Login'
import { connect } from 'react-redux';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { logout_tool } from './src/common/tools'
import { fetchRequest_get, fetchRequest_post } from './src/common/fetchRequest'
import { CMD } from './src/config/cmd'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const scheme = Appearance.getColorScheme()
let getStatus_Timeout = null
const getLoginStatus = () => {
  fetchRequest_get({ cmd: CMD.GET_DEVICE_NAME }).then(res => {
    getStatus_Timeout = setTimeout(() => {
      getLoginStatus()
    }, 5000)
  }).catch(err=>{
    clearTimeout(getStatus_Timeout);
  })
}
//抽屉切换页面
const DrawerPage = () => {
  useFocusEffect(
    useCallback(() => {
      clearTimeout(getStatus_Timeout);
      getLoginStatus()
      return () => clearTimeout(getStatus_Timeout);
    }, [])
  )
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} options={{ title: '首页' }} />
    </Drawer.Navigator>
  )
}
//抽屉内容
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="退出登陆"
        onPress={() => logout_tool("确定退出登陆吗?")}
      />
    </DrawerContentScrollView>
  );
}

//已登录
const authScreens = [
  { name: 'Home', component: DrawerPage, headerShown: false, title: 'Index' }
]
//未登录
const userScreens = [
  { name: 'Login', component: Login, headerShown: false, title: '登录' }
]
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


