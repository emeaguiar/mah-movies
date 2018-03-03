import React, { Component } from 'react';
import Poster from './Poster';

import './styles/cast-member.css';

class CastMember extends Component {
	render() {
		const castMember = this.props.details;

		return (
			<div className="cast-member column">
				<Poster
					size="cast-small"
					type="profile"
					path={ castMember.profile_path }
					alt={ `Shot of ${ castMember.name }` }
				/>
				<div className="name">{ castMember.name }</div>
			</div>
		)
	}
}

export default CastMember;
