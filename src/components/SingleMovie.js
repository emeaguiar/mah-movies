import React, { Component } from 'react';
import Header from './Header';
import Poster from './Poster';
import CastList from './CastList';

import '../styles/single-movie.css';

class SingleMovie extends Component {
	constructor() {
		super();

		this.state = {
			movie: {}
		};
	}

	componentWillMount() {
		const movieId = this.props.match.params.movieSlug,
			  localStorageRef = localStorage.getItem( `mah-movie-${ movieId }` );

		if ( localStorageRef && 'undefined' !== localStorageRef ) {
			this.setState( { 'movie': JSON.parse( localStorageRef ) } );
		} else {
			this.getMovieData( movieId );
		}
	}

	getMovieData = ( movieId ) => {
		fetch( `https://api.themoviedb.org/3/movie/${ movieId }?api_key=985e24fe0adef6dbea8259e606b71a37` )
		.then( results => {
			return results.json();
		} )
		.then( data => {
			localStorage.setItem( `mah-movie-${ movieId }`, JSON.stringify( data ) );

			this.setState( { 'movie': data } );
		} );
	}

	getStudios = ( studios ) => {
		const studiosArray = [];

		studios.map( studio => {
			studiosArray.push( studio.name );
		} );

		return studiosArray.join( ', ' );
	}

	renderMovie = ( movie ) => {
		const studios = this.getStudios( movie.production_companies );

		return(
			<div className="single-movie">
				<Header text="Mah Movies" type="-single" />
				<div className="header container">
					<span className="studio">{ `${ studios } presents` }</span>
					<h1>{ movie.title }</h1>
				</div>
				<div className="movie-data container">
					<Poster size="single" path={ movie.poster_path } alt={ `Poster for ${ movie.title }` } />
					<ul className="genres">
						{ movie.genres.map( genre => <li className="genre" key={`genre-${ genre.id }`}>{ genre.name }</li> ) }
					</ul>
					<span className="date">{ `Date: ${ movie.release_date }` }</span>
					<CastList movie={ movie.id } />
					<p className="overview">{ movie.overview }</p>
				</div>
			</div>
		)
	}

	render() {
		return(
			<div className="movie-wrapper">
				{ this.renderMovie( this.state.movie ) }
			</div>
		)
	}
}

export default SingleMovie;
