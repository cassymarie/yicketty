import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerRosterRow from '../components/player/PlayerRosterRow'
import { togglePitcher, togglePitcherReset } from '../actions/MlbActionCreators.js'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import PlayerCard from '../components/player/PlayerCard.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class TeamRoster extends Component {
  handleSelect(eventKey, event) {
    console.log('selected', eventKey)
    switch (eventKey){
      case 'hitter':
        return this.props.togglePitcherReset()
      case 'pitcher':
        return this.props.togglePitcher()
      case 'search':
      default:
    } 
  }
  //this.props.togglePitcherReset()

  renderTabs = () => {
    return (
      <>
        <Nav variant="tabs" defaultActiveKey="/mlbteams/:id" onSelect={k => this.handleSelect(k)}>
          <Nav.Item>
            <Nav.Link eventKey="hitter">Hitters</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="pitcher">Pitchers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
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
      <ListGroup className="roster-list">
        {list.map(player => <PlayerRosterRow key={player.id} {...player}/>)}
      </ListGroup>
    )
  }

  render(){
    return(
      <Container>
        {this.renderTabs()}
        <Row>
          <Col xs={4}>
            {this.renderList()}
          </Col>
          <Col  xs={8}>
            {this.props.showCard ? <PlayerCard key={this.props.id} {...this.props}/> : <></> }
          </Col>
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

export default connect(mapStateToProps, { togglePitcher, togglePitcherReset })(TeamRoster);