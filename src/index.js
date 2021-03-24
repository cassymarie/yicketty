import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import App from './App';
import NavHeader from './containers/NavHeader.js'
import reducer from './reducers/CombinedReducer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} > 
      <Router>
        <NavHeader/>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
document.getElementById('root')
);
