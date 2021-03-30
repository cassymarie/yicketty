import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerCardStatsRow from './PlayerCardStatsRow.js'
import { resetPlayer, clearStats, clearImages, getPlayerPhotos, getPlayerCareerStats, toggleCardOFF } from '../../actions/MlbActionCreators.js'
import Table from 'react-bootstrap/Table'

class PlayerCard extends Component {

  componentDidMount(){
    this.props.getPlayerPhotos(this.props.player.id)
    this.props.getPlayerCareerStats(this.props.player.id)
  }

  componentWillUnmount(){
    this.props.resetPlayer()
  }


  statsInfo = () => {
    const statsBySeason = this.props.stats

    return(
      <tbody>
        {statsBySeason.length === 'undefined' ? <></> : statsBySeason.map(stat => <PlayerCardStatsRow {...stat}/>) }
      </tbody>
    )
  }

  statsHittingHeader = () => {
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

  statsPitchingHeader = () => {
    return(
      <thead >
        <tr >
          <th className="stats-name"></th>
          <th className="">W</th>
          <th className="">L</th>
          <th className="">ERA</th>
          <th className="">G</th>
          <th className="">GS</th>
          <th className="">SV</th>
          <th className="">IP</th>
          <th className="">SO</th>
          <th className="">WHIP</th>
        </tr>
      </thead>
    )
  }

  cardHeader = () => {
    const background = this.props.images.length === 0 ? 'https://via.placeholder.com/150' : this.props.images.image

    return (
      <>
      <span className="player-card-header" style={{ backgroundImage: `url(${background})`}}>
        <img style={{width:"100px", height:"150px", left:"0px"}}src={this.props.images.headshot} alt={this.props.player.nameFull}/>
        <>
        <div className="player-card-title">
          <p className="card-number">#{this.props.player.jersey}</p>
          <p className="card-name">{this.props.player.nameFull}</p>
          <p className="card-position">{this.props.player.position}</p>
        </div>
        </>
      </span>
      </>
    )
  }

  render(){
 
    return(
      <div className={this.props.page === 'team' ? 'player-card add-margin-card' : 'player-card'}>
        {this.cardHeader()}
        <Table responsive="md" borderless hover size="sm" striped>
          {this.props.pitcherView ? this.statsPitchingHeader() : this.statsHittingHeader()}
          {this.statsInfo()}
        </Table>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  player: state.mlb.currentPlayer,
  images: state.mlb.playerImages,
  stats: state.mlb.playerStats,
  pitcherView: state.mlb.pitcherToggle,
  page: state.app.currentPage
})


export default connect(mapStateToProps, { resetPlayer, clearStats, clearImages, getPlayerPhotos, getPlayerCareerStats, toggleCardOFF })(PlayerCard)