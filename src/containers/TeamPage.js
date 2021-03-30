import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTeamRoster, setSelectedTeam, unSelectTeam, toggleCardOFF, togglePitcher, togglePitcherReset, resetPlayer } from '../actions/MlbActionCreators.js'
import { currentPage } from '../actions/AppActionCreators.js'
import PlayerCard from '../components/player/PlayerCard.js'
import TeamRoster from './TeamRoster.js'
import TeamHeader from '../components/mlb/TeamHeader.js'
import { Container, Col, Row } from 'react-bootstrap'

import '../styles/teamPage.css'


class TeamPage extends Component {

    componentDidMount(){
        this.props.currentPage('team')
        const id = parseInt(this.props.match.params.id)
        this.props.setSelectedTeam(id)
        this.props.setTeamRoster(id)
    }

    componentWillUnmount(){
        this.props.unSelectTeam()
        this.props.toggleCardOFF()
        this.props.currentPage('')
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


    render(){

        return(
            <Container fluid className="team-page">
                <TeamHeader team={this.props.team}/>
                <Row>
                  <Col>
                    <TeamRoster />
                  </Col>
                  <Col>
                    {(this.props.showCard && this.props.player )? <PlayerCard /> : <></>}
                  </Col>
                </Row>
            </Container>
        )        
    }

}

const mapStateToProps = (state) => ({
    roster: state.mlb.teamRoster,
    player: state.mlb.currentPlayer,
    team: state.mlb.selectedTeam,
    showCard: state.mlb.cardToggle
})


export default connect(mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam, toggleCardOFF, togglePitcher, togglePitcherReset, resetPlayer, currentPage })(TeamPage)