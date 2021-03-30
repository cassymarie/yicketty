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
                <div id="field" class="mowed-grass"></div>
                <div id="in-field"></div>
                <div id="in-field-grass" class="mowed-grass"></div>
                <div id="batting-circle"></div>
                <div id="first-base" class="base">
                    <div class="pulse"></div>
                    <div class="action-area"></div>
                </div>
                <div id="second-base" class="base">
                    <div class="pulse"></div>
                    <div class="action-area"></div>
                </div>
                <div id="thrid-base" class="base">
                    <div class="pulse"></div>
                    <div class="action-area"></div>
                </div>
                <div id="home-plate">
                    <div class="action-area"></div> 
                </div>
            <div class="home-plate-pulse pulse"></div>
            <div id="base-lines"></div>
            <div id="pitchers-mound"></div>
            <div id="pitchers-plate"></div>
            <div id="first-circle" class="half-circle"></div>
            <div id="second-circle" class="half-circle"></div>
            <div id="third-circle" class="half-circle"></div>
            <div id="batters-box-right" class="batters-box"></div>
            <div id="batters-box-left" class="batters-box"></div>
            <div id="first-base-thing"></div>
        </Container>
        )
    }
}

export default connect(null, { currentPage })(BaseballField);