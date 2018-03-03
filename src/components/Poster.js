import React, { Component } from 'react';

class Poster extends Component {
	getBasePath( size ) {
		const base = 'https://image.tmdb.org/t/p/';
		
		let basePath;

		switch ( size ) {
			case 'single' :
				basePath = `${ base }w500`;
				break;
			case 'cast-small' :
				basePath = `${ base }h632`;
				break;
			default :
				basePath = `${ base }w342`;
				break;
		}

		return basePath;
	}

	render() {
		const basePath = this.getBasePath( this.props.size );

		const type = this.props.type || 'home';

		return (
			<div className={ `poster -${ type }` }>
				<img src={ basePath + this.props.path } alt={ this.props.alt } />
			</div>
		)
	}
}

export default Poster;
