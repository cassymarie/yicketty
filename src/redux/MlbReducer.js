const initialMlbState = {
    teams: [],
    selectedTeam: "",
}

const mlbReducer = (state=initialMlbState, action) => {
        switch (action.type){
            case 'SET_MLB_TEAMS':
                return {...state, teams: action.payload}
            default: 
                return {...state}
        }
}

export default mlbReducer