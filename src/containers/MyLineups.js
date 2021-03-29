import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserLineup from '../components/lineup/userLineup.js'
import { toggleNewLineup } from '../actions/LineupActionCreators.js' 
import Table from 'react-bootstrap/Table'


class MyLineups extends Component {

    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>Team/Season</th><th>Roster</th><th>Delete</th><th>Play with Roster</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.lineups.map(lineup => <UserLineup key={lineup.id} {...lineup}/> )}
                </tbody>
            </Table>
        )        
    }
}

const mapStateToProps = (state) => ({
    lineups: state.lineup.usersLineups,
    newToggle: state.lineup.toggleLineup
})

export default connect(mapStateToProps, { toggleNewLineup })(MyLineups)