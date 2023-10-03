import React, { createContext } from 'react';
import Login from './Login';
import User from './User';
import { useState } from 'react';

export const AppContext = createContext();

const ContextAPI = () => {

    const [username,setUsername] = useState('test');
    //const AppContext = createContext();

    const updateUserName = (value) => {
        setUsername(value);
    }

    return (
        <AppContext.Provider value={{username,updateUserName}}>
            <Login></Login>
            <User></User>
        </AppContext.Provider>
    );
};

export default ContextAPI;