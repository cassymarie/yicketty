import React, { Component } from 'react'
import { connect } from 'react-redux'
// import PlayerCard from '../player/PlayerCard.js'
import { getPlayerPhotos, setCurrentPlayer, resetPlayer, getPlayerCareerStats, toggleCardON, toggleCardOFF } from '../../actions/MlbActionCreators.js'
import { handleLineupChange } from '../../actions/LineupActionCreators.js'
import { ArrowRight, CardList } from 'react-bootstrap-icons'
import { Card, Accordion, Button, ListGroup } from 'react-bootstrap'
import PlayerCard from '../player/PlayerCard.js'


class PlayerRosterRow extends Component {

  handleClick = (e) => {

    e.stopPropagation()
    const playerId = (e.target.tagName === 'P' || e.target.tagName === 'svg') ? e.target.parentNode.id : e.target.tagName === 'path' ? e.target.parentElement.parentElement.id : e.target.id

    this.props.showCard ? this.props.resetPlayer() : this.props.setCurrentPlayer(playerId)

  }

  teamRosterRow = () => {
    return(
      <ListGroup.Item action onClick={this.handleClick} bsPrefix="player-roster" id={this.props.id}>
        <p onClick={this.handleClick}  className="roster-number">{this.props.jersey}</p>
        <p onClick={this.handleClick}  className="roster-name">{this.props.nameFull}</p>
        <p onClick={this.handleClick}  className="roster-position">{this.props.position}</p>
      </ListGroup.Item>
    )
  }

  statePosition = (position) => {
    return(!isNaN(position.slice(0,1)) ? `_${position}` : position)
  }

  addToLineUp= (e) => {

    e.stopPropagation()
    const row = e.currentTarget.parentElement
    let position = this.statePosition(row.children[1].textContent)
    let existing = null

    if (position === 'OF') {
      let of = this.props.outfield
      const posIndex = of.filter(x => x !== null).length
      
      posIndex < 3 ? position = `OF${posIndex + 1}` : existing = 'Full'
    } else {
      existing = this.props.form[position]
    }

    row.className = "player-roster unavailable"

    if (existing !== null) {
      if (this.props.form.DH === null) {
        position = 'DH'
      } else {
        document.getElementById(existing.id).className = "player-roster available"
      }
    }

    this.props.handleLineupChange(position, {id: this.props.id, nameFull: this.props.nameFull, position })
  }

  lineupRosterRow = () => {
    const outfield = ['RF','CF','LF']
    const position = outfield.includes(this.props.position) ? "OF" : this.props.position
    return(
      <Card>
        <ListGroup.Item id={this.props.id} bsPrefix="lineup-roster-row">
        <Accordion.Toggle as={Button} bsPrefix="lineup-roster-card" variant="light" eventKey={this.props.id} onClick={this.handleClick}  id={this.props.id}>
          <CardList className="lineup-btn-card" width="2em" height="2em"/>
        </Accordion.Toggle>
          <div className="lineup-roster-position">{position}</div>
          <div className="lineup-roster-name">{this.props.nameFull}</div>
          <Button variant="light" onClick={this.addToLineUp}><ArrowRight short/></Button>
        </ListGroup.Item>
        <Accordion.Collapse  eventKey={this.props.id}>
          {this.props.showCard ? <><PlayerCard eventKey={this.props.id} key={this.props.id}/></> : <div classname="card-placeholder"></div>}
        </Accordion.Collapse>
      </Card>
    )
  }


  

    render(){
      return (
         this.props.page === 'team' ? this.teamRosterRow() : this.lineupRosterRow()
      )
    }
}

const mapStateToProps = (state) => ({
  lineup: state.lineup,
  togglePitcher: state.mlb.togglePitcher,
  page: state.app.currentPage,
  toggleLineup: state.lineup.toggleLineup,
  form: state.lineup.lineupForm,
  player: state.mlb.currentPlayer,
  outfield: [state.lineup.lineupForm.OF1,state.lineup.lineupForm.OF2,state.lineup.lineupForm.OF3],
  showCard: state.mlb.cardToggle
})

export default connect(mapStateToProps, { getPlayerPhotos, setCurrentPlayer, resetPlayer, getPlayerCareerStats, toggleCardON, toggleCardOFF, handleLineupChange })(PlayerRosterRow)



  