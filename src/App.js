import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'Some other value',
        showPersons: false
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 26 }
            ]
        })
    };

    deletePersonsHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            border: '1px solid blue',
            cursor: 'pointer',
            font: 'inherit',
            padding: '8px'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonsHandler(index)}
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This working</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;