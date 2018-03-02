import React, { Component } from 'react';
import Poster from './Poster';

class CastMember extends Component {
	render() {
		const castMember = this.props.details;

		return (
			<li className="cast-member">
				<Poster size="cast-small" type="profile" path={ castMember.profile_path } alt={ `Shot of ${ castMember.name }` } />
			</li>
		)
	}
}

export default CastMember;
