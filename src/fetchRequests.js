const configObj = {
    method: "GET",
    headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": "mlb-data.p.rapidapi.com",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }}

const baseUrl = `https://mlb-data.p.rapidapi.com/json/named.`

const queryTopic = {
    teams: 'team_all_season',
    players: 'roster_team_alltime',
    playerSearch: 'search_player_all',
    player: 'player_info',
    stats: {
        pitcher: {
            projected: 'proj_pecota_pitching', // player_id='592789'&league_list_id='mlb'&season='2017'
            career: 'sport_career_pitching', // player_id='592789'&league_list_id='mlb'&game_type='R'
            league: 'sport_career_pitching_lg', // league_list_id='mlb'&game_type='R'&player_id='592789'
            season: 'sport_pitching_tm' // season='2017'&player_id='592789'&league_list_id='mlb'&game_type='R'
        },
        hitter: {
            projected: 'proj_pecota_batting', // player_id='592789'&league_list_id='mlb'&season='2017''
            career: 'sport_career_hitting', // player_id='592789'&game_type='R'&league_list_id='mlb'"
            league: 'sport_career_hitting_lg', // league_list_id='mlb'&game_type='R'&player_id='592789'
            season: 'sport_hitting_tm' // season='2017'&player_id='493316'&league_list_id='mlb'&game_type='R'
        }
    },
    games: 'org_game_type_date_info'
}

export const getBy = (type) => {
    const queryType = queryTopic[type]
    switch (type){
        case 'teams':
            return  (season) => `${baseUrl}${queryType}.bam?season=${season}&all_star_sw='N'&sort_order=name_asc`
        case 'players':
            return (team_id, start_season='2020',end_season='2020',) => `${baseUrl}${queryType}.bam?end_season=${end_season}&team_id=${team_id}&start_season=${start_season}&all_star_sw='N'`
        case 'playerSearch':
            return (name_part, active=true) => {
                let activeStatus = (active) ? 'Y' : 'N'
                return `${baseUrl}${queryType}.bam?sport_code='mlb'&name_part=${name_part}&active_sw=${activeStatus}`
            }
        case 'player':
            return (player_id) => `${baseUrl}${queryType}.bam?sport_code='mlb'&player_id=${player_id}`
        case 'stats':
            return (statType) => {
                return (position, player_id) => {
                    let searchby = queryTopic[type][position][statType]
                    return `${baseUrl}${searchby}.bam?sport_code='mlb'&player_id=${player_id}`}
            }
        case 'games':
            //Example: 'L' 'R' - Regular Season 'S' - Spring Training 'E' - Exhibition 'A' - All Star Game 'D' - Division Series 'F' - First Round (Wild Card) 'L' - League Championship 'W' - World Series
            return (season='2020', game_type='R') => `${baseUrl}${queryType}.bam?game_type=${game_type}&season=${season}`
        default:
            return ''
    }
}


export function getData(query){
    const regex = baseUrl.replace(new RegExp('/', 'g'), '\/') + `(.*)[.]`;
    const find = query.match(regex)[1]

    fetch(query, configObj)
    .then(response => response.json())
    .then(json => { 
        const data = json[find].queryResults.row
        console.log(`${find}:`, data)
        debugger
        return data
    })
}
