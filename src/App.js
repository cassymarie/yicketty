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
    const color = this.props.mlbTeam.color2 !== '' ? this.props.mlbTeam.color2 : '#34a8eb'
    return (
          <div className="container-fluid" style={{backgroundColor:`${color}`}}>
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

const mapStateToProps = (state) => ({
  mlbTeam: state.mlb.selectedTeam
})


export default connect(mapStateToProps,{ getMlbTeams })(App);
