import React from 'react'
import logo from "../../assets/Vector.png"
import cart from "../../assets/carta.png"
import "./Footer.scss"


const foot = ["О компании","Доставка и оплата","Возврат","Гарантии","Контакты","Блог"]

function Footer() {
    const items =  foot?.map((i,inx)=>(
        <li key={inx} className="footer__item">
            <span>{i}</span>
        </li>
            ))
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <div>
                        <img src={logo} alt="" />
                        <p>NORNLIGHT</p>
                    </div>
                    <p className='phone'>8 (800) 890-46-56</p>
                    <img src={cart} alt="" />
                    <p className='desc'>Политика конфидециальности</p>
                    <p className='desc'>Пользовательское соглашение</p>
                    <div>
                    <button>VK</button>
                    <button>VK</button>
                    <button>VK</button>
                    </div>
                </div>
                <div className="footer__links">
                    <p className="footer__title">Покупателям</p>
                    <ul className="footer__collection">{items}</ul>
                </div>
                <div className="footer__links">
                    <p className="footer__title">Товары</p>
                <ul className="footer__collection">{items}</ul>
                </div>
                <div className="footer__links">
                <ul className="footer__collection">{items}</ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer