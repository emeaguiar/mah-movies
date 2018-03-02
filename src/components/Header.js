import React, { Component } from 'react';

import './styles/header.css';

class Header extends Component {
	render() {
		return (
			<header className="App-header container">
				<div className="column">
					<h2 className="App-title">{ this.props.text }</h2>					
				</div>
			</header>
		)
	}
}

export default Header;
