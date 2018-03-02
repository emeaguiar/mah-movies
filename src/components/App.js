import React, { Component } from 'react';
import Header from './Header';
import MovieList from './MovieList';

import '../styles/App.css';

class App extends Component {
	constructor() {
		super();
		
		this.state = {
			conf: []
		};
	}
	
	render() {
		return (
			<div className="App">
				<Header text="Mah Movies" />
				<p className="App-intro">
					Welcome to the 'Mah Movies' React app!
				</p>
				<MovieList />
			</div>
		);
	}
}

export default App;
