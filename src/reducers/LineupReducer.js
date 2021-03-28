const initialLineupForm = {
    _1B: null,
    _2B: null,
    _3B: null,
    SS: null,
    C: null,
    OF1: null,
    OF2: null,
    OF3: null,
    DH: null
}

const initialLineupState =  {
    lineupForm: initialLineupForm,
    lineupFormOrder: [],
    usersLineups: [],
    toggleLineup: false,
    newLineup: ''
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
            return {...state, lineupForm: { ...state.lineupForm, [action.payload.name]: action.payload.value}}
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