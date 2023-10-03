import React, { useReducer } from 'react';

const UseReducerExample = () => {

    const reducer = (state,action) => {
        switch(action.type) {
            case 'INCREMENT' :
                return {count :state.count+1, showText : state.showText} 
            case 'DECREMENT' :
                return {count : state.count-1, showText : state.showText}
            default :
                return state;
        }
    }

    const [state,dispatch] = useReducer(reducer,{count:0,showText : true})

    const increment = () => {
        dispatch({type : 'INCREMENT'})
        console.log(state.count)
        console.log(state.showText)
    }

    const decrement =() => {
        dispatch({type : 'DECREMENT'})
        console.log(state.count)
        console.log(state.showText)
    }

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default UseReducerExample;