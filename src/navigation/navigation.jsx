import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  root: {
    width: '100%'
  },
  navBar: {},
  grow: {
    flexGrow: 1
  },
  menuItem: {
    paddingRight: theme.spacing.unit * 8
  }
})

const HomeLink = (props) => <RouterLink to="/" {...props} />
const SearchLink = (props) => <RouterLink to="/search" {...props} />
const TextLink = (props) => <RouterLink to="/text" {...props} />
const ButtonsLink = (props) => <RouterLink to="/buttons" {...props} />
const TabLink = (props) => <RouterLink to="/tab" {...props} />
const SnackbarLink = (props) => <RouterLink to="/snack-bar" {...props} />
const TooltipLink = (props) => <RouterLink to="/tool-tip" {...props} />
const Navigation = ({ classes }) => {
  return (
    <AppBar position="static" color="inherit" className={classes.navBar}>
      <Toolbar>
        <Link className={classes.menuItem} component={HomeLink} variant="h6" color="secondary" noWrap underline="hover">
          Home
        </Link>

        <Link className={classes.menuItem} component={SearchLink} variant="h6" color="primary" noWrap underline="hover">
          Search
        </Link>

        <Link
          className={classes.menuItem}
          component={ButtonsLink}
          variant="h6"
          color="inherit"
          noWrap
          underline="hover"
        >
          Buttons
        </Link>

        <Link className={classes.menuItem} component={TextLink} variant="h6" color="inherit" noWrap underline="hover">
          Text
        </Link>

        <Link className={classes.menuItem} component={TabLink} variant="h6" color="inherit" noWrap underline="hover">
          Tab
        </Link>

        <Link
          className={classes.menuItem}
          component={SnackbarLink}
          variant="h6"
          color="inherit"
          noWrap
          underline="hover"
        >
          SnackBar
        </Link>

        <Link
          className={classes.menuItem}
          component={TooltipLink}
          variant="h6"
          color="inherit"
          noWrap
          underline="hover"
        >
          Tooltip
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Navigation)
