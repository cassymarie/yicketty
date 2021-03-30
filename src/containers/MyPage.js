import React, { Component } from 'react'
import { connect } from 'react-redux'
import MyLineups from '../components/mvp/MyLineups.js'
import NewLineupSection from './NewLineupSection.js'
import { getUserLineups, toggleExistingLineups, toggleNewLineup } from '../actions/LineupActionCreators.js'
import { currentPage } from '../actions/AppActionCreators.js'
import '../styles/lineup.css'

import { Container, Row, Card, Accordion } from 'react-bootstrap'
import { ThreeDots } from 'react-bootstrap-icons'

class MyPage extends Component {

    componentDidMount(){ 
        this.props.currentPage('profile')
        this.props.getUserLineups()
        this.props.toggleExistingLineups()
    }

    render(){
        return(
        <Container fluid className="my-page mlb-team-page">
            <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Row>
                    <div className="main-title">My Lineups</div>
                    <Accordion.Toggle eventKey="0" className="lineup-hdr-btn">
                        <ThreeDots className="lineup-hdr-btn" width="2em" height="2em" />
                    </Accordion.Toggle>
                </Row>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <MyLineups />
                </Accordion.Collapse>
            </Card>
            <Card>
            <Card.Header>
                <Row>
                    <div className="main-title">Create New Lineup</div>
                    <Accordion.Toggle eventKey="1" className="lineup-hdr-btn"  onClick={this.props.toggleNewLineup}>
                        <ThreeDots className="lineup-hdr-btn" width="2em" height="2em" />
                    </Accordion.Toggle>
                </Row>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <NewLineupSection />
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Row>
                        <div className="main-title">Yicketty Stats</div>
                        <Accordion.Toggle eventKey="2" className="lineup-hdr-btn" >
                            <ThreeDots className="lineup-hdr-btn" width="2em" height="2em" />
                        </Accordion.Toggle>
                    </Row>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <div className="more-info"> Work in Progress...  Stats on games played</div>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </Container>
        )        
    }

}

const mapStateToProps = (state) => ({
    user: state.user,
    lineups: state.lineup.usersLineups,
    app: state.app.currentPage
})


export default connect(mapStateToProps, { getUserLineups, toggleExistingLineups, toggleNewLineup, currentPage })(MyPage)