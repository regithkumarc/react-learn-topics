import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../css/category.css'
import { category } from '../../asset/data/data';
import Slider from 'react-slick';
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"

const Category = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2
            }
          }
        ]
      };

      function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div className='control-btn' onClick={onClick}>
                <button className='next'>
                    <MdNavigateNext className='icon'></MdNavigateNext>
                </button>
            </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <div className='control-btn' onClick={onClick}>
                <button className='prev'>
                    <GrFormPrevious className='icon'></GrFormPrevious>
                </button>
            </div>
        );
      }

    return (
        <>
            <section className='category'>
                <div className='container'>
                    <Slider {...settings}>
                        {category.map((item) => (
                            <div className='boxs' key={item.id}>
                                <div className='box boxItems'>
                                    <img src={item.cover} alt=''></img>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Category;