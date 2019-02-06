// import { createSelector } from 'reselect'

export const getPaletteSelector = (state) => {
  return state.themes.theme.palette
}

export const getThemeSelector = (state) => {
  return state.themes.theme
}

export const getPrimaryColor = (state) => {
  return state.themes.primaryColor
}

export const getSecondaryColor = (state) => {
  return state.themes.secondaryColor
}
