
const AppReducer = (state={currentPage: 'home'}, action) => {
    switch (action.type){
        case 'SET_PAGE':
            return {...state, currentPage: action.payload}
        default: 
            return {...state}
    }
}

export default AppReducer