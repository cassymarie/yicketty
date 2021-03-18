import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { getMlbTeams } from './redux/MlbActionCreators.js'
import MlbTeams from './containers/MlbTeams.js'
import TeamPage from './components/mlb/TeamPage.js'
// import NavBar from './containers/NavBar.js'
import Login from './components/login/Login.js'

class App extends Component {

  componentDidMount(){
    this.props.getMlbTeams()
  }

  render() {
    const color = this.props.mlbTeam.id ? this.props.mlbTeam.color1 : '#e1e7eb'
    return (
          <div className="app container-fluid" style={{backgroundColor:`${color}`}}>
            {this.props.user.id ? 
              <Switch>
                <Route path="/mlbteams/:id" component={TeamPage}/>
                <Route path="/mlbteams" component={MlbTeams}/>
              </Switch>
              :
              <Login/>
            }
          </div>
    );
  }
};

const mapStateToProps = (state) => ({
  mlbTeam: state.mlb.selectedTeam,
  user: state.user
})


export default connect(mapStateToProps,{ getMlbTeams })(App);
