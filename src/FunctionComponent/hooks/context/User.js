import React from 'react';
import {AppContext} from './ContextAPI'
import { useContext } from 'react';

const User = (props) => {

    const {username,updateUserName} = useContext(AppContext);

    return (
        <div>
            <h3>User</h3>
            <input onChange={(event)=> {
                updateUserName(event.target.value)
            }}></input>
            <p>{username}</p>
        </div>
    );
};

export default User;