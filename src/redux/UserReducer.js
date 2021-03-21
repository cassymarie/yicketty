const initialLoginForm = {
    name_first: '',
    name_last: '',
    password: '',
    passwordConfirmation: '',
    username: ''
}

const nullUser = {
    id: null,
    username: null,
    name_first: null,
    name_last: null,
    signup: false,
    loginForm: initialLoginForm
}

const userReducer = (state=nullUser, action) => {
    switch (action.type){
        case 'TOGGLE_SIGNUP':
            return {...state, signup: !state.signup }
        case 'LOGIN_USER':
            return {...state, ...action.payload}
        case 'LOGIN_FORM_CHANGE':
            return {...state, loginForm: initialLoginForm}
        case 'LOGIN_FORM_CLEAR':
            return {...state, loginForm: {
                ...state.loginForm, [action.payload.name]: action.payload.value
            }}
        default: 
            return {...state}
    }
}

export default userReducer
