import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  root: {
    width: '100%'
  },
  navBar: {},
  grow: {
    flexGrow: 1
  },
  menuItem: {
    paddingRight: theme.spacing.unit * 8,
    textDecoration: 'none'
  }
})

const Navigation = ({ classes }) => {
  return (
    <AppBar position="static" color="inherit" className={classes.navBar}>
      <Toolbar>
        <Typography className={classes.menuItem} variant="h6" color="inherit" noWrap>
          <Link className="nav-item-link" to="/">
            Home
          </Link>
        </Typography>
        <Typography className={classes.menuItem} variant="h6" color="inherit" noWrap>
          <Link className="nav-item-link" to="/search">
            search
          </Link>
        </Typography>
        <Typography className={classes.menuItem} variant="h6" color="inherit" noWrap>
          <Link className="nav-item-link" to="/buttons">
            Buttons
          </Link>
        </Typography>
        <Typography className={classes.menuItem} variant="h6" noWrap>
          <Link className="nav-item-link" to="/text">
            Text
          </Link>
        </Typography>
        <Typography className={classes.menuItem} variant="h6" noWrap>
          <Link className="nav-item-link" to="/tab">
            Tabs
          </Link>
        </Typography>
        <Typography className={classes.menuItem} variant="h6" noWrap>
          <Link className="nav-item-link" to="/snack-bar">
            SnackBar
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Navigation)
