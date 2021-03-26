import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
// import Lineup from '../lineup/Lineup.js'
import MyLineups from '../../containers/MyLineups.js'
import { getUserLineups } from '../../actions/LineupActionCreators.js'

class MyPage extends Component {

    componentDidMount(){
        this.props.getUserLineups()
    }

    componentWillUnmount(){
       
    }

    render(){

        return(
        <Container fluid className="my-page">
            <h2>MY PROFILE PAGE</h2>
            <MyLineups />
        </Container>
        )        
    }

}

// const mapStateToProps = (state) => ({
//     // roster: state.mlb.teamRoster,
//     // team: state.mlb.selectedTeam
// })

//mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam }
export default connect(null, { getUserLineups })(MyPage)