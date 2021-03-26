import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerRosterRow from '../components/player/PlayerRosterRow'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import PlayerCard from '../components/player/PlayerCard.js'
import { setTeamRoster } from '../actions/MlbActionCreators.js'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

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

  render(){
    return(
      <Container fluid>
        <Row>
          {this.props.showCard ? <><PlayerCard key={this.props.id} {...this.props}/></> : <div classname="card-placeholder"></div> }
          {this.renderList()}
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
    showCard: state.mlb.cardToggle
  })

export default connect(mapStateToProps, { setTeamRoster })(TeamRoster);