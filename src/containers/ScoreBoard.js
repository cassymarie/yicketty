import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/scoreboard.css'

class ScoreBoard extends Component {

    render(){
        return(
            <div className="scoreboard">
                <div id="title">FENWAY PARK</div>
                <div id="innings">123456789</div>
                
                <div className="sd">SAN DIEGO
                    <div id="score-sd">000000000</div>
                </div>
                <div className="sd">BOSTON
                    <div id="score-sd">000000000</div>
                </div>
                <div className="count">
                    <div id="BALL">BALL</div>
                    <div id="STRIKE">STRIKE</div>
                    <div id="OUT">OUT</div>
                </div>
            </div>
        )
    }
}


export default connect()(ScoreBoard)



