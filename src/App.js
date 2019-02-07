import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Navigation from './navigation/navigation'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './containers/home-page'
import SearchView from './containers/filtered-listbox'
import ButtonView from './containers/button-view'
import TextView from './containers/text-view'
import TabView from './containers/tab-view'
import SnackBarView from './containers/snack-bar-view'
import ToolTipView from './containers/tool-tip-view'
import DialogView from './containers/dialog-view'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { getThemeSelector } from './selectors/getTheme'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme(this.props.theme)}>
        <div className="page">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={SearchView} />
            <Route path="/buttons" component={ButtonView} />
            <Route path="/text" component={TextView} />
            <Route path="/tab" component={TabView} />
            <Route path="/snack-bar" component={SnackBarView} />
            <Route path="/tool-tip" component={ToolTipView} />
            <Route path="/dialog" component={DialogView} />
          </Switch>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    theme: getThemeSelector(state)
  }
}

export default withRouter(connect(mapStateToProps, null)(App))
