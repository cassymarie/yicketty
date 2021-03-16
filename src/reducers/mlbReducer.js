export default function mlbReducer(state = {
    teams: [],
    players: [],
    games: []
    }, action 
    ) {
    
        switch (action.type){
            case 'SETUP_TEAMS':
                return state
            case '':
                return state
            default: 
                return state
        }
}