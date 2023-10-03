import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import App from './App';
import Navbars from './Navbars';
import AddProduct from './AddProduct';
import ProductTable from './ProductTable';

const AppRoutes = () => {
    return (
        <div className='App'>
            <BrowserRouter>
            <Navbars></Navbars>
                <Routes>
                    <Route path='/' Component={App}></Route>
                    <Route path='/home' Component={Home}></Route>
                    <Route path='/add' Component={AddProduct}></Route>
                    <Route path='/view' Component={ProductTable}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;