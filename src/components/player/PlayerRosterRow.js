import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayerPhotos, setCurrentPlayer, getPlayerCareerStats, toggleCardON, toggleCardOFF } from '../../redux/MlbActionCreators.js'
import PlayerCard from './PlayerCard.js'

// import Draggable from 'react-draggable'

class PlayerRow extends Component {

  handleClick = (e) => {
    this.props.toggleCardOFF()
    const playerId = e.target.parentElement.id
    this.props.setCurrentPlayer(playerId)
    this.props.getPlayerPhotos(playerId)
    this.props.getPlayerCareerStats(playerId)
    this.props.toggleCardON()
    return(
      <>
        <PlayerCard key={this.props.id} {...this.props}/>
      </>
    )
  }

    render(){
      return (
        this.props.position === "P" ? <></> :
          (<li onClick={this.handleClick} className="player-roster" id={this.props.id}>
            <span className="roster-number">{this.props.jersey}</span>
            <span className="roster-name">{this.props.nameLast}, {this.props.nameFirst}</span>
            <span className="roster-position">{this.props.position}</span>
          </li>)
      )
    }
}

export default connect(null, { getPlayerPhotos, setCurrentPlayer, getPlayerCareerStats, toggleCardON, toggleCardOFF  })(PlayerRow)

