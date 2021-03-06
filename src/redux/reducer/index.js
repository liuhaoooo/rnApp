import { createStore } from 'redux'
import { CHANGE_LOGINSTATE, CHANGE_LOADING,CHANGE_CONNECT } from '../action'
export const initState = {
    loginState: false,
    isConnect: true,
    loadingKey: null
}
const reducer = (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_LOGINSTATE:
            newState.loginState = action.value
            return newState
        case CHANGE_CONNECT:
            newState.isConnect = !action.value
            return newState
        case CHANGE_LOADING:
            newState.loadingKey = action.value
            return newState
        default: return state
    }
}
export default store = createStore(reducer);