const API = "http://localhost:3000"

export const addMlbTeams = () => ({type: 'MLB_TEAMS'})
export const toggleCardON = () => ({type: 'TOGGLE_PLAYER_CARD', payload: true })
export const toggleCardOFF = () => ({type: 'TOGGLE_PLAYER_CARD', payload: false })
export const getMlbTeams = () => {
    return (dispatch) => {
      fetch(`${API}/mlb/teams`)
        .then(response => response.json())
        .then(mlb => dispatch({ type: 'SET_MLB_TEAMS', payload: mlb }));
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
      .then(player => dispatch(
        { type: 'SET_CURRENT_PLAYER', payload: player.data.attributes }));
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
      .then(stats => dispatch({ type: 'SET_CAREER_STATS', payload: stats.stats }));
  };
} 

export const getPlayerPhotos = (id) => {
  return (dispatch) => {
    fetch(`${API}/mlb/player/${id}/images`)
      .then(response => response.json())
      .then(images => dispatch({ type: 'SET_PLAYER_IMAGES', payload: images }));
  }
}