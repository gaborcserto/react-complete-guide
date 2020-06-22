import React from 'react';

const char = (props) => {
	const style = {
		border: '1px solid black',
		display: 'inline-block',
		margin: '16px',
		padding: '16px',
		textAlign: 'center'
	}

	return (
		<div style={style} onClick={props.clicked}>
			{props.character}
		</div>
	)
}

export default char;