import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { getMlbTeams } from './actions/MlbActionCreators.js'
import { autoLogin } from './actions/UserActionCreators.js'
import MlbTeams from './containers/MlbTeams.js'
import Home from './components/home.js'
import Login from './components/login.js'
import MyPage from './containers/MyPage.js'
import TeamPage from './containers/TeamPage.js'
import GamePage from './containers/GamePage.js';

class App extends Component {

  componentDidMount(){

  if (localStorage.token === 'undefined'){localStorage.clear()}
    
    localStorage.token && this.props.autoLogin()
    this.props.getMlbTeams()
  }

  render() {
    return (
          <>
            <Switch>
              <Route exact path="/mlbteams/:id" component={TeamPage}/>
              <Route exact path="/mlbteams/:id/pitchers" component={TeamPage}/>
              <Route exact path="/mlbteams/:id/hitters" component={TeamPage}/>
              <Route exact path="/mlbteams/:id/player-search" component={TeamPage}/>
              <Route exact path="/mlbteams" component={MlbTeams}/>
              <Route exact path="/yicketty" component={GamePage}/>
              <Route exact path="/mvp/lineups" component={MyPage}/>
              <Route exact path="/login">{ this.props.user.id ? <Redirect to="/mvp/lineups"/> : <Login /> }</Route>
              <Route exact path="/" component={Home}/>
            </Switch>
          </>
    );
  }
};

const mapStateToProps = (state) => ({
  mlbTeam: state.mlb.selectedTeam,
  user: state.user
})


export default connect(mapStateToProps,{ getMlbTeams, autoLogin })(App);
