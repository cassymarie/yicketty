import React from 'react';
import { connect } from 'react-redux';
import { submitLineupForm } from '../../actions/LineupActionCreators.js'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Check } from 'react-bootstrap-icons'
import { setSelectedTeam, setTeamRoster } from '../../actions/MlbActionCreators.js'

const LineupTeamForm = (props) => {
    const onSubmit = (event) => { 
        event.preventDefault()
        const id = event.target.mlbTeam.value
        props.setSelectedTeam(id)
        props.setTeamRoster(id)
    }

    return(
        <Form  onSubmit={ onSubmit }>
            <Row className="align-items-center">
                <Col>
                    <Form.Group>
                        <Form.Label>Select Team</Form.Label>
                        <Form.Control as="select" name="mlbTeam">
                            <option value=''></option>
                            {props.teams.map(team => <option value={team.id}>{team.fullName}</option>)}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="secondary" type="submit"><Check/></Button>
                </Col>
            </Row>
        </Form>
    )
}

const mapStateToProps = (state) => ({ 
    teams: state.mlb.teams
   })
  
  export default connect(mapStateToProps, { submitLineupForm, setSelectedTeam, setTeamRoster })(LineupTeamForm)