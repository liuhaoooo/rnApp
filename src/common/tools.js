import React, { useContext, useState, useEffect } from 'react'
import { CMD } from "../config/cmd";
import { fetchRequest_get, fetchRequest_post } from "./request";
import { changeLoginStateAction } from '../store/action/action'
import { Context } from '../../App'
const { state, dispatch } = useContext(Context)
export const logout_tool = message => {
    if (!message) {
        fetchRequest_post({ cmd: CMD.LOGOUT }).then(res => {
            dispatch(changeLoginStateAction(false))
        });
        return
    }
    Dialog.confirm({
        title: '提示',
        message,
    }).then(() => {
        fetchRequest_post({ cmd: CMD.LOGOUT }).then(res => {
            dispatch(changeLoginStateAction(false))
        });
    }).catch(()=>{});
}
export const restart_tool = message => {
    if (!message) {
        fetchRequest_post({ cmd: CMD.SYS_REBOOT, rebootType: 2 }).then(() => { });
        return
    }
    Dialog.confirm({
        title: '提示',
        message
    }).then(() => {
        fetchRequest_post({ cmd: CMD.SYS_REBOOT, rebootType: 2 }).then(() => { });
    }).catch(()=>{});
}
export const date_tool = val => {
    let day = Math.floor(val / (24 * 3600));
    let hour = Math.floor((val - day * 24 * 3600) / 3600);
    let minute = Math.floor((val - day * 24 * 3600 - hour * 3600) / 60);
    return `${day}天 ${hour}小时 ${minute}分`
}
export const parseHexPageHide_tool = hex => {
    if (!hex) return '00'
    let bits = ["00", "01", "02", "03",
        "10", "11", "12", "13",
        "20", "21", "22", "23",
        "30", "31", "32", "33"];
    let arr = [];
    let length = hex.length;
    for (let i = 0, len = length; i < len; i++) {
        arr.push(bits[parseInt(hex.charAt(i), 16)]);
    }
    let str = arr.join("");
    return str;
}
export const pageHideCheck_tool = index => {
    let arr = store.getters['config_vuex/webPageFlag'];
    let level = rsaDec_tool(sessionStorage['level'])
    if (arr[index] == "1") {
        if (level == "1" || level == "2") {
            return true;
        } else {
            return false;
        }
    } else if (arr[index] == "2") {
        if (level == "1" || level == "3") {
            return true;
        } else {
            return false;
        }
    } else if (arr[index] == "3") {
        return true;
    } else {
        if (level == "1") {
            return true;
        } else {
            return false;
        }
    }
}