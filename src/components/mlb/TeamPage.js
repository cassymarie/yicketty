import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setTeamRoster, setSelectedTeam, unSelectTeam } from '../../redux/MlbActionCreators.js'

class TeamPage extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
        this.props.setSelectedTeam(id)
        this.props.setTeamRoster(id)
    }

    componentWillUnmount(){
        this.props.unSelectTeam()
    }

    renderTeamInfo =() => {
        return(
            <>
            <div className="col-xs-2">
                <img style={{width:"100px", height:"100px"}}src={this.props.team.logo} alt={this.props.team.name_full}/>
                </div>
            <div className="col-xs-8" style={{color: 'white'}}>
                <h1><a href={this.props.team.website}>{this.props.team.name_full}</a></h1>
            </div>
            <div className="col-xs-2" style={{color: 'white'}}>
                <h4>{this.props.team.venue}</h4>
                <p>{this.props.team.city},{this.props.team.state}</p>
            </div>
            </>
        )
    }

    render(){

        return(
            <div className="container-fluid">
                {this.renderTeamInfo()}
                <Link to={`/mlbteams`}><button onClick={this.props.goBack}>Back to Teams</button></Link>
            </div>
        )        
    }

}

const mapStateToProps = (state) => ({
    roster: state.mlb.teamRoster,
    team: state.mlb.selectedTeam
})


export default connect(mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam })(TeamPage)