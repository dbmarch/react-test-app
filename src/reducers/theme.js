import { updateObject } from './utility'
import * as actionTypes from '../actions/actionTypes'

import muiRed from '@material-ui/core/colors/red'
import muiPurple from '@material-ui/core/colors/purple'
import muiBlue from '@material-ui/core/colors/blue'
import muiOrange from '@material-ui/core/colors/orange'
import muiIndigo from '@material-ui/core/colors/indigo'

const colorMap = {
  red: muiRed,
  blue: muiBlue,
  orange: muiOrange,
  indigo: muiIndigo,
  purple: muiPurple
}

const initialState = {
  primaryColor: 'red',
  secondaryColor: 'blue',
  theme: {
    palette: {
      primary: muiRed,
      secondary: muiBlue,
      type: 'light'
    },
    typography: {
      useNextVariants: true,
      fontSize: 12
    }
  }
}

const setPrimaryColor = (state, action) => {
  const palette = updateObject(state.theme.palette, { primary: colorMap[action.payload] })
  const theme = updateObject(state.theme, { palette })
  return updateObject(state, { primaryColor: action.payload, theme })
}

const setSecondaryColor = (state, action) => {
  const palette = updateObject(state.theme.palette, { secondary: colorMap[action.payload] })
  const theme = updateObject(state.theme, { palette })
  return updateObject(state, { secondaryColor: action.payload, theme })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRIMARY_COLOR:
      return setPrimaryColor(state, action)
    case actionTypes.SET_SECONDARY_COLOR:
      return setSecondaryColor(state, action)
    default:
      return state
  }
}

export default reducer
