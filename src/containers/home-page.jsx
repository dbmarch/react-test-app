import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import ColorSelect from '../components/color-select'

import { setPrimaryColor, setSecondaryColor } from '../actions/actions'
import { getThemeSelector, getPrimaryColor, getSecondaryColor } from '../selectors/getTheme'

const styles = (theme) => ({
  root: {
    width: '100%'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

const HomePage = (props) => {
  const { onPrimaryColorChange, onSecondaryColorChange, primaryColor, secondaryColor } = props
  // console.log('Theme: ', JSON.stringify(props.theme, null, 2))
  // console.log('PrimaryColor: ', JSON.stringify(props.primaryColor, null, 2))
  return (
    <div>
      <h2>Home Page</h2>
      <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-evenly' }}>
        <ColorSelect color={primaryColor} id="primary" onColorChange={onPrimaryColorChange} label="Primary" />
        <ColorSelect color={secondaryColor} id="secondary" onColorChange={onSecondaryColorChange} label="Secondary" />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    theme: getThemeSelector(state),
    primaryColor: getPrimaryColor(state),
    secondaryColor: getSecondaryColor(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPrimaryColorChange: (color) => dispatch(setPrimaryColor(color)),
    onSecondaryColorChange: (color) => dispatch(setSecondaryColor(color))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomePage))
