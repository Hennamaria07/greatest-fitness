import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serviceData } from "../data/data";



const MyCarousel = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2411,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 2410,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1068,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div>
    <Slider {...settings}>
      {serviceData && serviceData.map((data, index) => (
        <div key={index} className="col text-center text-gray-800 max-w-full md:max-w-80 hover:max-w-96 cursor-pointer sm:h-96 h-full py-12 px-9 bg-gray-200 rounded-xxl my-carousel-item">
        <img src={data.icon} alt="service icon" className="mx-auto pb-2"/>
        <h3 className='text-2xl font-semibold'>{data.title}</h3>
        <p className='text-sm leading-6 py-3'>{data.des}</p>
                   <div className="flex justify-center">
                   <button className='border-custom-green rounded-lg text-sm p-2 font-semibold text-custom-green'>Learn More</button>
                   </div>
                </div>
      ))}
    </Slider>
  </div>
);
};

export default MyCarousel;
