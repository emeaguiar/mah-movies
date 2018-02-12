import React, { Component } from 'react';
import Poster from './Poster';

class Movie extends Component {
	render() {
		return (
			<div className="movie">
				<h2>{ this.props.meta.title }</h2>
				<div>
					<Poster path={ this.props.meta.poster_path } />
				</div>
				<p>({ this.props.meta.release_date })</p>
				<p>{ this.props.meta.overview }</p>
			</div>
		)
	}
}

export default Movie;
