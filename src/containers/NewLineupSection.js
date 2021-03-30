import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTeamRoster, setSelectedTeam, unSelectTeam, toggleCardOFF, togglePitcher, togglePitcherReset, resetPlayer } from '../actions/MlbActionCreators.js'

import LineupTeamForm from '../components/lineup/LineupTeamForm.js'
import LineupForm from '../components/lineup/LineupForm.js'
import TeamRoster from './TeamRoster.js'
import '../styles/teamPage.css'

import { Container, Row, Col } from 'react-bootstrap'


class NewLineupSection extends Component {

    componentWillUnmount(){
        this.props.unSelectTeam()
    }

    render(){

        return(
            <Container fluid className="team-page">
              <Col xs={6}><LineupTeamForm/></Col> 
              { this.props.team.id ? <Row> <Col><TeamRoster/></Col><Col><LineupForm/></Col> </Row> : <></> }
            </Container>
        )        
    }

}


const mapStateToProps = (state) => ({
    roster: state.mlb.teamRoster,
    team: state.mlb.selectedTeam
})


export default connect(mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam, toggleCardOFF, togglePitcher, togglePitcherReset, resetPlayer })(NewLineupSection)