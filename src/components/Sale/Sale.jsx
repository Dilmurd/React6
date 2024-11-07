import React from 'react'
import "./Sale.scss"
import swiper from "../../assets/Group 13.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import hero from "../../assets/hero.imgg.png"

function Sale() {
    return (
        <main>
            <section className='hero'>
        <div className="container__lg">
        <Swiper
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        
        modules={[Autoplay, Pagination, Navigation]}
        >
        <SwiperSlide>
            <div className="hero__wrapper">
                <div className="hero__text">
                    <p className='hero__title'>Скидка 15% на все подвесные светильники </p>
                    <button className='hero__btn'>до 5 февраля</button>
                </div>
                <div className="hero__img">
                    <img src={hero} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero__wrapper">
                <div className="hero__text">
                    <p className='hero__title'>Скидка 15% на все подвесные светильники </p>
                    <button className='hero__btn'>до 5 февраля</button>
                </div>
                <div className="hero__img">
                    <img src={hero} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero__wrapper">
                <div className="hero__text">
                    <p className='hero__title'>Скидка 15% на все подвесные светильники </p>
                    <button className='hero__btn'>до 5 февраля</button>
                </div>
                <div className="hero__img">
                    <img src={hero} alt="" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>        
        </div>
            </section>
            </main>
    )
}


export default React.memo(Sale) 