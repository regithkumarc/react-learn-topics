import React from 'react';
import back from '../../EcommerceApp/asset/images/my-account.jpg'
import '../../EcommerceApp/css/login.css'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

const Login = () => {

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.login())
    }
    return (
        <div>
            <section className='login'>
                <div className="container">
                    <div className="backImg">
                        <img src={back} alt=''></img>
                        <div className="text">
                            <h3>Login</h3>
                            <h1>My Account</h1>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <span>Username or Email *</span>
                        <input type='text' required></input>
                        <span>Password *</span>
                        <input type='password' required></input>
                        <button className='button'>Login</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;