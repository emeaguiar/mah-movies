import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import MovieList from './MovieList';

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
			<Header text="Mario's Movie Mojo app!" />
			<p className="App-intro">
			Welcome to the 'Movie Mojo' React app!
			</p>
			<MovieList />
			</div>
		);
	}
}

export default App;
