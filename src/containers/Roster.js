import React, { Component } from 'react'
import { connect } from 'react-redux'
import TeamCard from '../components/mlb/TeamCard.js';


class Roster extends Component {

  renderList = () => {
    return (
        {this.props.roster.map(player => <TeamCard key={player.id} {...player}/>)}
    )
  }


  render(){

    return(
      <>
        <div className="row">
        <h2> Team Roster </h2>
          
        </div>
      </>
    )
  }
    
}

const mapStateToProps = (state) => ({
    roster: state.mlb.selectedTeam
  })

export default connect(mapStateToProps)(Roster);