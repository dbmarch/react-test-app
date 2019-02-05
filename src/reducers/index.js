import { combineReducers } from 'redux'
import listReducer from './nameList'
import colorReducer from './colorReducer'

const reducer = combineReducers({
  nameList: listReducer,
  color: colorReducer
})

export default reducer
