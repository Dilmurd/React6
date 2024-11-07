import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import "./Deliver.scss"

function Deliver() {
  return (
    <main>
        <section className="ship">
            <div className="container">
                <div className="ship__top">
                    <div className="ship__left">
                        <div className='mains'>
                            <p className='title'>Главная</p>
                            <MdArrowForwardIos/>
                            <p className='subtitle'>Доставка</p>
                        </div>
                        <p className='desc'>Доставка и оплата</p>
                    </div>
                    <div className="ship__right">
                        <div className='ship__main'>
                        <p className="ship__title">Доставка</p>
                        <li className='ship__desc'>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель</li>
                        </div>
                        <div className='ship__main'>
                        <li className="ship__title">Курьерская доставка</li>
                        <li className='ship__desc'>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель</li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default React.memo(Deliver) 