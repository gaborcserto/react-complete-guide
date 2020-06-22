import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { id: 'adfasd', name: 'Max', age: 28 },
            { id: 'vsdasd', name: 'Manu', age: 29 },
            { id: 'asdfer', name: 'Stephanie', age: 26 }
        ],
        otherState: 'Some other value',
        showPersons: false
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
        const style = {
            backgroundColor: 'green',
            border: '1px solid blue',
            color: 'white',
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
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );

            style.backgroundColor = 'red';
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