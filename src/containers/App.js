import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: 'adfasd', name: 'Max', age: 28 },
            { id: 'vsdasd', name: 'Manu', age: 29 },
            { id: 'asdfer', name: 'Stephanie', age: 26 }
        ],
        otherState: 'Some other value',
        showPersons: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentWillMount() {
        //deprecated
        console.log('[App.js] componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons })
    };

    deletePersonsHandler = (personIndex) => {
        // const persons = this.state.persons; !! wrong method
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons =
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonsHandler}
                    changed={this.nameChangedHandler} />;
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </div>
        );
    }
}

export default App;