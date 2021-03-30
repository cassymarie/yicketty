import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'react-bootstrap'
import { Trash, Play } from 'react-bootstrap-icons'
import { removeUsersLineup } from '../../actions/LineupActionCreators.js'


const UserLineup = (props) => {
  const listRoster = () => {
    return (props.roster.map(player => 
      <Button variant="outline-primary" key={`${props.id}-${player.playerId}`}>{player.position}{'-'}{player.nameLast}</Button>
    ))
  }


  return (
    <tr id={props.id}>
        <td>{props.team} - {props.season}</td>
        <td><ButtonGroup aria-label="lineup-roster">{listRoster()}</ButtonGroup></td>
        <td><Button variant="secondary" onClick={() => {props.removeUsersLineup(props.id)}}><Trash /></Button></td>
        <td><Button variant="secondary"><Play /></Button></td>
    </tr>
  )
}

export default connect(null, { removeUsersLineup })(UserLineup)