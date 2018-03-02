import React, { Component } from 'react';

import './styles/header.css';

class Header extends Component {
	render() {
		return (
			<header className="header-container">
				<div className="container">
					<h2 className="title">{ this.props.text }</h2>					
				</div>
			</header>
		)
	}
}

export default Header;
