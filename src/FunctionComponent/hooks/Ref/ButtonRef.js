import React, { forwardRef, useImperativeHandle, useState } from 'react';

const ButtonRef = forwardRef((props,ref) => {

    const [toggle,setToggle] = useState(false);
   const click = () => {    
        setToggle(!toggle)
    }

    useImperativeHandle(ref,() => ({
        alterToggle() {
            setToggle(!toggle)
        },
    }));

    return (
        <div>
            <h3>ButtonRef</h3>
            <button onClick={click}>ButtonFromChild</button>
            {toggle && <span>Toggle</span>}
        </div>
    );
});

export default ButtonRef;