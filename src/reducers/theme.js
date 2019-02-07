import { updateObject } from './utility'
import * as actionTypes from '../actions/actionTypes'

import muiRed from '@material-ui/core/colors/red'
import muiPurple from '@material-ui/core/colors/purple'
import muiBlue from '@material-ui/core/colors/blue'
import muiOrange from '@material-ui/core/colors/orange'
import muiIndigo from '@material-ui/core/colors/indigo'
import muiAmber from '@material-ui/core/colors/amber'
import muiBlueGrey from '@material-ui/core/colors/blueGrey'
import muiBrown from '@material-ui/core/colors/brown'
import muiCyan from '@material-ui/core/colors/cyan'
import muiDeepPurple from '@material-ui/core/colors/deepPurple'
import muiDeepOrange from '@material-ui/core/colors/deepOrange'
import muiGreen from '@material-ui/core/colors/green'
import muiGrey from '@material-ui/core/colors/grey'
import muiLightBlue from '@material-ui/core/colors/lightBlue'
import muiLightGreen from '@material-ui/core/colors/lightGreen'
import muiLime from '@material-ui/core/colors/lime'
import muiPink from '@material-ui/core/colors/pink'
import muiTeal from '@material-ui/core/colors/teal'
import muiYellow from '@material-ui/core/colors/yellow'

const colorMap = {
  red: muiRed,
  blue: muiBlue,
  orange: muiOrange,
  indigo: muiIndigo,
  purple: muiPurple,
  amber: muiAmber,
  green: muiGreen,
  blueGrey: muiBlueGrey,
  brown: muiBrown,
  cyan: muiCyan,
  deepPurple: muiDeepPurple,
  deepOrange: muiDeepOrange,
  grey: muiGrey,
  lightBlue: muiLightBlue,
  lightGreen: muiLightGreen,
  lime: muiLime,
  pink: muiPink,
  teal: muiTeal,
  yellow: muiYellow
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
