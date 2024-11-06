import React from 'react'
import "./Catalog.scss"
import { HiArrowLongRight } from "react-icons/hi2";
import lustra from "../../assets/lustra.png"
import lamp from "../../assets/lamp.png"
import toy from "../../assets/oyinchoq.png"
import light from "../../assets/lighter.png"
import svetilnik from "../../assets/svetilnik.png"
import lupa from "../../assets/lupa.png"

function Catalog() {
  return (
    <main>
        <section className="catalog">
            <div className="container">
                <div className="catalog__top">
                    <div className='catalog__titles'>
                        <p>Каталог</p>
                    </div>
                    <div className='btns'>
                        <p>Весь каталог</p>                        
                        <HiArrowLongRight/>
                    </div>
                </div>
                <div className="catalog__wrapper">
                    <div className="catalog__card">
                        <div>
                        <p>Люстры</p>
                        <p className='catalog__price'>От 540₽</p>
                        </div>
                        <img src={lustra} alt="" />
                    </div>
                    <div className="catalog__card">
                        <div>
                        <p>Светильники</p>
                        <p className='catalog__price'>От 540₽</p>
                        </div>
                        <img src={lamp} alt="" />
                    </div>
                    <div className="catalog__card">
                        <div>
                        <p>Бра</p>
                        <p className='catalog__price'>От 540₽</p>
                        </div>
                        <img src={toy} alt="" />
                    </div>
                    <div className="catalog__card">
                        <div>
                        <p>Торшеры</p>
                        <p className='catalog__price'>От 540₽</p>
                        </div>
                        <img src={light} alt="" />
                    </div>
                    <div className="catalog__card">
                        <div>
                        <p>Настольные лампы</p>
                        <p className='catalog__price'>От 540₽</p>
                        </div>
                        <img src={svetilnik} alt="" />
                    </div>
                    <div className="catalog__card">
                        <div>
                        <p>Споты</p>
                        <p className='catalog__price'>От 540₽</p>
                        </div>
                        <img src={lupa} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Catalog