import React, { Component } from 'react';

class CastMember extends Component {
	render() {
		const castMember = this.props.details;

		return (
			<li className="cast-member">
				{ castMember.name }
			</li>
		)
	}
}

export default CastMember;
