import React, { Component } from 'react';
import Poster from './Poster';
import { Link } from 'react-router-dom';

class Movie extends Component {
	render() {
		return (
			<div className="movie">
				<h2>
					<Link to={ `/movie/${this.props.meta.id}` }>{ this.props.meta.title }</Link></h2>
				<div>
					<Link to={ `/movie/${this.props.meta.id}` }>
						<Poster path={ this.props.meta.poster_path } alt={ `Poster for ${ this.props.meta.title }` } />
					</Link>
				</div>
				<p>({ this.props.meta.release_date })</p>
				<p>{ this.props.meta.overview }</p>
			</div>
		)
	}
}

export default Movie;
