import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            name : 'regith',
            inputValue : null
        }
    }

    updateValue = () => {
       const name = this.state.name === 'regith' ? 'regith kumar' : 'test';
        this.setState({name : name})
    }
    changeInput = (event) => {
        this.setState({inputValue : event.target.value})
    }

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <input value={this.state.inputValue} onChange={this.changeInput}></input>
                <p>{this.state.inputValue}</p>
                <button onClick={this.updateValue}>Click</button>
            </div>
        );
    }
}

export default App;