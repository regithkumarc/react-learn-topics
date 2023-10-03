import React from 'react';
import ButtonRef from './ButtonRef';
import { useRef } from 'react';

const ForwardRefExample = () => {

    const buttonRef = useRef();
    return (
        <div>
            <h3>Forward Ref</h3>
            <button onClick={() => {
                buttonRef.current.alterToggle();
            }}>Button Parent</button>
            <ButtonRef ref={buttonRef}></ButtonRef>
        </div>
    );
};

export default ForwardRefExample;