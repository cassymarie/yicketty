import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlayerPhotos, setCurrentPlayer, resetPlayer, getPlayerCareerStats, toggleCardON, toggleCardOFF } from '../../actions/MlbActionCreators.js'
import { handleLineupChange } from '../../actions/LineupActionCreators.js'
// import PlayerCard from './PlayerCard.js'
import ListGroup from 'react-bootstrap/ListGroup'
// import Row from 'react-bootstrap/Row'


class PlayerRosterRow extends Component {

  handleClick = (e) => {
    this.props.resetPlayer()

    e.stopPropagation()
    
    const playerId = e.target.tagName === 'P' ? e.target.parentNode.id : e.target.id

    this.props.setCurrentPlayer(playerId)
    // this.props.getPlayerPhotos(playerId)
    // this.props.getPlayerCareerStats(playerId)
    // this.props.toggleCardON()
  }

  // renderPlayers = () => {
  // return(!isNaN(position.slice(0,1)) ? `_${position}` : position)
  // }

  // statePosition = (position) => {
  //   return(!isNaN(position.slice(0,1)) ? `_${position}` : position)
  // }

  // addToLineUp= (e) => {
  //   const row = e.target.parentElement
  //   let position = this.statePosition(row.children[2].innerText)
  //   row.className = "player-roster unavailable"
  //   const existing = this.props.lineup[position]

  //   if (existing !== null) {
  //     if (this.props.lineup.DH === null) {
  //       position = 'DH'
  //     } else {
  //       document.getElementById(existing.id).className = "player-roster available"
  //     }
  //   }

  //   this.props.handleLineupChange(position, this.props)
  // }

    render(){
      return (
        <ListGroup.Item action onClick={this.handleClick} bsPrefix="player-roster" id={this.props.id}>
          {/* <Row> */}
            <p onClick={this.handleClick}  className="roster-number">{this.props.jersey}</p>
            <p onClick={this.handleClick}  className="roster-name">{this.props.nameFull}</p>
            <p onClick={this.handleClick}  className="roster-position">{this.props.position}</p>
          {/* </Row> */}
        </ListGroup.Item>
      )
    }
}

const mapStateToProps = (state) => ({
  lineup: state.lineup,
  togglePitcher: state.mlb.togglePitcher
})

export default connect(mapStateToProps, { getPlayerPhotos, setCurrentPlayer, resetPlayer, getPlayerCareerStats, toggleCardON, toggleCardOFF,handleLineupChange })(PlayerRosterRow)

