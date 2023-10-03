import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validate from "./Validate";
import { Form,Button } from "react-bootstrap";
//import { v4 as uuid } from 'uuid';

const AddUser = (props) => {
    const initUser = { id : null, name : '', email : '' , password : '' }

    const [user,setUser] = useState(initUser);
    let navigate = useNavigate();

   const  handleChange = (e) => {
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle submit is calling")
    
        //let id = uuid;
        navigate('/home');
    }

    const renderField = ({input,label,type,meta : {touched,error}}) => {
        return (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} type={type} placeholder={label}></input>
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        )
    }

    const textStyle = {
        fontWeight : 'bold'
    }

    return (
        <div>
            <Form className="d-grid gap-2" 
                style={{marginRight:'55rem',textAlign:'left'}}>
            <Form.Label style={textStyle}>Name</Form.Label>
            <Form.Group 
                className="mb-1">
               <Form.Control
                    type='text' 
                    name='name' 
                    value={user.name}
                    onChange={handleChange}
                    component={renderField}> 
                </Form.Control>    
            </Form.Group>
            <Form.Label style={textStyle}>Email</Form.Label>
            <Form.Group 
                className="mb-1">
                <Form.Control
                    type='email' 
                    name='email' 
                    value={user.email}
                    onChange={handleChange}
                    component={renderField}
                    validate={Validate}
                    >
                </Form.Control> 
            </Form.Group>
            <Form.Label style={textStyle}>Password</Form.Label>
            <Form.Group 
                className="mb-1">
                <Form.Control
                    type='password' 
                    name='password' 
                    value={user.password}
                    onChange={handleChange}
                    component={renderField}
                    validate={Validate}>
                </Form.Control> 
            </Form.Group >
            <Button 
                className='button-primary' 
                type='submit'
                onClick={handleSubmit}
                >Add</Button>
                <Link className="d-grid gap-2" to='/home'>
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default AddUser;