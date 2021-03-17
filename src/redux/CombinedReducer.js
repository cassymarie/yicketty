import { combineReducers } from 'redux'
import mlbReducer from './MlbReducer.js'


const reducer = combineReducers({mlb: mlbReducer})

export default reducer