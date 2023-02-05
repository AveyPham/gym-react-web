import React from 'react'
import '../../styles/testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// image
import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'


// import required modules
import { EffectCards } from "swiper";

export default function Testimonials() {
  return (
    <section>
        <div className='container slider'>
            <h2 className='section__title'>Testimonials</h2>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slide__item'>
                        <div className='slide__img-01'>
                            <img src={avatar01}/>
                            <h4>Jesica Fernades</h4>
                            <p>Personal trainers develop safe, effective exercise programs for people looking to achieve and maintain fitness goals. Personal trainers can also assist their clients in nutrition with the proper education. </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slide__item'>
                        <div className='slide__img-02'>
                            <img src={avatar02}/>
                            <h4>Jesica Fernades</h4>
                            <p>Personal trainers develop safe, effective exercise programs for people looking to achieve and maintain fitness goals. Personal trainers can also assist their clients in nutrition with the proper education. </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='slide__item'>
                        <div className='slide__img-03'>
                            <img src={avatar01}/>
                            <h4>Jesica Fernades</h4>
                            <p>Personal trainers develop safe, effective exercise programs for people looking to achieve and maintain fitness goals. Personal trainers can also assist their clients in nutrition with the proper education. </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  );
}
