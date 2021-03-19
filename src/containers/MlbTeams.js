import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TeamCard from '../components/mlb/TeamCard.js';


class MlbTeams extends Component {

  render(){
    return(
      <>
        <Link to={`/`}><button onClick={this.props.goBack}>Home</button></Link>
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