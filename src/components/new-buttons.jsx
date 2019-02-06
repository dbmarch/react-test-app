import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles, MuiThemeProvider, createMuiTheme, withTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit
  },
  root: {
    margin: theme.spacing.unit,

    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '2rem',
    color: 'black',
    '&: hover': {
      backgroundColor: '#ccc'
    },
    '&:active': {
      boxShadow: 'none',
      // backgroundColor: '#0062cc',
      borderColor: '#005cbf'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
  }
})

const newButtons = (props) => {
  const { classes } = props

  return (
    <div>
      <Button variant="contained" color="primary" className={classNames(classes.root)}>
        PRIMARY
      </Button>
      <Button variant="contained" color="secondary" className={classNames(classes.root)}>
        secondary
      </Button>
      <Button variant="outlined" color="secondary" className={classNames(classes.root)}>
        secondary
      </Button>
    </div>
  )
}

export default withStyles(styles)(newButtons)
