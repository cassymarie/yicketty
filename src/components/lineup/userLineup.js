import React from 'react'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'

const UserLineup = (props) => {
    console.log(props)

  const listRoster = () => {
    return (props.roster.map(player => 
      <div>{player.position}{'-'}{player.nameLast}{' | '}</div>
    ))
  }


  return (
    <Row>
        <div>{props.team} - {props.season}</div><Row>{listRoster()}</Row>
    </Row>
  )
}

export default connect()(UserLineup)