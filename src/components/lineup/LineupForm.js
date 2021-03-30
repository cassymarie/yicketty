import React from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap'
import { ArrowLeft } from 'react-bootstrap-icons'
import { submitLineupForm, newLineup, handleLineupChange, availableRoster } from '../../actions/LineupActionCreators.js'


const LineupForm = (props) => {
    const { _1B, _2B, _3B, SS, OF1, OF2, OF3, DH, C } = props.lineup

    const onSubmit = (event) => { 
        // event.preventDefault() // Did this on purpose to refresh page to open My Lineups by default
        const order = []
        const inputs = document.forms["lineup-form"].getElementsByTagName("input")
            for (let i = 0; i < inputs.length; i++){
                order.push({position: i+1, mlb_player_id: inputs[i].name, dh:(inputs[i].id === "DH" ? true : false)})
            }        
          props.newLineup({mlb_team_id: props.team.id, season: 2020}, order)
     }


    const returnToRoster = (e) => {
        e.stopPropagation()
        const btn = ( e.target.tagName === 'svg') ? e.target.parentNode.id : e.target.tagName === 'path' ? e.target.parentElement.parentElement.id : e.target.id
        const pos = btn.replace('-btn','')
        debugger
        props.handleLineupChange(pos,null)
        props.availableRoster(props.lineup, props.roster)
    }

  return(
      <Container className="lineup">
      <h3>Lineup</h3>
      <>
      <Form name="lineup-form" onSubmit={ onSubmit }>

          <Form.Group  className="lineup-group" id="lineup-pos-1B">
            <Button variant="light" id="_1B-btn" onClick={returnToRoster}><ArrowLeft short/></Button>
            <Form.Control disabled type="text" bsPrefix="lineup-name" value={(_1B !== null ? _1B.nameFull : '')} id="_1B" name={(_1B !== null ? _1B.id : '1B')} />
            <span className="lineup-position">1B</span>
          </Form.Group>

          <Form.Group  className="lineup-group" id="lineup-pos-2B">
            <Button variant="light" id="_2B-btn" onClick={returnToRoster}><ArrowLeft short/></Button>
            <Form.Control disabled type="text" bsPrefix="lineup-name" value={(_2B !== null ? _2B.nameFull : '')} id="_2B" name={(_2B !== null ? _2B.id : '2B')} />
            <span className="lineup-position">2B</span>
          </Form.Group>

          <Form.Group  className="lineup-group" id="lineup-pos-3B">
            <Button variant="light" id="_3B-btn" onClick={returnToRoster}><ArrowLeft short/></Button>
            <Form.Control disabled type="text" bsPrefix="lineup-name" value={(_3B !== null ? _3B.nameFull : '')} id="_3B" name={(_3B !== null ? _3B.id : '3B')} />
            <span className="lineup-position">3B</span>
          </Form.Group>

          <Form.Group  className="lineup-group" id="lineup-pos-SS">
            <Button variant="light" id="SS-btn" onClick={returnToRoster}><ArrowLeft short/></Button>
            <Form.Control disabled type="text" bsPrefix="lineup-name" value={(SS !== null ? SS.nameFull : '')} id="SS" name={(SS !== null ? SS.id : 'SS')} />
            <span className="lineup-position">SS</span>
          </Form.Group>

          <Form.Group  className="lineup-group" id="lineup-pos-OF1">
            <Button variant="light" id="OF1-btn" onClick={returnToRoster}><ArrowLeft short/></Button>
            <Form.Control disabled type="text" bsPrefix="lineup-name" value={(OF1 !== null ? OF1.nameFull : '')} id="OF1" name={(OF1 !== null ? OF1.id : 'OF1')} />
            <span className="lineup-position">OF</span>
          </Form.Group>

          <Form.Group  className="lineup-group" id="lineup-pos-OF2">
            <Button variant="light" id="OF2-btn" onClick={returnToRoster}><ArrowLeft short/></Button>
            <Form.Control disabled type="text" bsPrefix="lineup-name" value={(OF2 !== null ? OF2.nameFull : '')} id="OF2" name={(OF2 !== null ? OF2.id : 'OF2')} />
            <span className="lineup-position">OF</span>
          </Form.Group>

          <Form.Group  className="lineup-group" id="lineup-pos-OF3">
            <Button variant="light" id="OF3-btn" onClick={returnToRoster}><ArrowLeft short/></Button>
            <Form.Control disabled type="text" bsPrefix="lineup-name" value={(OF3 !== null ? OF3.nameFull : '')} id="OF3" name={(OF3 !== null ? OF3.id : 'OF3')} />
            <span className="lineup-position">OF</span>
          </Form.Group>

          <Form.Group  className="lineup-group" id="lineup-pos-DH">
            <Button variant="light" id="DH-btn" onClick={returnToRoster}><ArrowLeft short/></Button>
            <Form.Control disabled type="text" bsPrefix="lineup-name" value={(DH !== null ? DH.nameFull : '')} id="DH" name={(DH !== null ? DH.id : 'DH')} />
            <span className="lineup-position">DH</span>
          </Form.Group>

          <Form.Group  className="lineup-group" id="lineup-pos-C">
            <Button variant="light" id="C-btn" onClick={returnToRoster}><ArrowLeft short/></Button>
            <Form.Control disabled type="text" bsPrefix="lineup-name" value={(C !== null ? C.nameFull : '')} id="C" name={(C !== null ? C.id : 'C')} />
            <span className="lineup-position">C</span>
          </Form.Group>
        <br/>
        <Button variant="secondary" size="lg"p type="submit">Set Lineup</Button>
        </Form>
      </>
      </Container>
  )

}

const mapStateToProps = (state) => ({ 
  lineup: {...state.lineup.lineupForm},
  team: state.mlb.selectedTeam,
  newLineup: state.lineup.newLineup,
  roster: state.mlb.teamRoster
 })

export default connect(mapStateToProps, { submitLineupForm, newLineup, handleLineupChange, availableRoster })(LineupForm)