import React from 'react';
import ProductTable from './ProductTable';
import AddProduct from './AddProduct';
;

function App(props) {

    return (
        <div className='container'>                                                                                                                           <h3>React crud app with hooks</h3>
            <div className='row'>
                <div className='five columns'>
                    <h2>Add Product</h2>
                    <AddProduct></AddProduct>
                </div>
                <div className='seven columns'>
                    <h2>View Products</h2>
                    <ProductTable></ProductTable>
                </div>
            </div>
        </div>
    );
}

export default App;