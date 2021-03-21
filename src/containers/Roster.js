import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerRosterRow from '../components/player/PlayerRosterRow'

class Roster extends Component {

  renderList = () => {
    return (
      <>
      <tbody className="">
        {this.props.roster.map(player => <PlayerRosterRow key={player.id} {...player}/>)}
      </tbody>
      </>
    )
  }

  renderHeader = () => {
    return(
      <thead >
        <tr >
          <th className="roster-number">#</th>
          <th className="roster-name">Name</th>
          <th className="roster-position">Pos</th>
        </tr>
      </thead>
    )
  }

  render(){
    return(
      <div className="team-roster">
      <h2 className="page-header"> Team Roster </h2>
      <table>
        {this.renderHeader()}
        {this.renderList()}
      </table>
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