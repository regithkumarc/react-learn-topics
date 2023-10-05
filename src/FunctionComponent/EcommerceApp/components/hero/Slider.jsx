import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { slide } from '../../asset/data/data';
import '../../css/slider.css'

const Slider = () => {
    return (
        <div>
            <div className="slider">
                <div className="container grid">
                    {slide.map((item,i) => (
                       <div className="box" key={i}>
                            <div className="img">
                                <img src={item.image} alt=''></img>
                            </div>
                       </div> 
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;