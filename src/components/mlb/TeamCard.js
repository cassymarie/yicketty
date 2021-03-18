import React from 'react'

const TeamCard = (props) => {
  return (
    <>
    <div className="col-xs-2 mlb-team-card" style={{backgroundColor:`${props.color1}`}}>
      <h2 className="mlb-card-title"><a href={props.website}>{props.name}</a></h2>
      <iframe
      title={props.name_full}
      width="100"
      height="100"
      frameBorder="0"
      src={props.logo}/>
    </div>
    </>
  )
}

export default TeamCard
