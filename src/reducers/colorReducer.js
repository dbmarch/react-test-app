import * as actionTypes from '../actions/actionTypes'
import red from '@material-ui/core/colors/red'
import purple from '@material-ui/core/colors/purple'
import blue from '@material-ui/core/colors/blue'
import orange from '@material-ui/core/colors/orange'
import indigo from '@material-ui/core/colors/indigo'

const initialState = {
  primary: blue,
  secondary: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRIMARY_COLOR:
      return { ...state, primary: action.payload }

    case actionTypes.SET_SECONDARY_COLOR:
      return { ...state, secondary: action.payload }
    default:
      return state
  }
}

export default reducer
