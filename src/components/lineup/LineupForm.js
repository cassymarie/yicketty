import React from 'react';
import { connect } from 'react-redux';
import { submitLineupForm, newLineup } from '../../actions/LineupActionCreators.js'

const LineupForm = (props) => {
    const { _1B, _2B, _3B, SS, OF1, OF2, OF3, DH, C } = props.lineup

    const onSubmit = (event) => { 
        // event.preventDefault() // Did this on purpose to refresh page to open My Lineups by default
        const order = []
        const inputs = document.forms["lineup-form"].getElementsByTagName("input")
            for (let i = 0; i < inputs.length-1; i++){
                order.push({position: i+1, mlb_player_id: inputs[i].name, dh:(inputs[i].id === "DH" ? true : false)})
            }                           
        props.newLineup({mlb_team_id: props.team.id, season: 2020}, order)
     }

  return(
    <div className="lineup">
      <h3>Lineup</h3>
      <>
      <form name="lineup-form" onSubmit={ onSubmit }>
          <>
          <div class="lineup-group">
              <div class="lineup-position">1B</div>
              <input type="text" class="lineup-name" value={(_1B !== null ? _1B.nameFull : '')} id="_1B" name={(_1B !== null ? _1B.id : '1B')}/>
          </div>
          </>
          <> 
          <div class="lineup-group">
              <div class="lineup-position">2B</div>
              <input type="text" class="lineup-name" value={(_2B !== null ? _2B.nameFull : '')} id="_2B" name={(_2B !== null ? _2B.id : '2B')}/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">3B</div>
              <input type="text" class="lineup-name" value={(_3B !== null ? _3B.nameFull : '')} id="_3B" name={(_3B !== null ? _3B.id : '3B')}/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">SS</div>
              <input type="text" class="lineup-name" value={(SS !== null ? SS.nameFull : '')} id="SS" name={(SS !== null ? SS.id : 'SS')}/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">OF</div>
              <input type="text" class="lineup-name" value={(OF1 !== null ? OF1.nameFull : '')} id="OF1" name={(OF1 !== null ? OF1.id : 'OF')}/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">OF</div>
              <input type="text" class="lineup-name" value={(OF2 !== null ? OF2.nameFull : '')} id="OF2" name={(OF2 !== null ? OF2.id : 'OF')}/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">OF</div>
              <input type="text" class="lineup-name" value={(OF3 !== null ? OF3.nameFull : '')} id="OF3" name={(OF3 !== null ? OF3.id : 'OF')}/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">DH</div>
              <input type="text" class="lineup-name" value={(DH !== null ? DH.nameFull : '')} id="DH" name={(DH !== null ? DH.id : 'DH')}/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position"> C</div>
              <input type="text" class="lineup-name" value={(C !== null ? C.nameFull : '')} id="C" name={(C !== null ? C.id : 'C')}/>
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
  lineup: {...state.lineup.lineupForm},
  team: state.mlb.selectedTeam,
  newLineup: state.lineup.newLineup
  
 })

export default connect(mapStateToProps, { submitLineupForm, newLineup })(LineupForm)