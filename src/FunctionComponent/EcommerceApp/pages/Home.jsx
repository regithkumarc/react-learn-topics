import React from 'react';
import Slider from '../components/hero/Slider';
import Order from '../components/hero/Order';
import Category from '../components/category/Category';
import Products from '../components/product/Products';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Order></Order>
            <Category></Category>
            <Products></Products>
        </div>
    );
};

export default Home;