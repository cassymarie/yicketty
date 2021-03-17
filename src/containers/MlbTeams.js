import React from 'react';
import { connect } from 'react-redux'
import TeamCards from '../containers/TeamCards.js'
// import * as mlbFetch from './mlb/fetchMLB.js'
// import { getMlbTeams } from '../redux/ActionCreators'

const MlbTeams = (props) => {
  // console.log(props.mlbTeams)
        return (
          <div className="mlbTeams ">
            <h2> MLB Teams </h2>
            <TeamCards />
          </div>
        )
};

const mapStateToProps = (state) => ({
  mlbTeams: state.mlb.teams
})

export default connect(mapStateToProps)(MlbTeams);