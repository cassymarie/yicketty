import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamCard from '../components/mlb/TeamCard.js';


class MlbTeams extends Component {

  render(){
    return(
      <>
        <div className="row">
        <h2> MLB Teams </h2>
          {this.props.teams.map(team => <TeamCard key={team.id} {...team}/>)}
        </div>
      </>
    )
  }
    
}

const mapStateToProps = (state) => ({
    teams: state.mlb.teams
  })

export default connect(mapStateToProps)(MlbTeams);