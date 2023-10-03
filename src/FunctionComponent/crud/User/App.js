import React from 'react';
import UserTable from './UserTable';
import AddUser from './AddUser.js';;

function App(props) {

    return (
        <div className='container'>                                                                                                                           <h3>React crud app with hooks</h3>
            <div className='row'>
                <div className='five columns'>
                    <h2>Add User</h2>
                    <AddUser></AddUser>
                </div>
                <div className='seven columns'>
                    <h2>View Users</h2>
                    <UserTable></UserTable>
                </div>
            </div>
        </div>
    );
}

export default App;