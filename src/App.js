import React, { Component } from 'react';
import MlbTeams from './containers/MlbTeams.js'
// import { TeamCards } from './containers/TeamCards.js'
import { connect } from 'react-redux'
// import MlbTeams from './components/MlbTeams.js';
import { getMlbTeams } from './redux/ActionCreators.js'

class App extends Component {

  componentDidMount(){
    this.props.getMlbTeams()
  }


  render() {
    return (
      <div className="App">
        <h2>In the App </h2>
          {/* <TeamCards /> */}
          <MlbTeams />
      </div>
    );
  }
};

export default connect(null,{ getMlbTeams })(App);
