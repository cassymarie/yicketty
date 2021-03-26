import React from 'react'
import { connect } from 'react-redux'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { Pencil } from 'react-bootstrap-icons'
import { Play } from 'react-bootstrap-icons'

const UserLineup = (props) => {
    console.log(props)

  const listRoster = () => {
    return (props.roster.map(player => 
      <Button variant="outline-primary">{player.position}{'-'}{player.nameLast}</Button>
    ))
  }


  return (
    <tr>
        <td>{props.team} - {props.season}</td>
        <td><ButtonGroup aria-label="lineup-roster">{listRoster()}</ButtonGroup></td>
        <td><Button variant="secondary"><Pencil /></Button></td>
        <td><Button variant="secondary"><Play /></Button></td>
    </tr>
  )
}

export default connect()(UserLineup)