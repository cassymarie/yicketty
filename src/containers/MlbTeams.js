import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import TeamCard from '../components/mlb/TeamCard.js';
import  Container from 'react-bootstrap/Container'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'

class MlbTeams extends Component {

  teamsByLeague = (league) => {
    const leagueTeams = this.props.teams.filter(team => team.league === league)
    const eastDiv = leagueTeams.filter(team => team.division === "E")
    const centralDiv = leagueTeams.filter(team => team.division === "C")
    const westDiv = leagueTeams.filter(team => team.division === "W")
    return (
      <Container className="divisions">
        <h2>East Division</h2>
        <Row className="division">
          {eastDiv.map(team => <TeamCard key={team.id} {...team}/>)}
        </Row>
        <h2>Central Division</h2>
        <Row className="division">
          {centralDiv.map(team => <TeamCard key={team.id} {...team}/>)}
        </Row>
        <h2>West Division</h2>
        <Row className="division">
          {westDiv.map(team => <TeamCard key={team.id} {...team}/>)}
        </Row>
      </Container>
    )
  }

  render(){
    return(
      <>
      <Link to={`/`}><button onClick={this.props.goBack}>Home</button></Link>
      <Row>
        <>
        <Col className="league">
          <h1>American Leaguge</h1>
          {this.teamsByLeague("AL")}
        </Col>

        <Col className="league">
          <h1>National Leaguge</h1>
          {this.teamsByLeague("NL")}
        </Col>
        </>      
      </Row>
      </>
    )
  }
    
}

const mapStateToProps = (state) => ({
    teams: state.mlb.teams
  })

export default connect(mapStateToProps)(MlbTeams);