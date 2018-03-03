import React, { Component } from 'react';
import Poster from './Poster';

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
				<span className="name">{ `${ castMember.name } as ${ castMember.character }` }</span>
			</div>
		)
	}
}

export default CastMember;
