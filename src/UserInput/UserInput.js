import React from 'react';

import './UserInput.css'

const userInput = props => {
	return (
		<div className="UserInput">
			<p>Enter The Username: <input type="text" onChange={props.changed} value={props.username}/></p>
		</div>
	)
}

export default userInput;