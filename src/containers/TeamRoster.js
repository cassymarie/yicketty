import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerRosterRow from '../components/player/PlayerRosterRow'
import { togglePitcher, togglePitcherReset, resetPlayer } from '../actions/MlbActionCreators.js'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import PlayerCard from '../components/player/PlayerCard.js'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

class TeamRoster extends Component {

  handleSelect(eventKey) {
    this.props.resetPlayer()
    
    switch (eventKey){
      case 'hitter':
        return this.props.togglePitcherReset()
      case 'pitcher':
        return this.props.togglePitcher()
      case 'search':
      default:
    } 
  }

  renderTabs = () => {
    return (
      <>
        <Nav variant="tabs" defaultActiveKey="/mlbteams/:id" onSelect={k => this.handleSelect(k)}>
          <Nav.Item className="player-tabs">
            <Nav.Link eventKey="hitter">Hitters</Nav.Link>
          </Nav.Item>
          <Nav.Item className="player-tabs">
            <Nav.Link eventKey="pitcher">Pitchers</Nav.Link>
          </Nav.Item>
          <Nav.Item className="player-tabs">
            <Nav.Link  eventKey="search">Search</Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    )
  }

  renderList = () => {
    const list = this.props.toggle ? this.props.roster.filter(player => player.position === "P") :
    this.props.roster.filter(player => player.position !== "P")

    return (
      <>
      <h4>{this.props.toggle ? "Pitchers" : "Hitters"}</h4>
      <ListGroup className="roster-list">
        {list.map(player => <PlayerRosterRow key={player.id} {...player}/>)}
      </ListGroup>
      </>
    )
  }

  render(){
    return(
      <Container fluid>
        {this.renderTabs()}
        <Row>
          {this.props.showCard ? <><PlayerCard key={this.props.id} {...this.props}/></> : <div classname="card-placeholder"></div> }
          {this.renderList()}
        </Row>
      </Container>
    )
  }
    
}

const mapStateToProps = (state) => ({
    team: state.mlb.selectedTeam,
    roster: state.mlb.teamRoster,
    player: state.mlb.selectedPlayer,
    stats: state.mlb.playerSeasonStats,
    toggle: state.mlb.pitcherToggle,
    showCard: state.mlb.cardToggle
  })

export default connect(mapStateToProps, { togglePitcher, togglePitcherReset, resetPlayer })(TeamRoster);