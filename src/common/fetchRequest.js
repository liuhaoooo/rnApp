/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
import { Toast } from '@ant-design/react-native';
import { common_url } from '../config/config'
let token = '';
function fetchRequest(url, method = 'GET', params = '') {
    let header = {
        "Content-Type": "application/json;charset=UTF-8",
        "accesstoken": token
    };
    let data = {}
    if (params) {
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
        timeout_fetch(fetch(common_url + url, data)).then((response) => response.json())
            .then((responseData) => {
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



export default fetchRequest