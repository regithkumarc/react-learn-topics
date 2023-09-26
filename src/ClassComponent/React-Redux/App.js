import React, { Component } from 'react';
import store,{COUNTER_INCREMENT,COUNTER_DECREMENT} from './Store'
import { Provider } from 'react-redux';
import Hello from './Hello';

class App extends Component {

    constructor() {
        super();
        this.state = {
            name : 'regith'
        }
    }

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
            <Provider store={store}>
                <div>
                    <h3>React Redux</h3>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.push}>Push</button>
                    <button onClick={this.pop}>Pop</button>
                    <Hello name={this.state.name}></Hello>
                 </div>
            </Provider>
        );
    }
}

export default App;