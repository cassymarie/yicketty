import React from 'react'
import { connect } from 'react-redux'
import TeamCard from '../components/TeamCard.js'

const TeamCards = (props) => {
  console.log(props.teams)
   return(
      <div className="cards">
        {props.teams.map(team => <TeamCard key={team.id} {...team}/>)}
      </div>
   )
    
}

const mapStateToProps = (state) => ({
    teams: state.mlb.teams
  })

export default connect(mapStateToProps)(TeamCards)