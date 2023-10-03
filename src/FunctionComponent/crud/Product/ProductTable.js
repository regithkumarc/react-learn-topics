import React from 'react';
import { useSelector } from 'react-redux';

function ProductTable(props) {
    
    const products = useSelector((state) => state.products)
    console.log(products)

    const textStyle = {
        fontWeight : 'bold'
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Desc</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products ? (
                    products.map(user => {
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

export default ProductTable;