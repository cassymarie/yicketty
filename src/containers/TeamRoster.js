import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerRosterRow from '../components/player/PlayerRosterRow'


import { setTeamRoster, filteredRoster } from '../actions/MlbActionCreators.js'
import { Row, Button, Accordion, Container, ButtonGroup, ListGroup } from 'react-bootstrap'


class TeamRoster extends Component {

  componentDidMount(){
    // debugger
    // this.props.setTeamRoster(this.props.team.id)
  }

  renderList = () => {
    const list = this.props.toggle ? this.props.roster.filter(player => player.position === "P") :
    this.props.roster.filter(player => player.position !== "P")

    return (
      <>
      <ListGroup className={this.props.lineupToggle ? "lineup-roster-list" : "team-roster-list"}>
        {list.map(player => <PlayerRosterRow key={player.id} {...player}/>)}
      </ListGroup>
      </>
    )
  }

  filteredList = (pos="ALL") => {
    const outfield = ['CF','RF','LF']
      if (pos === "ALL"){
        return (this.props.roster.filter(player => player.position !== "P"))
      } else if (pos === "OF"){
        return (this.props.roster.filter(player => outfield.includes(player.position)))
      } else {
        return (this.props.roster.filter(player => player.position === pos))
      }
  }
  
  handlePositionChange = (event) => {
    const pos = event.target.value
    const list = this.filteredList(pos)
    this.props.filteredRoster(list)
 }

  lineupPositionButtons = () => {
    return(
      <ButtonGroup onClick={this.handlePositionChange} >
        <Button variant="outline-secondary" value="ALL">ALL</Button>
        <Button variant="outline-secondary" value="1B">1B</Button>
        <Button variant="outline-secondary" value="2B">2B</Button>
        <Button variant="outline-secondary" value="3B">3B</Button>
        <Button variant="outline-secondary" value="SS">SS</Button>
        <Button variant="outline-secondary" value="OF">OF</Button>
        <Button variant="outline-secondary" value="C">C</Button>
      </ButtonGroup>
    )
  }




  renderLineupList = () => {
    
    return (
      <>
      {this.lineupPositionButtons()}
      <ListGroup className="lineup-roster-list">
        <Accordion>
          {this.props.filteredList.map(player => <PlayerRosterRow key={player.id} {...player}/>)}
        </Accordion>
      </ListGroup>
      </>
    )
  }

  render(){
    return(
      <Container fluid>
        <Row>
          {/* {this.props.showCard ? <><PlayerCard key={this.props.id} {...this.props}/></> : <div classname="card-placeholder"></div> } */}
          {this.renderLineupList()}
          {/* {this.renderList()} */}
        </Row>
      </Container>
    )
  }
    
}

const mapStateToProps = (state) => ({
    team: state.mlb.selectedTeam,
    roster: state.mlb.teamRoster,
    player: state.mlb.selectedPlayer,
    toggle: state.mlb.pitcherToggle,
    lineupToggle: state.lineup.toggleLineup,
    filteredList: state.mlb.filteredRoster,
    showCard: state.mlb.cardToggle
  })

export default connect(mapStateToProps, { setTeamRoster, filteredRoster })(TeamRoster);