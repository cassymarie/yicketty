import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerRosterRow from '../components/player/PlayerRosterRow'


class Roster extends Component {

  renderList = () => {
    return (
      <>
      <ul className="roster-list">
          {this.props.roster.map(player => <PlayerRosterRow key={player.id} {...player}/>)}
      </ul>
      </>
    )
  }

  render(){
    return(
      <div className="team-roster">
      <h2 className="page-header"> 2020 - 40 Man Roster (Hitting) </h2>
        {this.renderList()}
      </div>
    )
  }
    
}

const mapStateToProps = (state) => ({
    team: state.mlb.selectedTeam,
    roster: state.mlb.teamRoster,
    stats: state.mlb.playerSeasonStats
  })

export default connect(mapStateToProps)(Roster);