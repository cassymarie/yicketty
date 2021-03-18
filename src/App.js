import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { getMlbTeams } from './redux/ActionCreators.js'
import MlbTeams from './containers/MlbTeams.js'
import TeamPage from './components/mlb/TeamPage.js'
import NavBar from './containers/NavBar.js'
// import Login from './components/Login.js'

class App extends Component {

  componentDidMount(){
    this.props.getMlbTeams()
  }

  render() {
    return (
          <div className="container-fluid">
            <NavBar />
            <Switch>
              <Route path="/mlbteams/:id" component={TeamPage}/>
              <Route path="/mlbteams" component={MlbTeams}/>
              <Route path="/" component={MlbTeams}/>
            </Switch>
          </div>
    );
  }
};

export default connect(null,{ getMlbTeams })(App);
