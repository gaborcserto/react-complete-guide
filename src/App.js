import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
    state = {
        username:  'TestUser',
    }

    usernameHandler = event => {
        this.setState({
            username:  event.target.value
        })
    }

    render() {

        const outputStyle = {
            border: '1px solid #eee',
            margin: '0 auto',
            padding: '16px',
            width: '60%'
        }

        return (
            <div className="App">
                <UserOutput
                    style={outputStyle}
                    username={this.state.username}/>
                <UserInput
                    username={this.state.username}
                    changed={this.usernameHandler}/>
            </div>
        );
    }
}

export default App;