import React, { Component } from 'react';

class Poster extends Component {
	render() {
		const basePath = 'https://image.tmdb.org/t/p/w342/';

		return (
			<div className="poster">
				<img src={ basePath + this.props.path } alt={ this.props.alt } />
			</div>
		)
	}
}

export default Poster;
