import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'react-bootstrap'
import { filterRoster, togglePitcher, togglePitcherReset, resetPlayer } from '../../actions/MlbActionCreators.js'

const PositionButtons = (props) => {

    const filteredList = (pos="ALL") => {
      const roster = props.page === 'team' ? props.roster : props.available
        const outfield = ['CF','RF','LF']
          if (pos === "ALL"){
            // const list = props.page === 'team' ? props.roster : props.roster.filter(player => player.position !== "P")
            return roster
          } else if (pos === "OF"){
            return (roster.filter(player => outfield.includes(player.position)))
          } else {
            return (roster.filter(player => player.position === pos))
          }
      }

    const handlePositionChange = (event) => {
        props.resetPlayer()
        const pos = event.target.value
        pos === "P" ? props.togglePitcher() : props.togglePitcherReset()
        const list = filteredList(pos)
        props.filterRoster(list)
    }

    return(
        <ButtonGroup onClick={handlePositionChange} >
            <Button variant="outline-dark" size="lg" value="ALL">ALL</Button>
            <Button variant="outline-dark" size="lg" value="1B">1B</Button>
            <Button variant="outline-dark" size="lg" value="2B">2B</Button>
            <Button variant="outline-dark" size="lg" value="3B">3B</Button>
            <Button variant="outline-dark" size="lg" value="SS">SS</Button>
            <Button variant="outline-dark" size="lg" value="OF">OF</Button>
            <Button variant="outline-dark" size="lg" value="C">C</Button>
            {props.page === 'team' ? <Button variant="outline-dark" size="lg" value="P">P</Button> : <></>}
        </ButtonGroup>
    )
}
const mapState = (state) => ({
    roster: state.mlb.teamRoster,
    available: state.lineup.availableRoster,
    page: state.app.currentPage
})

export default connect(mapState, { filterRoster, togglePitcher, togglePitcherReset, resetPlayer })(PositionButtons)