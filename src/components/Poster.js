import React, { Component } from 'react';

class Poster extends Component {
	render() {
		const basePath = 'https://image.tmdb.org/t/p/w342/';

		return (
			<div class="poster">
				<img src={ basePath + this.props.path } />
			</div>
		)
	}
}

export default Poster;
