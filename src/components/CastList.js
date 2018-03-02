import React, { Component } from 'react';
import CastMember from './CastMember';

class CastList extends Component {
	constructor() {
		super();

		this.state = {
			cast: []
		};
	}

	componentWillMount() {
		const cast = localStorage.getItem( `mah-movie-cast-${ this.props.movie }` );

		if ( cast && 'undefined' !== cast ) {
			this.setState( { 'cast' : JSON.parse( cast ) } );
		} else {
			this.fetchCast();
		}
	}

	fetchCast = () => {
		fetch( `https://api.themoviedb.org/3/movie/${ this.props.movie }/credits?api_key=985e24fe0adef6dbea8259e606b71a37` )
		.then( results => {
			return results.json();
		} )
		.then( data => {
			this.setState( { 'cast' : data } );

			localStorage.setItem( `mah-movie-cast-${ this.props.movie }`, JSON.stringify( data ) );
		} )
	}

	getCast = () => {
		const fullCast = this.state.cast;

		if ( ! fullCast ) {
			return;
		}

		return fullCast.cast;
	}

	render() {
		const cast = this.getCast();

		return (
			<ul className="cast-list">
				{ cast.map( member => <CastMember key={ member.id } details={ member } /> ) }
			</ul>
		);
	}
}

export default CastList;
