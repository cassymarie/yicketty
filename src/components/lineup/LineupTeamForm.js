import React from 'react';
import { connect } from 'react-redux';
import { submitLineupForm } from '../../actions/LineupActionCreators.js'
import Form from 'react-bootstrap/Form'
import { setSelectedTeam, setTeamRoster } from '../../actions/MlbActionCreators.js'

const LineupTeamForm = (props) => {

    const onSubmit = (event) => { 
        event.preventDefault()
        const id = event.target.value
        props.setSelectedTeam(id)
        props.setTeamRoster(id)
    }

    return(
        <Form className="lineup-team-form">
            <Form.Group >
                <Form.Label bsPrefix="lineup-team">Select a Team</Form.Label>
                <Form.Control as="select" name="lineup[mlb_team_id]" onChange={ onSubmit }>
                    <option value=''></option>
                    {props.teams.map(team => <option key={team.id} value={team.id}>{team.fullName}</option>)}
                </Form.Control>
            </Form.Group>
        </Form>
    )
}

const mapStateToProps = (state) => ({ 
    teams: state.mlb.teams
   })
  
  export default connect(mapStateToProps, { submitLineupForm, setSelectedTeam, setTeamRoster })(LineupTeamForm)