import { CHANGE_LOGINSTATE,CHANGE_COUNT } from './actionType'

export const changeLoginStateAction = (value) => ({
    type: CHANGE_LOGINSTATE,
    value
})

export const changeCount = (value) => ({
    type: CHANGE_COUNT,
    value
})
