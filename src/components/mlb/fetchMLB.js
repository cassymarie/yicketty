// // const baseUrl = `https://mlb-data.p.rapidapi.com/json/named.`

// // const configObj = {
// //     method: "GET",
// //     headers: {
// //         "x-rapidapi-key": process.env['REACT_APP_RAPID_API_KEY'],
// //         "x-rapidapi-host": "mlb-data.p.rapidapi.com",
// //         "Content-Type": "application/json",
// //         "Accept": "application/json"
// //     }}

// const queryTopic = {
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

// export const getQuery = (type) => {
//     const queryType = queryTopic[type]
//     switch (type){
//         case 'teams':
//             return  (season='2020') => `${baseUrl}${queryType}.bam?season='${season}'&all_star_sw='N'&sort_order=name_asc`
//         case 'players':
//             return (team_id, start_season='2020',end_season='2020',) => `${baseUrl}${queryType}.bam?end_season=${end_season}&team_id=${team_id}&start_season=${start_season}&all_star_sw='N'`
//         case 'playerSearch':
//             return (name_part, active=true) => {
//                 let activeStatus = (active) ? 'Y' : 'N'
//                 return `${baseUrl}${queryType}.bam?sport_code='mlb'&name_part='${name_part}'&active_sw=${activeStatus}`}
//         case 'player':
//             return (player_id) => `${baseUrl}${queryType}.bam?sport_code='mlb'&player_id='${player_id}'`
//         case 'stats':
//             return (statType) => {
//                 return (position, player_id, season='2020', game_type='R') => {
//                     let searchby = queryTopic[type][position][statType]
//                     switch (statType){
//                         case 'projected':
//                             return `${baseUrl}${searchby}.bam?sport_code='mlb'&player_id=${player_id}`
//                         case 'career' || 'league':
//                             return `${baseUrl}${searchby}.bam?sport_code='mlb'&player_id=${player_id}&game_type=${game_type}`
//                         case 'season':
//                             return `${baseUrl}${searchby}.bam?sport_code='mlb'&player_id=${player_id}&season=${season}`
//                         default:
//                             return `${baseUrl}${searchby}.bam?sport_code='mlb'&player_id=${player_id}`
//                     }
//                 }}
//         case 'games':
//             //'R'-'Regular Season 'S'-'Spring Training 'E'-'Exhibition 'A'-'All Star Game 'D'-'Division Series 'F'-'First Round (Wild Card) 'L'-'League Championship 'W'-'World Series
//             return (season='2020', game_type='R') => `${baseUrl}${queryType}.bam?game_type=${game_type}&season=${season}`
//         default:
//             return ''
//     }
// }

// export function getData(query){

//     const regex = `${baseUrl.replace(new RegExp('/', 'g'), '\\/')}(.*)[.]`
//     const find = query.match(regex)[1]
    
//     fetch(query, configObj)
//     .then(response => response.json())
//     .then(json => { 
//         const results = json[find].queryResults.row
//         if (find === 'team_all_season'){
//             const results = results.filter(team => team.sport_code === "mlb")
//             console.log(`MLB Teams`, results)
//             return mlb
//         } else {
//             console.log(`${find}:`, results)
//             return data
//         }
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }

