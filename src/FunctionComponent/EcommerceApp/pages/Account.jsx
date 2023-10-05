import React from 'react';
import image from '../../EcommerceApp/asset/images/input.png'
import '../../EcommerceApp/css/account.css'

const Account = () => {
    return (
        <div>
            <section className='accountInfo'>
                <div className="container boxItems">
                    <h1>Account Information</h1>
                    <div className="content">
                        <div className="left">
                            <div className="img flexCenter">
                                <input type='file' accept='image/*' src={image} alt='imgs'></input>
                                <img src={image} alt='' className='image-preview'></img>
                            </div>
                        </div>
                        <div className='right'>
                            <label>Username</label>
                            <input type='text' required></input>
                            <label>Email</label>
                            <input type='text' required></input>
                            <label>Password</label>
                            <input type='text' required></input>
                            <button className='button'>Update</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Account;