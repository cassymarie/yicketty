import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setTeamRoster, setSelectedTeam, unSelectTeam } from '../../redux/MlbActionCreators.js'

class MyPage extends Component {

    componentDidMount(){
        // const id = this.props.match.params.id
        // this.props.setSelectedTeam(id)
        // this.props.setTeamRoster(id)
    }

    componentWillUnmount(){
        // this.props.unSelectTeam()
    }

    renderTeamInfo =() => {
        return(
            <>
            <div className="col-xs-2">

            </div>
            </>
        )
    }

    render(){

        return(
            <div className="container-fluid">
                <h2>MY PROFILE PAGE</h2>
                {/* {this.renderTeamInfo()} */}
                <Link to={`/mlbteams`}><button onClick={this.props.goBack}>Back to Teams</button></Link>
            </div>
        )        
    }

}

// const mapStateToProps = (state) => ({
//     // roster: state.mlb.teamRoster,
//     // team: state.mlb.selectedTeam
// })

//mapStateToProps, { setTeamRoster, setSelectedTeam, unSelectTeam }
export default connect()(MyPage)