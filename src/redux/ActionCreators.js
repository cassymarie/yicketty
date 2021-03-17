// const RAPID_API_URL = `https://mlb-data.p.rapidapi.com/json/named.`
const API = "http://localhost:3000"

// const apiQuery = (type) => {

// }

// const apiConfigObj = {
//     method: "GET",
//     headers: {
//         "x-rapidapi-key": process.env['REACT_APP_RAPID_API_KEY'],
//         "x-rapidapi-host": "mlb-data.p.rapidapi.com",
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     }}

// const queryTopics = {
//     teams: 'team_all_season',
//     players: 'roster_team_alltime',
//     playerSearch: 'search_player_all',
//     playerTeams: 'player_teams',
//     player: 'player_info',
//     stats: {
//         pitcher: {
//             projected: 'proj_pecota_pitching', 
//             career: 'sport_career_pitching', 
//             league: 'sport_career_pitching_lg', 
//             season: 'sport_pitching_tm'
//         },
//         hitter: {
//             projected: 'proj_pecota_batting', 
//             career: 'sport_career_hitting', 
//             league: 'sport_career_hitting_lg', 
//             season: 'sport_hitting_tm'
//         }
//     },
//     games: 'org_game_type_date_info'
// }


export const addMlbTeams = () => ({type: 'MLB_TEAMS'})
export const addTeamRoster = () => ({type: 'MLB_TEAM_ROSTER'})
export const getMlbTeams = () => {
    return (dispatch) => {
      fetch(`${API}/mlbTeams`)
        .then(response => response.json())
        .then(mlb => dispatch({ type: 'SET_MLB_TEAMS', payload: mlb }));
    };
  } 