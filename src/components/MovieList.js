import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
		};

    	this.loadAdditionalMovies = this.loadAdditionalMovies.bind( this );
	}

	componentWillMount() {
		this.loadAdditionalMovies();
	}

	render() {
		return (
			<div className="movies">
				{this.state.movies}
			</div>
		);
	}

	loadAdditionalMovies( limit ) {
		/* var currentMovies = { ...this.state.movies },
			newMovies = Object.assign( currentMovies, additionalMovies );
	   
		this.setState( { movies: newMovies } ); */
		
		fetch( 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=985e24fe0adef6dbea8259e606b71a37' )
		.then( results => {
				return results.json();
			} )
		.then( data => {
			let movies = data.results.map( movie => {
				const date = new Date( movie.release_date );

				movie.release_date = new Intl.DateTimeFormat( 'en-US', {
					'year': 'numeric'
				} ).format( date );

				return (
					<Movie key={movie.id} meta={movie} />
				)
			} );

			this.setState( { 'movies': movies } );
		} );
		
	}
}

export default MovieList;
