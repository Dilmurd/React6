import React from 'react'
import "./Sale.scss"
import swiper from "../../assets/Group 13.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
            <img src={swiper} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={swiper} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={swiper} alt="" />
        </SwiperSlide>
      </Swiper>        
        </div>
            </section>
            </main>
    )
}


export default Sale