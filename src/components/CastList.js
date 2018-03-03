import React, { Component } from 'react';
import CastMember from './CastMember';
import { chunks } from '../helpers';

import './styles/cast.css';

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

		return fullCast.cast.slice( 0, 8);
	}

	renderRow = ( row ) => {
		return(
			<div className="cast-row columns">
				{ row.map( this.renderCast ) }
			</div>
		)
	}

	renderCast = ( member ) => {
		return (
			<CastMember key={ member.id } details={ member } />
		);
	}

	render() {
		const cast = this.getCast();
		const rows = chunks( { arr: cast, size: 4 } );

		return (
			<div className="container cast-list">
				<div className="subtitle">Actors</div>
				<h2>Famous People</h2>
				{ rows.map( this.renderRow ) }
			</div>
		);
	}
}

export default CastList;
