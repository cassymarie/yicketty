const initialLineup =  {
    _1B: null,
    _2B: '',
    _3B: '',
    SS: '',
    C: '',
    OF1: '',
    OF2: '',
    OF3: '',
    DH: '',
    order: []
}

const lineupReducer = (state=initialLineup, action) => {
    switch (action.type){
        case 'SET_LINEUP':
            return {...state, teams: action.payload}
        default: 
            return {...state}
    }
}

export default lineupReducer