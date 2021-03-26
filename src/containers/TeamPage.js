import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from 'react-bootstrap/Nav'

import { setTeamRoster, setSelectedTeam, unSelectTeam, toggleCardOFF, togglePitcher, togglePitcherReset, resetPlayer } from '../actions/MlbActionCreators.js'

import TeamRoster from './TeamRoster.js'
// import PlayerCard from '../components/player/PlayerCard.js'
// import Lineup from '../components/lineup/Lineup.js'
import TeamHeader from '../components/mlb/TeamHeader.js'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import '../teamPage.css'


class TeamPage extends Component {

    componentDidMount(){
        const id = parseInt(this.props.match.params.id)
        this.props.setSelectedTeam(id)
        this.props.setTeamRoster(id)
    }

    componentWillUnmount(){
        this.props.unSelectTeam()
        this.props.toggleCardOFF()
    }


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

    render(){

        return(
            <Container fluid className="team-page">
                <TeamHeader team={this.props.team}/>
                {this.renderTabs()}
                <TeamRoster />
                {/* <Lineup /> */}
            </Container>
        )        
    }

}

const mapStateToProps = (state) => ({
    roster: state.mlb.teamRoster,
    team: state.mlb.selectedTeam,
    showCard: state.mlb.cardToggle
})


export default connect(mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam, toggleCardOFF, togglePitcher, togglePitcherReset, resetPlayer })(TeamPage)