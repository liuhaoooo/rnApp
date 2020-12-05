export const  CHANGE_LOGINSTATE = 'change_loginState';
export const  CHANGE_LOADING = 'change_liading';

export const changeLoginStateAction = (value) => ({
    type: CHANGE_LOGINSTATE,
    value
})

export const changeLoading = (value) => ({
    type: CHANGE_LOADING,
    value
})
