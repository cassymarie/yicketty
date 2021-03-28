const API = "http://localhost:3000"

export const addMlbTeams = () => ({type: 'MLB_TEAMS'})

export const toggleCardON = () => ({type: 'TOGGLE_PLAYER_CARD', payload: true })
export const toggleCardOFF = () => ({type: 'TOGGLE_PLAYER_CARD', payload: false })

export const togglePitcher = () => ({type: 'TOGGLE_PITCHER'})
export const togglePitcherReset = () => ({type: 'TOGGLE_PITCHER_RESET'})

export const resetPlayer = () => ({type: 'UNSELECT_PLAYER'})
export const clearStats = () => ({type: 'CLEAR_PLAYER_STATS'})
export const clearImages = () => ({type: 'CLEAR_PLAYER_IMAGES'})

export const filteredRoster = (list) => ({type: 'FILTERED_ROSTER', payload: list})

export const getMlbTeams = () => {
    return (dispatch) => {
      fetch(`${API}/mlb/teams`)
        .then(response => response.json())
        .then(mlb => {
          const teams = mlb.data.map(team => {
            let mlbTeam = team.attributes
            delete mlbTeam.lineups
            return mlbTeam  
          })
          dispatch({ type: 'SET_MLB_TEAMS', payload: teams })});
    };
  }

export const setSelectedTeam = (id) => {
  return (dispatch) => {
    fetch(`${API}/mlb/teams/${id}`)
      .then(response => response.json())
      .then(selectedTeam => dispatch({ type: 'SET_SELECTED_TEAM', payload: selectedTeam }));
  };
} 

export const setCurrentPlayer = (id) => {
  return (dispatch) => {
    fetch(`${API}/mlb/player/${id}`)
      .then(response => response.json())
      .then(player => {
        dispatch({ type: 'SET_CURRENT_PLAYER', payload: player.data.attributes })});
  };
}

export const unSelectTeam = () => ({type: 'UNSELECT_TEAM'})

export const setTeamRoster = (id) => {
  return (dispatch) => {
    fetch(`${API}/mlb/teams/${id}/roster`)
      .then(response => response.json())
      .then(teamRoster => {
        const roster = teamRoster.data.map(team => team.attributes)
        dispatch({ type: 'SET_TEAM_ROSTER', payload: roster })
    })
  }}

export const getPlayerCareerStats = (id) => {
  return (dispatch) => {
    fetch(`${API}/mlb/player/${id}/career`)
      .then(response => response.json())
      .then(stats => {
        const playerStats = stats.stats
        const statsPayload = []
        // debugger
        playerStats.forEach(stat => {if(stat){ Object.keys(stat).includes("player_id") ? 
              statsPayload.push(stat) : stat.forEach(trade => statsPayload.push(trade))
            }})

        dispatch({ type: 'SET_PLAYER_STATS', payload: statsPayload })});
  };
} 

export const getPlayerPhotos = (id) => {
  return (dispatch) => {
    fetch(`${API}/mlb/player/${id}/images`)
      .then(response => response.json())
      .then(images => dispatch({ type: 'SET_PLAYER_IMAGES', payload: images }));
  }
}