import React, { Component } from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
    state = {
        userName:  'TestUser',
    }

    userNameHandler = event => {
        this.setState({
            userName:  event.target.value
        })
    }

    render() {

        const outputStyle = {
            border: '1px solid #eee',
            margin: '0 auto 10px',
            padding: '15px',
            width: '60%'
        }

        return (
            <div className="App">
                <UserOutput
                    style={outputStyle}
                    userName={this.state.userName}/>
                <UserOutput
                    style={outputStyle}
                    userName="Name"
                />
                <UserInput
                    currentName={this.state.userName}
                    changed={this.userNameHandler}/>
            </div>
        );
    }
}

export default App;