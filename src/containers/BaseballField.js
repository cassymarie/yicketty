import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/baseballField.css'
import Container from 'react-bootstrap/Container'
import { currentPage } from '../actions/AppActionCreators.js'

class BaseballField extends Component {

    componentDidMount(){
        this.props.currentPage('game')
    }

    render(){
        return(
            <Container id="stadium">
                <div id="field" className="mowed-grass"></div>
                <div id="in-field"></div>
                <div id="in-field-grass" className="mowed-grass"></div>
                <div id="batting-circle"></div>
                <div id="first-base" className="base">
                    <div className="pulse"></div>
                    <div className="action-area"></div>
                </div>
                <div id="second-base" className="base">
                    <div className="pulse"></div>
                    <div className="action-area"></div>
                </div>
                <div id="thrid-base" className="base">
                    <div className="pulse"></div>
                    <div className="action-area"></div>
                </div>
                <div id="home-plate">
                    <div className="action-area"></div> 
                </div>
            <div className="home-plate-pulse pulse"></div>
            <div id="base-lines"></div>
            <div id="pitchers-mound"></div>
            <div id="pitchers-plate"></div>
            <div id="first-circle" className="half-circle"></div>
            <div id="second-circle" className="half-circle"></div>
            <div id="third-circle" className="half-circle"></div>
            <div id="batters-box-right" className="batters-box"></div>
            <div id="batters-box-left" className="batters-box"></div>
            <div id="first-base-thing"></div>
        </Container>
        )
    }
}

export default connect(null, { currentPage })(BaseballField);