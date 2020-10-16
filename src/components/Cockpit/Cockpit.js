import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = props => {
	const toggleBtnRef = useRef(null);

	useEffect(() => {
		console.log('[Cockpit.js] useEffect');
		// Http request...
		/*setTimeout(() => {
			alert('Save data to cloud');
		}, 1000)*/
		toggleBtnRef.current.click();
		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect');
		};
	}, []); // if it empty never rerun :)

	useEffect(() => {
		console.log('[Cockpit.js] 2 useEffect');
		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect');
		};
	}); //

	// useEffect()

	const assignedClasses = [];
	let btnClass = '';

	if (props.showPersons) {
		btnClass = classes.Red;
	}

	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold);
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This working</p>
			<button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
				Toggle Persons
			</button>
		</div>
	)
};

export default React.memo(Cockpit);