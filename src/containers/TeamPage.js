import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { setTeamRoster, setSelectedTeam, unSelectTeam, toggleCardOFF } from '../actions/MlbActionCreators.js'
// import { } from '../actions/LineupActionCreators.js'
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

    render(){

        return(
            <Container fluid className="team-page">
                <TeamHeader team={this.props.team}/>
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


export default connect(mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam, toggleCardOFF })(TeamPage)