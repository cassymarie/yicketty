import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerCardStatsRow from './PlayerCardStatsRow.js'

class PlayerCard extends Component {
  
  componentWillUnmount(){

  }
  
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
        <>
        <span className="player-card-header" style={{ backgroundImage: `url(${this.props.images.image})`}}>
          <img style={{width:"100px", height:"150px", left:"0px"}}src={this.props.images.headshot} alt={this.props.player.nameFull}/>
          <>
          <div className="player-card-title">
            <p>#{this.props.player.jersey}</p><p>{this.props.player.nameFull}</p><p>{this.props.player.position}</p>
          </div>
          </>
        </span>
        </>
        
        <table className="table table-striped stats-table">
          {this.statsHeader()}
          {this.statsInfo()}
        </table>
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