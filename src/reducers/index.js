import { combineReducers } from 'redux'
import listReducer from './nameList'
import themeReducer from './theme'

const reducer = combineReducers({
  nameList: listReducer,
  themes: themeReducer
})

export default reducer
