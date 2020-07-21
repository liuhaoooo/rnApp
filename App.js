import React, { createContext, useReducer } from 'react';
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
//useReducer
import reducer, { initState } from './src/store/reducer/index'

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export const Context = createContext(null)
//底部切换的页面
const TabPage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ title: '首页' }} />
      <Tab.Screen name="Me" component={Me} options={{ title: '我的' }} />
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
  { name: 'Home', component: DrawerPage, header: null, headerShown: false, title: '首页' },
  { name: 'Details', component: Details, header: null, headerShown: true, title: '详情' },
]
//未登录
const userScreens = [
  { name: 'Login', component: Login, headerShown: true, title: '登录' }
]


const App = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <NavigationContainer>

          <Stack.Navigator gesturesEnabled={true}>
            {[...(state.loginState ? authScreens : userScreens)].map((item, index) => (
              <Stack.Screen
                options={{ headerShown: item.headerShown, title: item.title }}
                name={item.name}
                component={item.component}
                key={index} />
            ))}
          </Stack.Navigator>

        </NavigationContainer>
      </Context.Provider>
    </>
  );
};
export default App;
