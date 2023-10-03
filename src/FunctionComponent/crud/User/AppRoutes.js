import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './AddUser';
import UserTable from './UserTable';
import Home from './Home';
import App from './App';
import Navbars from './Navbars';

const AppRoutes = () => {
    return (
        <div className='App'>
            <BrowserRouter>
            <Navbars></Navbars>
                <Routes>
                    <Route path='/' Component={App}></Route>
                    <Route path='/home' Component={Home}></Route>
                    <Route path='/add' Component={AddUser}></Route>
                    <Route path='/view' Component={UserTable}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default AppRoutes;