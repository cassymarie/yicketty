import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayerPhotos, setCurrentPlayer, getPlayerCareerStats, toggleCardON, toggleCardOFF } from '../../redux/MlbActionCreators.js'
import { handleLineupChange } from '../../redux/LineupActionCreators.js'
import PlayerCard from './PlayerCard.js'


class PlayerRow extends Component {

  handleClick = (e) => {
    
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

  statePosition = (position) => {
    return(!isNaN(position.slice(0,1)) ? `_${position}` : position)
  }

  addToLineUp= (e) => {
    const row = e.target.parentElement
    let position = this.statePosition(row.children[2].innerText)
    row.className = "player-roster unavailable"
    const existing = this.props.lineup[position]

    if (existing !== null) {
      if (this.props.lineup.DH === null) {
        position = 'DH'
      } else {
        document.getElementById(existing.id).className = "player-roster available"
      }
    }

    this.props.handleLineupChange(position, this.props)
  }

  resetExisitingPlayer = () => {

  }

    render(){
      return (
        this.props.position === "P" ? <></> :
          <li onDoubleClick={this.addToLineUp} onClick={this.handleClick} className="player-roster available" id={this.props.id}>
            <span className="roster-number">{this.props.jersey}</span>
            <span className="roster-name">{this.props.nameFull}</span>
            <span className="roster-position">{this.props.position}</span>
          </li>
      )
    }
}

const mapStateToProps = (state) => ({
  lineup: state.lineup
})

export default connect(mapStateToProps, { getPlayerPhotos, setCurrentPlayer, getPlayerCareerStats, toggleCardON, toggleCardOFF,handleLineupChange })(PlayerRow)

