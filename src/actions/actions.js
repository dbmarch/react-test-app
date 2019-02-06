import * as actionTypes from './actionTypes'

export const resetList = () => {
  return {
    type: actionTypes.RESET_LIST
  }
}

export const searchList = (key) => {
  return {
    type: actionTypes.SEARCH_LIST,
    payload: key
  }
}

export const setPrimaryColor = (color) => {
  return {
    type: actionTypes.SET_PRIMARY_COLOR,
    payload: color
  }
}

export const setSecondaryColor = (color) => {
  return {
    type: actionTypes.SET_SECONDARY_COLOR,
    payload: color
  }
}
