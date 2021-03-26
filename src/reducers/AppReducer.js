const initialAppState = {
    navTitle: ''
}

const appReducer = (state=initialAppState, action) => {
    switch (action.type){
        case 'SET_NAV_TITLE':
            return {...state, navTitle: action.payload }
        default: 
            return {...state}
    }
}

export default appReducer