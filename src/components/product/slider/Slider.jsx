import React from 'react';
import './slider.css';
// import productbanner from "../src/assets/productbanner.png";


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
      id: 1,
    //   image: productbanner,
      title: "kingsley Paul",
      subtitle: "March, 2023",
      comment:
        "I will give the website a 5 star rating because of its seamless user experience and accurate functionalities. I was able to quickly search for the book of my choice and gain access to the pdf document almost immediately without much waste of time and difficulties. I will hereby recommend the app as one of the most trusted app for all comic lovers all over the world. 👍",
    },
    {
      id: 2,
    //   image: productbanner,
      title: "Peace Patience",
      subtitle: "April, 2023",
      comment:
      "I will give the website a 5 star rating because of its seamless user experience and accurate functionalities. I was able to quickly search for the book of my choice and gain access to the pdf document almost immediately without much waste of time and difficulties. I will hereby recommend the app as one of the most trusted app for all comic lovers all over the world. 👍",
    },
  ];
  

const Slider = () => {
  return (
    <section className="testimonials ">
    <div className="cover">
      <h2 className="section__title">Community Reviews</h2>
      <div className="yellow_box"></div>
    </div>  
    

    <Swiper className="testimonials__container grid"
    modules={[ Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    loop = {true}
    grabCursor = {true}
    pagination={{ clickable: true }}
    >
      {data.map(({id, image, title, subtitle, comment}) => {
        return(
          <SwiperSlide className="testimonial__item">
            <div className="thumb">
              <img src={image} alt="" />
            </div>
            <h3 className="testimonials__title">{title}</h3>
            <span className="subtitle">{subtitle}</span>
            <div className="comment">{comment}</div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  </section>
  )
}

export default Slider