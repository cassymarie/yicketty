import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTeamRoster, setSelectedTeam, unSelectTeam, toggleCardOFF, togglePitcher, togglePitcherReset, resetPlayer } from '../actions/MlbActionCreators.js'

import LineupTeamForm from '../components/lineup/LineupTeamForm.js'
import LineupForm from '../components/lineup/LineupForm.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import TeamRoster from './TeamRoster.js'
import '../teamPage.css'


class NewLineupSection extends Component {

    componentDidMount(){

    }

    componentWillUnmount(){
        this.props.unSelectTeam()
    }


  // handleSelect(eventKey) {
  //   this.props.resetPlayer()
  //   switch (eventKey){
  //     case 'hitter':
  //       return this.props.togglePitcherReset()
  //     case 'pitcher':
  //       return this.props.togglePitcher()
  //     case 'search':
  //     default:
  //   } 
  // }

    render(){

        return(
            <Container fluid className="team-page">
              { this.props.newToggle ? <Col xs={6}><LineupTeamForm/></Col> : <></> }
              { this.props.team.id ? <Row> <Col><TeamRoster/></Col><Col><LineupForm/></Col> </Row> : <></> }
            </Container>
        )        
    }

}


const mapStateToProps = (state) => ({
    roster: state.mlb.teamRoster,
    team: state.mlb.selectedTeam,
    newToggle: state.lineup.toggleLineup
})


export default connect(mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam, toggleCardOFF, togglePitcher, togglePitcherReset, resetPlayer })(NewLineupSection)