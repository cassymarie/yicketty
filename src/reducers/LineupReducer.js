const initialLineupForm = {
    _1B: null,
    _2B: null,
    _3B: null,
    SS: null,
    C: null,
    RF: null,
    CF: null,
    LF: null,
    DH: null
}

const initialLineupState =  {
    lineupForm: initialLineupForm,
    lineupFormOrder: [],
    usersLineups: [],
    toggleLineup: false
}

const lineupReducer = (state=initialLineupState, action) => {
    switch (action.type){
        case 'SET_LINEUP':
            return {...state, teams: action.payload}
        case 'CLEAR_LINEUP':
            return {...state, lineupForm: initialLineupForm}
        case 'USERS_LINEUPS':
            return {...state, usersLineups: action.payload }
        case 'LINEUP_CHANGE':
            return {...state, [action.payload.name]: action.payload.value}
        case 'TOGGLE_NEW_LINEUP':
            return {...state, toggleLineup: true}
        case 'TOGGLE_LINEUP_OFF':
            return {...state, toggleLineup: false}
        case 'NEW_LINEUP':
            return {...state, newLineup: action.payload}
        default: 
            return {...state}
    }
}

export default lineupReducer