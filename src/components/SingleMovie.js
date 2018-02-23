import React, { Component } from 'react';

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

	render() {
		return(
			<div className="single-movie">
				<h1>{ `Serching for movie` }</h1>
			</div>
		)
	}
}

export default SingleMovie;
