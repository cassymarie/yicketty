import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTeamRoster } from '../../redux/ActionCreators.js'

class TeamPage extends Component {

    componentDidMount(){
        this.props.setTeamRoster(this.props.match.params.id)
    }

    render(){
        return(
            <>
                <h1>Team Page</h1>
            </>
        )
    }

}

const mapStateToProps = (state) => ({
    ...state.mlb.roster
})


export default connect(mapStateToProps, { setTeamRoster })(TeamPage)