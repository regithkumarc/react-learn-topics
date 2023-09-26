import React, { Component } from 'react';


const sum = (a,b) => {
    return a+b;
}

const calculator = (type) => {
    if(type === 'sum') {
        return sum;
    }
}
 
class App extends Component {

    constructor() {
        super();

        console.log(calculator('sum')(1,2))
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default App;