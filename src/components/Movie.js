import React, { Component } from 'react';
import Poster from './Poster';
import { Link } from 'react-router-dom';

import './styles/movie.css';

class Movie extends Component {
	render() {
		return (
			<div className="movie-item column">
				<div>
					<Link to={ `/movie/${this.props.meta.id}` }>
						<Poster path={ this.props.meta.poster_path } alt={ `Poster for ${ this.props.meta.title }` } />
					</Link>
				</div>
				<h2 class="title">
					<Link to={ `/movie/${this.props.meta.id}` }>{ this.props.meta.title }</Link>
					<span className="date"> ({ this.props.meta.release_date })</span>
				</h2>
				<p className="overview">{ this.props.meta.overview }</p>
			</div>
		)
	}
}

export default Movie;
