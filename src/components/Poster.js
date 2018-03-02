import React, { Component } from 'react';
import { getConfig } from '../config';

class Poster extends Component {
	getBasePath( size ) {
		const base = 'https://image.tmdb.org/t/p/';
		
		let basePath;

		switch ( size ) {
			case 'single' :
				basePath = `${ base }w500`;
				break;
			default :
				basePath = `${ base }w342`;
				break;
		}

		return basePath;
	}

	render() {
		const config = getConfig();

		const basePath = this.getBasePath( this.props.size );

		return (
			<div className="poster">
				<img src={ basePath + this.props.path } alt={ this.props.alt } />
			</div>
		)
	}
}

export default Poster;
