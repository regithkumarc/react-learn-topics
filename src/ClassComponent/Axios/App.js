import React, { Component } from 'react';
import AxiosAPI from './AxiosAPI';

class App extends Component {

    constructor() {
        super();
        this.state = {
            name : 'Test',
            product : []
        }
    }

    componentDidMount() {
        this.getAllProducts();
    }

    addProduct = () => {

        let product = {
            name : 'samsung',
            price : 2000,
            desc : 'ss'
        }
        AxiosAPI.addProducts(product).then((res) => {
            console.log("Added Product : " + res.data)
            this.getAllProducts();
        }).catch(function(error) {
            console.log(error)
        }).then(function() {
            console.log("added always")
        })
    }

    updateProduct = (product) => {

        product.name = 'sf'
        AxiosAPI.updateProduct(product).then((res) => {
            console.log("Updated Product : " + res.data)
            this.getAllProducts();
        }).catch(function(error) {
            console.log(error)
        }).then(function() {
            console.log("updated always")
        })
    }

    deleteProduct = (product) => {
        AxiosAPI.deleteProduct(product.id).then((res) => {
            console.log("Deleted Product : " + res.data)
            this.getAllProducts();
        }).catch(function(error) {
            console.log(error)
        }).then(function() {
            console.log("deleted always")
        })
    }

    getAllProducts = () => {
        AxiosAPI.getAllProducts().then((res) => {
            this.setState({ product : res.data });
           console.log(this.state.product);
        }).catch(function(error) {
            console.log(error)
        }).then(function() {
            console.log("fetched always")
        });
    }

    render() {
        return (
            <div>
                <h3>Axios Example</h3>
                <div>
                    <table className = "table table-striped table-bordered" style = {{marginLeft : "10px",marginRight : "10px"}}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Desc</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.product.length > 0 ?
                                ((this.state.product || [] ).map(
                                    product => 
                                    <tr key = "id">
                                        <td> { product.id } </td>
                                        <td> { product.name } </td>
                                        <td> { product.price } </td>
                                        <td> { product.desc } </td>
                                        <td>
                                            <button style={{marginLeft: "10px"}} onClick = { () => this.addProduct()} className="btn btn-danger">Add</button>
                                            <button style={{marginLeft: "10px"}} onClick = { () => this.updateProduct(product)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick = { () => this.deleteProduct(product)} className="btn btn-info">Delete</button>
                                        </td>
                                    </tr>
                                )) :
                                <p style = {{minWidth : "100%", marginTop: '20%', textAlign : 'center'}}>No Data Found</p>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;