import React from 'react';
import Input from './Input';

const App  = props => {
    return (
        <div>
            <h3>CustomComponent</h3>
            <Input component={Input}></Input>
        </div>
    );
}

export default App;