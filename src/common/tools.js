import { Alert,AsyncStorage } from 'react-native';
import { CMD } from "../config/cmd";
import { fetchRequest_get, fetchRequest_post } from "./fetchRequest";
import store from '../redux/reducer/index'
export const logout_tool = (message) => {
    if (!message) {
        fetchRequest_post({ cmd: CMD.LOGOUT }).then(res => {
            AsyncStorage.clear()
            store.dispatch({
                type: 'change_loginState',
                value: false
            })
        });
        return
    }
    Alert.alert('提示', message, [
        {
            text: '取消',
            onPress: () => { },
            style: 'cancel'
        },
        {
            text: '确定',
            onPress: () => {
                fetchRequest_post({ cmd: CMD.LOGOUT }).then(res => {
                    AsyncStorage.clear()
                    store.dispatch({
                        type: 'change_loginState',
                        value: false
                    })
                });
            }
        }
    ]);
}


export const restart_tool = (message) => {
    if (!message) {
        fetchRequest_post({ cmd: CMD.SYS_REBOOT, rebootType: 2 }).then(() => { });
        return
    }
    Alert.alert('提示', message, [
        {
            text: '取消',
            onPress: () => { },
            style: 'cancel'
        },
        {
            text: '确定', onPress: () => {
                fetchRequest_post({ cmd: CMD.LOGOUT }).then(res => {
                    fetchRequest_post({ cmd: CMD.SYS_REBOOT, rebootType: 2 }).then(() => { });
                });
            }
        }
    ]);
}
export const date_tool = val => {
    let day = Math.floor(val / (24 * 3600));
    let hour = Math.floor((val - day * 24 * 3600) / 3600);
    let minute = Math.floor((val - day * 24 * 3600 - hour * 3600) / 60);
    return `${day}天 ${hour}小时 ${minute}分`
}