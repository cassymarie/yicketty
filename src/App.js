import React, { Component } from 'react';
import Redux from 'redux';
// import Login from './components/login/login.js';
// import Profile from './components/profile';
import MlbTeams from './components/mlb/MlbTeams.js'



class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <MlbTeams />
      </div>
    );
  }
};

export default App;



// import './App.css';
