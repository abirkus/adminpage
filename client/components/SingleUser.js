import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

class SingleUser extends Component {
	render() {
		return (
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		)
	}
}

export default withRouter(SingleUser)
