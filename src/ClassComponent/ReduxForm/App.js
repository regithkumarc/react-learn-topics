import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import FieldlevelValidation from './FieldlevelValidation';
import ShowResults from './ShowResults';

const App  = props => {
    return (
        <Provider store={store}>
            <div>
                <FieldlevelValidation onSubmit={ShowResults}></FieldlevelValidation>
            </div>
        </Provider>
    );
}

export default App;