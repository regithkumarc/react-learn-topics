import React from 'react';
import { order } from '../../asset/data/data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../css/slider.css'

const Order = () => {
    return (
        <div>
            <section className="order">
                <div className="container grid boxItems">
                    {order.map((item) => (
                        <div className="box flexCenter" key={item.id}>
                            <div className="num">
                                <h1>{item.id}</h1>
                            </div>
                            <div className="text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Order;