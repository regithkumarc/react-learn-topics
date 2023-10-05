import React from 'react';
import { product } from '../../asset/data/data';
import ProductCart from './ProductCart';
import '../../css/product.css'

const Products = () => {
    return (
        <>
            <section className='product'>
                <div className="container grid3">
                    {product.map((item) => (
                        <ProductCart key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price}></ProductCart>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Products;