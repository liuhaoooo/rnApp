export const  CHANGE_LOGINSTATE = 'change_loginState';
export const  CHANGE_LOADING = 'change_liading';
export const  CHANGE_CONNECT = 'change_connect';

export const changeLoginStateAction = (value) => ({
    type: CHANGE_LOGINSTATE,
    value
})

export const changeConnectAction = (value) => ({
    type: CHANGE_CONNECT,
    value:value == '<unknown ssid>' || value == null
})

export const changeLoading = (value) => ({
    type: CHANGE_LOADING,
    value
})
