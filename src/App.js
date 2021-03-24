import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { getMlbTeams } from './redux/MlbActionCreators.js'
import { autoLogin } from './redux/UserActionCreators.js'
import MlbTeams from './containers/MlbTeams.js'
import Home from './components/home.js'
import MyPage from './components/mvp/MyPage.js'
import TeamPage from './containers/TeamPage.js'
// import NavBar from './containers/NavBar.js'
import Login from './components/login.js'

class App extends Component {

  componentDidMount(){

    if (localStorage.token === 'undefined'){localStorage.clear()}
    
    localStorage.token && this.props.autoLogin()
    this.props.getMlbTeams()
  }

  render() {
    const color = this.props.mlbTeam.id ? this.props.mlbTeam.color1 : '#fff'

    

    return (
      //, backgroundImage: `url('https://media.istockphoto.com/photos/baseball-background-picture-id96681767?k=6&m=96681767&s=612x612&w=0&h=CD5AmG38KKcREde_TC1__SFJYiTQoulNxdl1a-SwNIA=')`
          <div className="app container-fluid" style={{backgroundColor:`${color}`}}>
            {this.props.user.id ? 
              <Switch>
                <Route path="/mlbteams/:id" component={TeamPage}/>
                <Route path="/mlbteams" component={MlbTeams}/>
                <Route path="/mvp/lineups" component={MyPage}/>
                <Route path="/" component={Home}/>
                <Home/>
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


export default connect(mapStateToProps,{ getMlbTeams, autoLogin })(App);
