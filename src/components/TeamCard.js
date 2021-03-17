import React from 'react'

const TeamCard = (props) => {
  
  return (
    <>
    <div className="teamCard">
      <h2>{props.name}</h2>
      <p>{props.city}, {props.state}</p>
    </div>
    </>
  )
}

export default TeamCard
