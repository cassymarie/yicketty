import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTeamRoster, setSelectedTeam, unSelectTeam } from '../../redux/ActionCreators.js'

class TeamPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.setSelectedTeam(id)
        this.props.setTeamRoster(id)
    }

    componentWillUnmount(){
        this.props.unSelectTeam()
    }

    render(){

        return(
            <>
                <div>
                    <h1>{this.props.team.name_full}</h1>

                </div>
            </>
        )
    }

}

const mapStateToProps = (state) => ({
    roster: state.mlb.teamRoster,
    team: state.mlb.selectedTeam
})


export default connect(mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam })(TeamPage)