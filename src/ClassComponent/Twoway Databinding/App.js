import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            name : 'regith',
            inputValue : null
        }
    }

    changeInput = (event) => {
        this.setState({inputValue : event.target.value})
    }
    
    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.changeInput}></input>
                <p>{this.state.inputValue}</p>
            </div>
        );
    }
}
export default App;