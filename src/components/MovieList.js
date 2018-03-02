import React, { Component } from 'react';
import Movie from './Movie';

import './styles/movie-list.css';

class MovieList extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
		};

    	this.loadAdditionalMovies = this.loadAdditionalMovies.bind( this );
	}

	componentWillMount() {
		const localStorageRef = localStorage.getItem( 'mah-movie-list' );

		if ( localStorageRef && 'undefined' !== localStorageRef ) {
			this.setState( { 'movies': JSON.parse( localStorageRef ) } );
		} else {
			this.loadAdditionalMovies();
		}

		//this.loadAdditionalMovies();
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

			// Save data in local storage to save us a call.
			localStorage.setItem( 'mah-movie-list', JSON.stringify( movies ) );
		} );
		
	}

	/**
	 * 'https://stackoverflow.com/questions/36318601/react-js-every-nth-item-add-opening-tag-or-closing-tag'
	 * @param {*} arr 
	 * @param {*} size 
	 */
	chunks( arr, size ) {
		if ( ! Array.isArray( arr ) ) {
		  throw new TypeError('Input should be Array');
		}
	  
		if (typeof size !== 'number') {
		  throw new TypeError('Size should be a Number');
		}
	  
		var result = [];
		for ( var i = 0; i < arr.length; i += size ) {
		  result.push(arr.slice(i, size + i));
		}
	  
		return result;
	};

	renderRows = ( row, index ) => {
		return (
			<div className="movies-row columns" key={ index }>
				{ row.map( this.renderMovie ) }
			</div>
		)
	}

	renderMovie( movie ) {
		return(
			<Movie key={ movie.props.meta.id } meta={ movie.props.meta } />
		)
	}

	render() {
		const rows = this.chunks( this.state.movies, 4 );

		return (
			<div className="movies container">
				{ rows.map( this.renderRows ) }
			</div>
		);
	}
}

export default MovieList;
