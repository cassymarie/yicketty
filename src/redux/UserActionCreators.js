const API = "http://localhost:3000"

export const addNewUser = () => ({type: 'ADD_NEW_USER'})
export const toggleSignup = () => ({type: 'TOGGLE_SIGNUP'})

export const handleLoginFormChange = (e) => ({type: 'LOGIN_FORM_CHANGE', payload: {name: e.target.name, value: e.target.value}})


export const sendSignup = (userData) => {
    return (dispatch) => {
        fetch(`${API}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(response => {
            localStorage.token = response.token
            dispatch({ type: 'LOGIN_USER', payload: response.user.data.attributes })
        })
    }
}

export const sendLogin = (userData) => {
    return (dispatch) => {
        fetch(`${API}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(response => {
            localStorage.token = response.token
            dispatch({ 
            type: 'LOGIN_USER', 
            payload: response.user.data.attributes 
        })
    })
    }
}


export const autoLogin = () => {
    return (dispatch) => {
        fetch(`${API}/autologin`, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({ 
            type: 'LOGIN_USER', 
            payload: response.user.data.attributes 
        })
    })
    }
}