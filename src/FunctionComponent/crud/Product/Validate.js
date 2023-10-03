const Validate = (values) => {
    const error = {};

    //username
    if(!values.get('username')) {
        error.username = 'Required';
    } else if(!values.get('username').length > 15) {
        error.username = 'Must be 15 charactors or less'
    }

    //email
    if(values.get('email')) {
        error.email = 'Required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
        error.email = 'Invalid email address'
    }

    //password
    if(values.get('password')) {
        error.password = 'Required'
    } else if(values.get('password').length > 10) {
        error.password = 'Password charactor must be 10 or less'
    }

};

export default Validate;