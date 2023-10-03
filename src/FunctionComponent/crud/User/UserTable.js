import React, { useState } from 'react';
import userList from './data';

function UserTable(props) {
    const [users] = useState(userList)
    const textStyle = {
        fontWeight : 'bold'
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users ? (
                    users.map(user => {
                        const {id,name,userName} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{userName}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td style={textStyle} colSpan={4}>No users Found</td>
                    </tr>
                )
            }
            </tbody>
        </table>
    );
}

export default UserTable;