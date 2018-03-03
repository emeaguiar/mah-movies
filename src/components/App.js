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
				<Header text="Mah Movies" type="-archive" />
				<div className="intro container">
					<span className="description">
						Diclaimer: This is a movie gallery exercise.
					</span>
					<h2>Most Popular</h2>
				</div>
				<MovieList />
			</div>
		);
	}
}

export default App;
