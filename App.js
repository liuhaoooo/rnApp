/**
 * Sample React Native App
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//react-redux
// import { Provider } from 'react-redux'
// import store from './src/store'
//react-navigation
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
//pages
import Home from './src/pages/Home'
import Me from './src/pages/Me'
import Details from './src/pages/Details'
import Login from './src/pages/Login'
import Info from './src/pages/Info'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//底部切换的页面
const TabPage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Me" component={Me} />
    </Tab.Navigator>
  )
}
//抽屉切换页面
const DrawerPage = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabPage} />
      <Drawer.Screen name="Info" component={Info} />
    </Drawer.Navigator>
  )
}
//抽屉内容
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="关闭"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="弹窗"
        onPress={() => Alert.alert("haha")}
      />
    </DrawerContentScrollView>
  );
}

//已登录
const authScreens = [
  { name: 'Home', component: DrawerPage },
  { name: 'Details', component: Details },
]
//未登录
const userScreens = [
  { name: 'Login', component: Login }
]

const App = () => {
  return (
    <>
      {/* <Provider store={store}> */}
        <NavigationContainer>

          <Stack.Navigator
            tabBarOptions={{
              labelStyle: { fontSize: 12 },
              tabStyle: { width: 100 },
              style: { backgroundColor: 'powderblue' },
            }}>
            {[...(true ? authScreens : userScreens)].map((item, index) => (
              <Stack.Screen name={item.name} component={item.component} key={index} />
            ))}
          </Stack.Navigator>

        </NavigationContainer>
      {/* </Provider> */}
    </>
  );
};
export default App;
