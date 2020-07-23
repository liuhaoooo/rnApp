import { CHANGE_LOGINSTATE, CHANGE_COUNT } from '../action/actionType'
export const initState = {
    loginState: false,
    count: 0
}

export default (state, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_LOGINSTATE:
            newState.loginState = !newState.loginState
            return newState
        case CHANGE_COUNT:
            newState.count += action.value
            return newState
        default: return state
    }
}
