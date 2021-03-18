import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamCard from '../components/mlb/TeamCard.js';

class TeamCards extends Component {

  render(){
    return(
      <div className="row">
        {this.props.teams.map(team => <TeamCard key={team.id} {...team}/>)}
      </div>
    )
  }
    
}

const mapStateToProps = (state) => ({
    teams: state.mlb.teams
  })

export default connect(mapStateToProps)(TeamCards)