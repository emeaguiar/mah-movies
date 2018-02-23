import React, { Component } from 'react';

class SingleMovie extends Component {
	componentWillMount() {
		const movieId = this.props.match.params.movieSlug;

		fetch( `https://api.themoviedb.org/3/movie/${ movieId }?api_key=985e24fe0adef6dbea8259e606b71a37` )
		.then( results => {
			return results.json();
		} )
		.then( data => {
			console.log(data);
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
