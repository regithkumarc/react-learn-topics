import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";
import { useSelector } from "react-redux";

const AppRoutes = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const cartItems = useSelector(state => state.cart.cartItems)
    console.log(cartItems)

    return (
        <div className='App'>
            {isLoggedIn && (
                <Router>
                    <Header></Header>
                    <Routes>
                        <Route path='/' Component={Home}></Route>
                        <Route path="/register" Component={Register}></Route>
                        <Route path="/account" Component={Account}></Route>
                    </Routes>
                    <Footer></Footer>
                </Router>
            )}
            {!isLoggedIn && <Login></Login>}
        </div>
    );
};

export default AppRoutes;