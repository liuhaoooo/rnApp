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
import Ionicons from 'react-native-vector-icons/Ionicons';
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
console.log(Colors)
//底部切换的页面
const TabPage = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.dark,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='people-sharp' size={size} color={color}/>;
          }
        }}
      />
      <Tab.Screen
        name="Me"
        component={Me}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='flower-sharp' size={size} color={color}/>;
          }
        }}
      />
    </Tab.Navigator>
  )
}
//抽屉切换页面
const DrawerPage = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabPage} options={{ title: '首页' }} />
      <Drawer.Screen name="Info" component={Info} options={{ title: '信息' }} />
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
  { name: 'Login', component: Login, headerShown: false, title: '登录' }
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
