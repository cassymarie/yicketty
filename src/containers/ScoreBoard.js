import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/scoreboard.css'

class ScoreBoard extends Component {

    render(){
        return(
            <div class="scoreboard">
                <div id="title">FENWAY PARK</div>
                <div id="innings">123456789</div>
                
                <div class="sd">SAN DIEGO
                    <div id="score-sd">000000000</div>
                </div>
                <div class="sd">BOSTON
                    <div id="score-sd">000000000</div>
                </div>
                <div class="count">
                    <div id="BALL">BALL</div>
                    <div id="STRIKE">STRIKE</div>
                    <div id="OUT">OUT</div>
                </div>
            </div>
        )
    }
}


export default connect()(ScoreBoard)



