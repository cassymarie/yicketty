const API = "http://localhost:3000"

export const handleLineupChange = (position, player) => ({type: 'LINEUP_CHANGE', payload: {name: position, value: player}})

// export const submitLineupForm = (form) => ({type: 'SET_LINEUP', payload: form})
export const getUserLineups = () => {
    return (dispatch) => {
        fetch(`${API}/lineups`,{
            method: 'GET',
            headers: {
                'Authorization': localStorage.token
            }})
          .then(response => response.json())
          .then(lineups => {
            const stateLineups = []
            
            const lineupPlayers = lineups.included.map(player => player.attributes)
                lineups.data.forEach(row=>{
                    const roster = []
                    const players = lineupPlayers.filter(player => player.lineup.id === row.attributes.id)
                        players.forEach(pos => {
                            const player = {name: pos.mlb_player.name_display_first_last, 
                                order:pos.position, nameLast: pos.mlb_player.last_name, keyId: pos.id, position: (pos.dh ? "DH" : pos.mlb_player.position_txt), playerId: pos.mlb_player.id}
                            roster.push(player)
                        })
                    const lineup = {id: row.attributes.id, team: row.attributes.mlb_team.name, season: row.attributes.season, roster: roster }
                    stateLineups.push(lineup)
            })
              
            dispatch({ type: 'USERS_LINEUPS', payload: stateLineups })})
      }
}

export const newLineup = () => {
    return (dispatch) => {
        fetch(`${API}/lineups`,{
            method: 'POST',
            headers: {
                'Authorization': localStorage.token
            }})
            .then(response => response.json())
            .then(lineup => {
                dispatch({ type: 'NEW_LINEUP', payload: lineup })})
            }
      }


export const submitLineupForm = (form) => {
    debugger
    return (dispatch) => {
        fetch(`${API}/lineup_players`, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(response => {
            dispatch({ 
            type: 'SET_LINEUP', 
            payload: response.user.data.attributes
        })
    })
    }
}

