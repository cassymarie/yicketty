
const nullUser = {
    id: null,
    username: '',
    email: '',
    signup: false
}

const userReducer = (state=nullUser, action) => {
    switch (action.type){
        case 'TOGGLE_SIGNUP':
            return {...state, signup: !state.signup }
        case 'SET_USER':
            return {...state, user: action.payload}
        default: 
            return {...state}
    }
}

export default userReducer
