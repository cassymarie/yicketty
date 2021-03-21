import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerCardStatsRow from './PlayerCardStatsRow.js'

class PlayerCard extends Component {
  
  statsInfo = () => {
    return(
      <tbody>
        {this.props.stats.map(stat => <PlayerCardStatsRow {...stat}/>)}
      </tbody>
    )

  }

  statsHeader = () => {
    return(
      <thead >
        <tr >
          <th className="stats-name"></th>
          <th className="">AB</th>
          <th className="">R</th>
          <th className="">H</th>
          <th className="">HR</th>
          <th className="">RBI</th>
          <th className="">SB</th>
          <th className="">AVG</th>
          <th className="">OBP</th>
          <th className="">OPS</th>
        </tr>
      </thead>
    )
  }

  render(){
    return(
      <div className="player-card">
        <><h2>#{this.props.player.jersey}</h2><h4>{this.props.player.nameFull}</h4></>
        <p>{this.props.player.position}</p>
        {this.statsHeader()}
        {this.statsInfo()}
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  player: state.mlb.currentPlayer,
  images: state.mlb.playerImages,
  stats: state.mlb.playerStats
})


export default connect(mapStateToProps)(PlayerCard)