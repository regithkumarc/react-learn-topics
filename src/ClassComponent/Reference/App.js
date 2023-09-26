import React, { Component } from 'react';
import Hello from './Hello';

class App extends Component {

    buttonRef = new React.createRef();

    componentDidMount() {
        this.buttonRef.current.onclick = () => alert('hello')
    }

    render() {
        return (
            <div>
                <Hello ref={this.buttonRef}></Hello>
            </div>
        );
    }
}

export default App;