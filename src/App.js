import React, { Component } from 'react';
import './App.css';
import Navigation from './navigation/navigation';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/home-page';
import SearchView from './containers/filtered-listbox';
import ButtonView from './containers/button-view';
import TextView from './containers/text-view';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import indigo from '@material-ui/core/colors/indigo';

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
});

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
					</Switch>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
