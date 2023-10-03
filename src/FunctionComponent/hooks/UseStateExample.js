import React, { useState } from 'react';

const UseStateExample = () => {

    //let counter = 0;
    const [counter,setCounter] = useState(0);
    const increment = () => {
        //counter = counter +1;
        setCounter(counter+1)
        console.log(counter)
    }

    const decrement = () => {
        setCounter(counter-1);
        console.log(counter)
    }

    return (
        <div>
            <input></input>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default UseStateExample;