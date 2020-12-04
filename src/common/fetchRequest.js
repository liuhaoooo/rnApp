import { AsyncStorage } from "react-native"
import { Toast } from '@ant-design/react-native';
import { common_url } from '../config/cmd'
import store from '../redux/reducer/index'
async function fetchRequest(method = 'GET', params = '') {
    let header = {
        "Content-Type": "application/json;charset=UTF-8"
    };
    let data = {}
    if (params) {
        try {
            const value = await AsyncStorage.getItem('sessionId');
            params.sessionId = value == null ? '' : value
        } catch (error) {
            params.sessionId = ''
        }
        data = {
            method: method,
            headers: header,
            body: JSON.stringify(params)
        }
    } else {
        data = {
            method: method,
            headers: header
        }
    }
    return new Promise((resolve, reject) => {
        timeout_fetch(fetch(common_url, data)).then((response) => response.json())
            .then((responseData) => {
                if (responseData.message == 'NO_AUTH') {
                    store.dispatch({
                        type: 'change_loginState',
                        value: false
                    })
                }
                console.log(responseData)
                resolve(responseData);
            })
            .catch((err) => {
                Toast.info({ content: '请求失败', duration: 1, mask: false })
                reject(err);
            });
    });
}

function timeout_fetch(fetch_promise, timeout = 10000) {
    let timeout_fn = null;
    let timeout_promise = new Promise((resolve, reject) => {
        timeout_fn = () => {
            Toast.info({ content: '请求超时', duration: 1, mask: false })
            reject('timeout promise');
        };
    });
    let abortable_promise = Promise.race([
        fetch_promise,
        timeout_promise
    ]);
    setTimeout(() => {
        timeout_fn();
    }, timeout);
    return abortable_promise;
}

export const fetchRequest_post = async (data) => {
    data.method = 'POST'
    let res = await fetchRequest('POST', data)
    return res
}
export const fetchRequest_get = async (data) => {
    data.method = 'GET'
    let res = await fetchRequest('POST', data)
    return res
}
