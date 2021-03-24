import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const TeamCard = (props) => {
  const {name, name_full, color1, logo, id} = props

  return (
    <>
    <Link to={`mlbteams/${id}`}>
      <Container sm={5} className="mlb-team-card" style={{backgroundColor:`${color1}`}}>
        <img className="mlb-card-logo" src={logo} alt={name_full}/>
        <h2 className="mlb-card-title">{name}</h2>
      </Container>
    </Link>
    </>
  )
}

export default TeamCard
