import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import listReducer from './store/reducers/list'
import { reducer } from 'redux-search'

const rootReducer = combineReducers({
	list: listReducer,
	search: reducer,
})

const logger = store => {
	return next => {
		return action => {
			console.log('[Middleware] Dispatching ', action)
			const result = next(action)
			console.log('[Middleware] next state ', store.getState())
			return result
		}
	}
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

const app = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
