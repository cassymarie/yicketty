import { combineReducers } from 'redux'
import mlbReducer from './MlbReducer.js'
import userReducer from './UserReducer.js'


const reducer = combineReducers({mlb: mlbReducer, user: userReducer})

export default reducer