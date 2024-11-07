import React from 'react'
import "./Company.scss"
import { MdKeyboardArrowRight } from "react-icons/md";

function Company() {
  return (
    <main>
        <section className='comp'>
            <div className="container">
                <div className="comp__wrapper">
                    <div className="comp__first">
                        <div>
                            <p>Главная</p>
                            <MdKeyboardArrowRight/>
                            <p>Kомпании</p>
                        </div>
                        <p className='comp__title'>Kомпании</p>
                        <div className="comp__wrapp">
                            <div className="comp__card">
                                <p className='comp__subtitle'>170+ </p>
                                <p className='comp__desc'>Товаров</p>
                            </div>
                            <div className="comp__card">
                                <p className='comp__subtitle'>170+ </p>
                                <p className='comp__desc'>Товаров</p>
                            </div>
                            <div className="comp__card">
                                <p className='comp__subtitle'>170+ </p>
                                <p className='comp__desc'>Товаров</p>
                            </div>
                        </div>
                    </div>
                    <div className="comp__sec">
                        <div>
                            <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.</p>
                        </div>
                        <div>
                            <p>Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                        </div>
                        <div>
                            <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.</p>
                        </div>
                        <div>
                            <p>Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default React.memo(Company) 