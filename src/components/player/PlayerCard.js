import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerCardStatsRow from './PlayerCardStatsRow.js'
import { resetPlayer, clearStats, clearImages, getPlayerPhotos, getPlayerCareerStats, toggleCardOFF } from '../../actions/MlbActionCreators.js'
import Spinner from 'react-bootstrap/Spinner'

class PlayerCard extends Component {

  componentWillUnmount(){
    this.props.clearStats()
    this.props.clearImages()
    this.props.resetPlayer()
    this.props.toggleCardOFF()
  }

  loading = () => {
    return(
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }

  statsInfo = () => {
    const statsBySeason = this.props.stats
    return(
      <tbody>
        {statsBySeason.length === 'undefined' ? this.loading() : statsBySeason.map(stat => <PlayerCardStatsRow {...stat}/>) }
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
    const background = this.props.images.length === 0 ? 'https://via.placeholder.com/150' : this.props.images.image

    return(
      <div className="player-card">
        <>
        <span className="player-card-header" style={{ backgroundImage: `url(${background})`}}>
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


export default connect(mapStateToProps, { resetPlayer, clearStats, clearImages, getPlayerPhotos, getPlayerCareerStats, toggleCardOFF })(PlayerCard)