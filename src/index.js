import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as fetch from './components/fetchRequests'
import manageReducers from './reducers/reducer.js'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
);

  
// const getPlayers = fetch.getQuery('players')(144,2018)
// const getTeams = fetch.getQuery('teams')(2020)
// const getStats = fetch.getQuery('stats')('career')('hitter',660670)

// const players = fetch.getData(getPlayers)
// const teams = fetch.getData(getTeams)
// const getPlayer = fetch.getQuery('player')(660670)
// const player = fetch.getData(getPlayer)
// const stats = fetch.getData(getStats)

fetch.getData(fetch.getQuery('player')(660670))

// fetch('http://localhost:3000/profile', {
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer <token>`
//   }
// }) 