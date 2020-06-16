import React from 'react';

import './UserOutput.css'

const userOutput = props => {
	return (
		<div className="UserOutput"  style={props.style}>
			<h2>Username:</h2>
			<p>{props.username}</p>
		</div>
	)
}

export default userOutput;