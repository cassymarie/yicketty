import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import UserLineup from '../components/lineup/userLineup.js'

class MyLineups extends Component {

    renderLineups = () => {
        console.log(this.props.lineups)
        return (
            <>
                
            </>
            )
      }

    render(){

        return(
            <>
                <Row>
                    <p>Team/Season</p><p>Lineup</p><button>Edit</button><button>Game</button>
                </Row>
                {this.props.lineups.map(lineup => <UserLineup key={lineup.id} {...lineup}/> )}
            </>
        )        
    }
}

const mapStateToProps = (state) => ({
    lineups: state.lineup.usersLineups
})

export default connect(mapStateToProps)(MyLineups)