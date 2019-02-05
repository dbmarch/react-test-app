import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
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
        <Link className={classes.menuItem} variant="h6" color="inherit" noWrap>
          <RouterLink className="nav-item-link" to="/">
            Home
          </RouterLink>
        </Link>
        <Link className={classes.menuItem} variant="h6" color="inherit" noWrap>
          <RouterLink className="nav-item-link" to="/search">
            search
          </RouterLink>
        </Link>
        <Link className={classes.menuItem} variant="h6" color="inherit" noWrap>
          <RouterLink className="nav-item-link" to="/buttons">
            Buttons
          </RouterLink>
        </Link>
        <Link className={classes.menuItem} variant="h6" color="inherit" noWrap>
          <RouterLink className="nav-item-link" to="/text">
            Text
          </RouterLink>
        </Link>
        <Link className={classes.menuItem} variant="h6" color="inherit" noWrap>
          <RouterLink className="nav-item-link" to="/tab">
            Tabs
          </RouterLink>
        </Link>
        <Link className={classes.menuItem} variant="h6" color="inherit" noWrap>
          <RouterLink className="nav-item-link" to="/snack-bar">
            SnackBar
          </RouterLink>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Navigation)
