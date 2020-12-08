import React, { createContext, useReducer, useCallback } from 'react';
import { Provider } from '@ant-design/react-native';
import { i18n } from './src/i18n/index';
//react-navigation
import { NavigationContainer, DrawerActions, useFocusEffect } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

let getStatus_Interval = null
//抽屉切换页面
const DrawerPage = () => {
  useFocusEffect(
    useCallback(() => {
      console.log(111111)
      clearInterval(getStatus_Interval);
      getStatus_Interval = setInterval(() => {
        fetchRequest_get({ cmd: CMD.GET_DEVICE_NAME });
      }, 5000);
      return () => clearInterval(getStatus_Interval);
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
const App = (props) => {
  return (
    <Provider>
      <NavigationContainer>
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
    </Provider>
  )
}
const mapStateToProps = (state) => {
  return {
    loginState: state.loginState
  }
}
export default connect(mapStateToProps, null)(App);
