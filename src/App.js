import React, { Component } from 'react'
import './App.css'
import Navigation from './navigation/navigation'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/home-page'
import SearchView from './containers/filtered-listbox'
import ButtonView from './containers/button-view'
import TextView from './containers/text-view'
import TabView from './containers/tab-view'
import SnackBarView from './containers/snack-bar-view'
import ToolTipView from './containers/tool-tip-view.jsx'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import purple from '@material-ui/core/colors/purple'
import blue from '@material-ui/core/colors/blue'
import orange from '@material-ui/core/colors/orange'
import indigo from '@material-ui/core/colors/indigo'

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    type: 'light'
  },
  MuiButton: {
    // Name of the component ⚛️ / style sheet
    text: {
      // Name of the rule
      // color: 'white' // Some CSS
    }
  },
  typography: {
    fontSize: 12
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
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
          </Switch>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
