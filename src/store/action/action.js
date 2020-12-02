// import { CHANGE_LOGINSTATE,CHANGE_COUNT } from './actionType'
export const  CHANGE_LOGINSTATE = 'change_loginState';
export const  CHANGE_COUNT = 'change_count';

export const changeLoginStateAction = (value) => ({
    type: CHANGE_LOGINSTATE,
    value
})

export const changeCountAction = (value) => ({
    type: CHANGE_COUNT,
    value
})
