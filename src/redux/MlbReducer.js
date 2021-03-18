const initialMlbState = {
    teams: [],
    teamRoster: [],
    playerSeasonStats: [],
    playerCareerStats: []
}

const mlbReducer = (state=initialMlbState, action) => {
        switch (action.type){
            case 'SET_MLB_TEAMS':
                return {...state, teams: action.payload}
            case 'SET_TEAM_ROSTER':
                return {...state, teamRoster: action.payload}
            case 'SET_PLAYER_STATS':
                return {...state, playerSeasonStats: action.payload}
            case 'SET_CAREER_STATS':
                return {...state, playerCareerStats: action.payload}
            default: 
                return {...state}
        }
}

export default mlbReducer