import React, { Component } from 'react';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'

const Home = (props) => {
    console.log(props)
    const navigate = () => {
        console.log("navigate")
       // props.history.push('/test')
    }

    return (
        <div>
        <h3>Home</h3>
        <button onClick={navigate}>Navigate</button>
    </div>
    )
}

const Test = (props) => {
    return <div>Test</div>
}

const TestId = (props) => {
    return <div>
        <h3>TestId</h3>
    </div>
}

const NoMatch = () => {
    return <div>No Match</div>
}

const menu = [
    {name:'Home',path:'/'},
    {name:'Test',path:'/test'}
]

class AppRoutes extends Component {

    constructor() {
        super();
        this.state = {
            name : 'regith'
        }
    }
    render() {
        return (
            <BrowserRouter>
            <div>
                {menu.map((arrayElement,index,array) =>
                    <Link key={index} to={arrayElement.path}>{arrayElement.name}</Link>
                )}
               <Routes>
                    <Route path='/' Component={Home}></Route>
                    <Route path='/test' Component={Test}></Route>
                    <Route path='/test/:id' Component={TestId}></Route>
                    <Route path='/noMatch' Component={NoMatch}></Route>
               </Routes>
            </div>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;