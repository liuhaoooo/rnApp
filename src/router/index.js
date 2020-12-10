import Home from '../pages/Home'
import Login from '../pages/Login'
import Setting from '../pages/Setting'
import Disconnect from '../pages/Disconnect'
//未登录
export const disconnect = [
    { name: 'Disconnect', component: Disconnect, headerShown: false, title: '未连接WiFi' }
]
//未登录
export const userScreens = [
    { name: 'Login', component: Login, headerShown: false, title: '登录' }
]
//已登录
export const authScreens = [
    { name: 'Home', component: Home, headerShown: false, title: 'Home' },
    { name: 'Setting', component: Setting, headerShown: true, title: 'wifi设置' }
]
