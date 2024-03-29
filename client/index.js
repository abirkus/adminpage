import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import App from './app'
import store from './Redux'
import history from './history'
import 'antd/dist/antd.css'
import './components/styles/styles.scss'

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
)
