import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
// import Lineup from '../lineup/Lineup.js'
import MyLineups from '../../containers/MyLineups.js'
import NewLineupSection from '../../containers/NewLineupSection.js'
import { getUserLineups, toggleExistingLineups } from '../../actions/LineupActionCreators.js'
import '../../lineup.css'

class MyPage extends Component {

    componentDidMount(){
        this.props.getUserLineups()
        this.props.toggleExistingLineups()
    }

    componentWillUnmount(){
       
    }

    render(){

        return(
        <Container fluid className="my-page">
            <h2>MY PROFILE PAGE</h2>
            <MyLineups />
            <NewLineupSection />
        </Container>
        )        
    }

}

// const mapStateToProps = (state) => ({
//     // roster: state.mlb.teamRoster,
//     // team: state.mlb.selectedTeam
// })

//mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam }
export default connect(null, { getUserLineups, toggleExistingLineups })(MyPage)