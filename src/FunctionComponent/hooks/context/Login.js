import React, { useContext } from 'react';
import {AppContext} from './ContextAPI'

const Login = (props) => {

    const {username,updateUserName} = useContext(AppContext);

    return (
        <div>
            <h3>Login</h3>
            <p>{username}</p>
            <input onChange={(event)=> {
                updateUserName(event.target.value)
            }}></input>
            {/* <button onClick={props.setUsername}>Click</button> */}
        </div>
    );
};

export default Login;