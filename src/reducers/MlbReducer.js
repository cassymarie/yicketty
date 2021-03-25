const nullTeam =  {
    id: null,
    city: '',
    color1: '',
    color2: '',
    division: '',
    league: '',
    logo: '',
    name: '',
    nameFull: '',
    state: '',
    venue: '',
    website: ''
}

const initialMlbState = {
    teams: [],
    teamRoster: [],
    selectedTeam: nullTeam,
    currentPlayer: null,
    playerImages: '',
    playerStats: [],
    pitcherToggle: false,
    cardToggle: false
}

const mlbReducer = (state=initialMlbState, action) => {
        switch (action.type){
            case 'SET_MLB_TEAMS':
                return {...state, teams: action.payload}
            case 'SET_TEAM_ROSTER':
                return {...state, teamRoster: action.payload}
            case 'SET_SELECTED_TEAM':
                return {...state, selectedTeam: action.payload}
            case 'SET_CURRENT_PLAYER':
                return {...state, currentPlayer: action.payload, cardToggle: true}
            case 'UNSELECT_PLAYER':
                    return {...state, currentPlayer: null, cardToggle: false}
            case 'UNSELECT_TEAM':
                return {...state, selectedTeam: nullTeam}
            case 'TOGGLE_PITCHER':
                return {...state, pitcherToggle: true }
            case 'TOGGLE_PITCHER_RESET':
                return {...state, pitcherToggle: false }
            case 'TOGGLE_PLAYER_CARD':
                return {...state, cardToggle: action.payload }
            case 'SET_PLAYER_STATS':
                return {...state, playerStats: action.payload}
            case 'CLEAR_PLAYER_STATS':
                return {...state, playerStats: []}
            case 'SET_PLAYER_IMAGES':
                return {...state, playerImages: action.payload }
            case 'CLEAR_PLAYER_IMAGES':
                return {...state, playerImages: '' }
            default: 
                return {...state}
        }
}

export default mlbReducer