import React from 'react'
import { Link } from 'react-router-dom'

const TeamCard = (props) => {
  const {name, name_full, color1, logo, id} = props
  return (
    <>
    <Link to={`mlbteams/${id}`}><div className="col-xs-2 mlb-team-card" style={{backgroundColor:`${color1}`}}>
      <h2 className="mlb-card-title">{name}</h2>
      <img style={{width:"100px", height:"100px"}}src={logo} alt={name_full}/>
    </div></Link>
    </>
  )
}

export default TeamCard
