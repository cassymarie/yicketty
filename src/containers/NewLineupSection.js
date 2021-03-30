import React, { Component } from 'react'
import { connect } from 'react-redux'

import { unSelectTeam } from '../actions/MlbActionCreators.js'
import { resetLineup } from '../actions/LineupActionCreators.js'
import LineupTeamForm from '../components/lineup/LineupTeamForm.js'
import LineupForm from '../components/lineup/LineupForm.js'
import TeamRoster from './TeamRoster.js'
import '../styles/teamPage.css'

import { Container, Row, Col } from 'react-bootstrap'

class NewLineupSection extends Component {

    componentDidMount(){
        this.props.resetLineup()
    }

    componentWillUnmount(){
        this.props.unSelectTeam()
    }

    render(){

        return(
            <Container fluid className="team-page">
              <Col xs={4}><LineupTeamForm/></Col> 
              { this.props.roster.length > 0 ? <Row> <Col><TeamRoster/></Col><Col><LineupForm/></Col> </Row> : <></> }
            </Container>
        )        
    }

}


const mapStateToProps = (state) => ({
    roster: state.mlb.teamRoster,
    team: state.mlb.selectedTeam
})


export default connect(mapStateToProps, { unSelectTeam, resetLineup })(NewLineupSection)