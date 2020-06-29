import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	border: 1px solid #eee;
	box-shadow: 0 2px 3px #ccc;
	margin: 16px auto;
	padding: 16px;
	text-align: center;
	width: 60%;
	
	@media (min-width: 500px) {
		width: 450px;
	}
`;

const person = props => {
	return (
		<StyledDiv>
			<p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} defaultValue={props.name}/>
		</StyledDiv>
	)
}

export default person;