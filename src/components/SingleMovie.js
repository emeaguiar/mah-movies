import React, { Component } from 'react';
import Header from './Header';
import Poster from './Poster';
import CastList from './CastList';

import '../styles/single-movie.css';
import './styles/poster.css';

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

	pluck = ( { items = [], key, separator } ) => {
		const itemsArray = [];

		items.map( item => itemsArray.push( item[ key ] ) );;

		return itemsArray.join( separator );
	}

	convertRuntime = ( minutes ) => {
		const hours = Math.floor( minutes / 60 );
		const leftMinutes = minutes % 60;

		return <span className="runtime column"><i className="fas fa-lg fa-clock"></i>{ `${ hours }hr ${ leftMinutes }min` }</span>
	}

	renderMovie = ( movie ) => {
		const studios = this.pluck( { items: movie.production_companies, key: 'name', separator: ', ' } );
		const genres  = this.pluck( { items: movie.genres, key: 'name', separator: '/' } )

		return(
			<div className="single-movie">
				<Header text="Mah Movies" type="-single" />
				<div className="header-wrapper">
					<div className="header container">
						<span className="studio">{ `${ studios } presents` }</span>
						<h1>{ movie.title }</h1>
						<div className="metadata columns">
							{ this.convertRuntime( movie.runtime ) }
							<span className="genres column"><i className="fas fa-lg fa-film"></i>{ genres }</span>
							<span className="rating column"><i className="fas fa-lg fa-star"></i>{ `${ movie.vote_average } / 10 | ${ movie.vote_count } votes` }</span>
						</div>

						<p className="overview">{ movie.overview }</p>
					</div>
				</div>
				<div className="movie-data container">
					<div className="columns">
						<div className="column">
							<Poster
								type="single"
								size="single"
								path={ movie.poster_path }
								alt={ `Poster for ${ movie.title }` }
							/>
						</div>
						<div className="column">
							<h2>Reviews</h2>
						</div>
					</div>
				</div>
				<CastList movie={ this.props.match.params.movieSlug } />
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
