import { createStore } from 'redux'
import { CHANGE_LOGINSTATE, CHANGE_COUNT } from '../action'
export const initState = {
    loginState: false,
    count: 0
}
reducer = (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_LOGINSTATE:
            newState.loginState = action.value
            return newState
        case CHANGE_COUNT:
            newState.count += action.value
            return newState
        default: return state
    }
}
export default store = createStore(reducer);