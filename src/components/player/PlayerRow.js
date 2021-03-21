import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayerPhotos, setCurrentPlayer, getPlayerCareerStats, toggleCardON } from '../../redux/MlbActionCreators.js'
import PlayerCard from './PlayerCard.js'

// import Draggable from 'react-draggable'

class PlayerRow extends Component {

  handleClick = (e) => {
    const playerId = e.target.parentElement.id
    this.props.setCurrentPlayer(playerId)
    this.props.getPlayerPhotos(playerId)
    this.props.getPlayerCareerStats(playerId)
    this.props.toggleCardON()
    console.log("clicked: ",this.props)

    return(
      <>
        <PlayerCard key={this.props.id} {...this.props}/>
      </>
    )
  }

    render(){
      return (
        this.props.position === "P" ? <></> :
          (<tr onClick={this.handleClick} className="player-roster" id={this.props.id}>
            <td className="roster-number">{this.props.jersey}</td>
            <td className="roster-name">{this.props.nameLast}, {this.props.nameFirst}</td>
            <td className="roster-position">{this.props.position}</td>
          </tr>)
      )
    }
}

export default connect(null, { getPlayerPhotos, setCurrentPlayer, getPlayerCareerStats, toggleCardON })(PlayerRow)

