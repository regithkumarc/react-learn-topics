import React from 'react';
import back from '../../EcommerceApp/asset/images/my-account.jpg'
import '../../EcommerceApp/css/login.css'

const Register = () => {
    return (
        <div>
            <section className='login'>
                <div className="container">
                    <div className="backImg">
                        <img src={back} alt=''></img>
                        <div className="text">
                            <h3>Register</h3>
                            <h1>My Account</h1>
                        </div>
                    </div>

                    <form>
                        <span>Email</span>
                        <input type='text' required></input>
                        <span>Username *</span>
                        <input type='text' required></input>
                        <span>Password *</span>
                        <input type='password' required></input>
                        <span>Confirm Password *</span>
                        <input type='password' required></input>
                        <button className='button'>Register</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Register;