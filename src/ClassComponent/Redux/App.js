import React, { Component } from 'react';
import store,{COUNTER_INCREMENT,COUNTER_DECREMENT} from './Store'

class App extends Component {

    increment = () => {
        store.dispatch({type : COUNTER_INCREMENT})
        console.log(store.getState())
    }

    decrement = () => {
        store.dispatch({type : COUNTER_DECREMENT})
        console.log(store.getState())
    }

    push = () => {
        store.dispatch({type : 'push',value : Math.random})
        console.log(store.getState())
    }

    pop = () => {
        store.dispatch({type : 'pop',value : Math.random})
        console.log(store.getState())
    }

    render() {
        return (
            <div>
                <h3>Redux</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.push}>Push</button>
                <button onClick={this.pop}>Pop</button>
            </div>
        );
    }
}

export default App;