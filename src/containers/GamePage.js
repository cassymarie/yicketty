import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currentPage } from '../actions/AppActionCreators.js'
import ScoreBoard from '../containers/ScoreBoard.js'
import BaseballField from '../containers/BaseballField.js'
import '../styles/GamePage.css'

import { Container, Row, Col } from 'react-bootstrap'

class GamePage extends Component {

    componentDidMount(){ 
    }

    render(){
        return(
        <Container fluid bsPrefix="game-page">
            <Row bsPrefix="game-score"><ScoreBoard /></Row>
            <Row>
                <Col xs={2}></Col>
                <Col bsPrefix="game-field"><BaseballField /></Col>
                <Col xs={2}></Col>
            </Row>
        </Container>
        )        
    }

}

const mapStateToProps = (state) => ({
    user: state.user,
    app: state.app.currentPage
})


export default connect(mapStateToProps, { currentPage })(GamePage)