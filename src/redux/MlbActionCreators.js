const API = "http://localhost:3000"

export const addMlbTeams = () => ({type: 'MLB_TEAMS'})
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
export const unSelectTeam = () => ({type: 'UNSELECT_TEAM'})

export const setTeamRoster = (id) => {
  return (dispatch) => {
    fetch(`${API}/mlb/teams/${id}/roster`)
      .then(response => response.json())
      .then(teamRoster => dispatch({ type: 'SET_TEAM_ROSTER', payload: teamRoster}));
  };
}
export const getPlayerSeasonStats = (id) => {
  return (dispatch) => {
    fetch(`${API}/mlb/player/${id}/season_stats`)
      .then(response => response.json())
      .then(stats => dispatch({ type: 'SET_PLAYER_STATS', payload: stats }));
  };
} 
export const getPlayerCareerStats = (id) => {
  return (dispatch) => {
    fetch(`${API}/mlb/player/${id}/career_stats`)
      .then(response => response.json())
      .then(stats => dispatch({ type: 'SET_CAREER_STATS', payload: stats }));
  };
} 