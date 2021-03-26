const nullTeam =  {
    id: null,
    city: '',
    color1: '',
    color2: '',
    division: '',
    league: '',
    logo: '',
    name: '',
    fullName: '',
    state: '',
    venue: '',
    website: ''
}
const baseImages = {headshot: 'https://st2.depositphotos.com/4111759/12123/v/600/depositphotos_121233262-stock-illustration-male-default-placeholder-avatar-profile.jpg', image: "https://securea.mlb.com/images/players/action_shots/stl_low_resolution.jpg" }

const initialMlbState = {
    teams: [],
    teamRoster: [],
    selectedTeam: nullTeam,
    currentPlayer: null,
    playerImages: baseImages,
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
                    return {...state, currentPlayer: null, cardToggle: false, playerStats: [], playerImages: baseImages}
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