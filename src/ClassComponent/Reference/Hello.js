import React from 'react';

export default React.forwardRef((props,ref) => {
    return (
        <div>
            <h1>Hello</h1>
            <button ref={ref}>Click</button>
        </div>
    )
});