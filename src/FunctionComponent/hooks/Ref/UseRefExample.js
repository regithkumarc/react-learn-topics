import React, { useRef } from 'react';

const UseRefExample = () => {

    const ref = useRef('hello');
    const click = () => {
        console.log(ref.current.value);
    }

    return (
        <div>
            <h3>Input Ref</h3>
            <input type='text' ref={ref}></input>
            <button onClick={() => click()}>Click</button>
        </div>
    );
};

export default UseRefExample;