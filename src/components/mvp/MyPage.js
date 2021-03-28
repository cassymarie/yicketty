import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import Lineup from '../lineup/Lineup.js'
import MyLineups from '../../containers/MyLineups.js'
import NewLineupSection from '../../containers/NewLineupSection.js'
import { getUserLineups, toggleExistingLineups, toggleNewLineup } from '../../actions/LineupActionCreators.js'
import '../../lineup.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Accordian from 'react-bootstrap/Accordion'
import { ThreeDots } from 'react-bootstrap-icons'

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
            <Accordian defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Row>
                    <div className="main-title">My Lineups</div>
                    <Accordian.Toggle eventKey="0" className="lineup-hdr-btn">
                        <ThreeDots className="lineup-hdr-btn" width="2em" height="2em" />
                    </Accordian.Toggle>
                </Row>
                </Card.Header>
                <Accordian.Collapse eventKey="0">
                    <MyLineups />
                </Accordian.Collapse>
            </Card>
            <Card>
            <Card.Header>
                <Row>
                    <div className="main-title">Create New Lineup</div>
                    <Accordian.Toggle eventKey="1" className="lineup-hdr-btn"  onClick={this.props.toggleNewLineup}>
                        <ThreeDots className="lineup-hdr-btn" width="2em" height="2em" />
                    </Accordian.Toggle>
                </Row>
                </Card.Header>
                <Accordian.Collapse eventKey="1">
                    <NewLineupSection />
                </Accordian.Collapse>
            </Card>
            </Accordian>
        </Container>
        )        
    }

}

// const mapStateToProps = (state) => ({
//     // roster: state.mlb.teamRoster,
//     // team: state.mlb.selectedTeam
// })

//mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam }
export default connect(null, { getUserLineups, toggleExistingLineups, toggleNewLineup })(MyPage)