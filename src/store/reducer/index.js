import { CHANGE_LOGINSTATE, CHANGE_COUNT } from '../action/action'
export const initState = {
    loginState: false,
    count: 0
}

export default (state, action) => {
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
