import React, { PureComponent } from 'react';
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends PureComponent {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps');
	// 	return state;
	// }

	// componentWillReceiveProps(props) {
	// 	console.log('[Persons.js] componentWillReceiveProps', props);
	// }

	/*shouldComponentUpdate(nextProps, nextState, nextContext) {
		console.log('[Persons.js] shouldComponentUpdate');
		// return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked; Simplified way
		if (
			nextProps.persons !== this.props.persons ||
			nextProps.changed !== this.props.changed ||
			nextProps.clicked !== this.props.clicked
		) {
			return true;
		} else {
			return false;
		}
		// return true;
	}*/

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate');
		return { message: 'Snapshot!' };
	}

	// componentWillUpdate(nextProps, nextState, nextContext) {
	//
	// }

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate');
		console.log(snapshot)
	}

	componentWillUnmount() {
		console.log('[Persons.js] componentWillUnmount');
	}

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
			return <ErrorBoundary key={person.id}>
				<Person
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					key={person.id}
					changed={(event) => this.props.changed(event, person.id)}/></ErrorBoundary>
		});
	};
}
export default Persons;
