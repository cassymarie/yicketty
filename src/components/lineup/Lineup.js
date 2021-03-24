import React from 'react';
import { connect } from 'react-redux';
import { submitLineupForm } from '../../redux/LineupActionCreators.js'

const Lineup = (props) => {
    const { _1B, _2B, _3B, SS, RF, LF, CF, DH, C } = props
    // console.log(props)
  const onSubmit = (event) => { 
        event.preventDefault()
        console.log("You are submitting the Lineup")
        const order = []
        // const lineupForm = {}
        const inputs = document.forms["lineup-form"].getElementsByTagName("input")
            for (let i = 0; i < inputs.length-1; i++){
                // order.push(inputs[i].id)
                order.push({position: i+1, mlb_player_id: inputs[i].id})
            }
        // debugger
        props.submitLineupForm({mlb_team_id: props.team.id, lineup_players: order})
     }

  return(
    <div className="lineup">
      <h3>Lineup</h3>
      <>
      <form name="lineup-form" onSubmit={ onSubmit }>
          <>
          <div class="lineup-group">
              <div class="lineup-position">1B</div>
              <input type="text" class="lineup-name" value={(_1B !== null ? _1B.nameFull : '')} id="_1B" name="_1B"/>
          </div>
          </>
          <> 
          <div class="lineup-group">
              <div class="lineup-position">2B</div>
              <input type="text" class="lineup-name" value={(_2B !== null ? _2B.nameFull : '')} id="_2B" name="_2B"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">3B</div>
              <input type="text" class="lineup-name" value={(_3B !== null ? _3B.nameFull : '')} id="_3B" name="_3B"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">SS</div>
              <input type="text" class="lineup-name" value={(SS !== null ? SS.nameFull : '')} id="SS" name="SS"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">RF</div>
              <input type="text" class="lineup-name" value={(RF !== null ? RF.nameFull : '')} id="RF" name="RF"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">CF</div>
              <input type="text" class="lineup-name" value={(CF !== null ? CF.nameFull : '')} id="CF" name="CF"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">LF</div>
              <input type="text" class="lineup-name" value={(LF !== null ? LF.nameFull : '')} id="LF" name="LF"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">DH</div>
              <input type="text" class="lineup-name" value={(DH !== null ? DH.nameFull : '')} id="DH" name="DH"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position"> C</div>
              <input type="text" class="lineup-name" value={(C !== null ? C.nameFull : '')} id="C" name="C"/>
          </div>
          </>  
        <br/>
        <input type="submit" value="Enter" />
      </form>
      </>
    </div>
  )

}

const mapStateToProps = (state) => ({ 
  lineup: {...state.lineup},
  _1B: state.lineup._1B,
  _2B: state.lineup._2B,
  _3B: state.lineup._3B,
  SS: state.lineup.SS,
  RF: state.lineup.RF,
  CF: state.lineup.CF,
  LF: state.lineup.LF,
  DH: state.lineup.DH,
  C: state.lineup.C,
  team: state.mlb.selectedTeam
 })

export default connect(mapStateToProps, { submitLineupForm })(Lineup)