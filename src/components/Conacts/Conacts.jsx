import React from 'react'
import "./Conacts.scss"
import { IoIosArrowForward } from "react-icons/io";


function Conacts() {
  return (
    <main>
        <section className='conact'>
            <div className="container">
                <div className="contact__top">
                    <div className="contact__left">
                        <div className='main'>
                            <p>Главная</p>
                            <IoIosArrowForward/>
                            <p>Контакты</p>
                        </div>
                        <p className='title'>Контакты</p>
                    </div>
                    <div className="contact__right">
                        <p className='num'>8 (800) 890-46-56</p>
                        <p className='inf'>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину
                        Телефоны: </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Conacts