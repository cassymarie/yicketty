import { combineReducers } from 'redux'
import mlbReducer from './MlbReducer.js'
import userReducer from './UserReducer.js'
import lineupReducer from './LineupReducer.js'



const reducer = combineReducers({mlb: mlbReducer, user: userReducer, lineup: lineupReducer, })

export default reducer