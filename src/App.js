import React, { Component } from 'react'

import './App.css'
import FilteredListBox from './containers/filtered-listbox'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h2> Redux Search Demo</h2>
				</header>
				<main>
					<FilteredListBox />
				</main>
			</div>
		)
	}
}

export default App
