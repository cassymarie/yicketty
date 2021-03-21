import React from 'react';
import { connect } from 'react-redux';

const Lineup = (props) => {

  const onSubmit = (event) => { 
        event.preventDefault()
        console.log("You are submitting the Lineup")
        // if (signup){
        //   if (password === passwordConfirmation){
        //     sendSignup({username: username, name_first: name_first, name_last: name_last, password: password})
        //   } else {
        //     alert("Those passwords do not match")
        //   }
        // } else {
        //   sendLogin({username: username, password: password})
        // }
     }

  return(
    <div className="lineup">
      <h3>Lineup</h3>
      <>
      <form onSubmit={ onSubmit }>
          <>
          <div class="lineup-group">
              <div class="lineup-position">1B</div>
              <input type="text" class="lineup-name" id="_1B" name="_1B"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">2B</div>
              <input type="text" class="lineup-name" id="_2B" name="_2B"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">3B</div>
              <input type="text" class="lineup-name" id="_3B" name="_3B"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">SS</div>
              <input type="text" class="lineup-name" id="SS" name="SS"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">OF</div>
              <input type="text" class="lineup-name" id="OF1" name="OF1"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">OF</div>
              <input type="text" class="lineup-name" id="OF2" name="OF2"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">OF</div>
              <input type="text" class="lineup-name" id="OF3" name="OF3"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position">DH</div>
              <input type="text" class="lineup-name" id="DH" name="DH"/>
          </div>
          </>
          <>
          <div class="lineup-group">
              <div class="lineup-position"> C</div>
              <input type="text" class="lineup-name" id="C" name="C"/>
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
  lineup: {...state.lineup}
 })

export default connect(mapStateToProps)(Lineup)