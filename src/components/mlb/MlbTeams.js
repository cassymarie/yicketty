import React, { Component } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux'
import * as mlbFetch from './fetchMLB.js'

class MlbTeams extends Component {

  state = {
    mlbTeam: []
  }

    componentDidMount = () => {
      let query = mlbFetch.getQuery('teams')
      return mlbFetch.getData(query('2020'))
    }

      render() {
        return (
          <div>
            <h2> MLB Teams </h2>
          </div>
        )
      }

    //   searchPlayer = (team, start_season, end_season) => mlbFetch.getQuery('players')(team, start_season, end_season)

      getTeams = () => {
        
    }

};

export default connect()(MlbTeams);