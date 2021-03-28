import React from 'react';
import { connect } from 'react-redux';
import { submitLineupForm } from '../../actions/LineupActionCreators.js'
import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
// import Button from 'react-bootstrap/Button'
// import { Check } from 'react-bootstrap-icons'
import { setSelectedTeam, setTeamRoster } from '../../actions/MlbActionCreators.js'

const LineupTeamForm = (props) => {

    const onSubmit = (event) => { 
        event.preventDefault()
        const id = event.target.value
        props.setSelectedTeam(id)
        props.setTeamRoster(id)
    }

    return(
        <Form  >
            {/* <Row bsPrefix="row form-row"> */}
                <Form.Group>
                    <Form.Label>Select Team</Form.Label>
                    <Form.Control as="select" name="lineup[mlb_team_id]" onChange={ onSubmit }>
                        <option value=''></option>
                        {props.teams.map(team => <option value={team.id}>{team.fullName}</option>)}
                    </Form.Control>
                </Form.Group>
                {/* <Button variant="secondary" type="submit" className="set-lineup-team"><Check/></Button> */}
            {/* </Row> */}
        </Form>
    )
}

const mapStateToProps = (state) => ({ 
    teams: state.mlb.teams
   })
  
  export default connect(mapStateToProps, { submitLineupForm, setSelectedTeam, setTeamRoster })(LineupTeamForm)