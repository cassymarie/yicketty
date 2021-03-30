import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Accordion, Container, ListGroup } from 'react-bootstrap'
import { setTeamRoster, filterRoster } from '../actions/MlbActionCreators.js'
import { setAvailableRoster } from '../actions/LineupActionCreators.js'
import PlayerRosterRow from '../components/player/PlayerRosterRow'
import PositionButtons from '../components/player/PositionButtons.js'


class TeamRoster extends Component {

  componentDidMount(){
    const availableLineupPlayers = this.props.roster.filter(p => p.position !== "P")
    this.props.available.length < 1 ? this.props.setAvailableRoster(availableLineupPlayers) : this.props.filterRoster((this.props.page === 'team' ? this.props.roster : this.props.available))
  }

  renderList = () => {
    return (
      <>
      <ListGroup className="lineup-roster-list">
        <Accordion>
          {this.props.filteredRoster.map(player => <PlayerRosterRow key={player.id} {...player}/>)}
        </Accordion>
      </ListGroup>
      </>
    )
  }

  render(){
    return(
      <Container fluid>
        <Row>
          <PositionButtons />
        </Row>
        <Row>
          {this.props.roster.length > 0 ? this.renderList() : <></>}
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
    available: state.lineup.availableRoster,
    filteredRoster: state.mlb.filteredRoster,
    showCard: state.mlb.cardToggle,
    page: state.app.currentPage
  })

export default connect(mapStateToProps, { setTeamRoster, filterRoster, setAvailableRoster })(TeamRoster);