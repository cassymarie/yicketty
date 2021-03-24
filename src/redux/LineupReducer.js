const initialLineup =  {
    _1B: null,
    _2B: null,
    _3B: null,
    SS: null,
    C: null,
    RF: null,
    CF: null,
    LF: null,
    DH: null,
    order: []
}

const lineupReducer = (state=initialLineup, action) => {
    switch (action.type){
        case 'SET_LINEUP':
            return {...state, teams: action.payload}
        case 'CLEAR_LINEUP':
            return {...initialLineup}
        case 'LINEUP_CHANGE':
            return {...state, [action.payload.name]: action.payload.value}
        default: 
            return {...state}
    }
}

export default lineupReducer