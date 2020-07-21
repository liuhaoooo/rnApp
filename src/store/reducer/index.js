export const initState = {
    loginState: 0
}

export default (state, action) => {
    switch (action.type) {
        case 'change_loginState':
            let newState = JSON.parse(JSON.stringify(state))
            newState.loginState += 1
            return newState
        default: return state
    }
}
