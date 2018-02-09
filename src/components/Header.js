import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="App-header">
          		<h2 className="App-title">{this.props.text}</h2>
			</header>
		)
	}
}

export default Header;
