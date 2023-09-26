import { useState } from "react";

const Input  = (props) => {

    const [username,setuserName] = useState('');
    const [password,setPassword] = useState('')

    const onChangeUserName = (e) => {
        setuserName(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <input type="text" value={username} placeholder="Username" onChange={onChangeUserName}></input>
            <input type="text" value={password} placeholder="Password" onChange={onChangePassword}></input>
            <p>{username}</p>
            <p>{password}</p>
        </div>
    )
}
export default Input;