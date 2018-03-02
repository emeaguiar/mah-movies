import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import SingleMovie from './SingleMovie';

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact path="/" component={ App } />
					<Route path="/movie/:movieSlug" component={ SingleMovie } />
				</div>
			</BrowserRouter>
		)
	}
}

export default Router;
