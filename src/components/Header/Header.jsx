import React from 'react'
import "./Header.scss"
import logo from "../../assets/Vector.png"
import cat from "../../assets/Vector (1).svg"
import { FaSearch,FaSignal } from 'react-icons/fa'
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <header>
        <div className="container">
            <nav className='navbar__bt'>
                <div className="navbar__logo">
                    <img src={logo} alt="" />
                    <h1>NORNLIGHT</h1>
                    <div className='cat'>
                        <img src={cat} alt="" />
                        <p>Каталог</p>
                    </div>
                </div>
                <div className="navbar__inp">
                    <input type="search" placeholder='Поиск по товарам' />
                    <FaSearch/>
                </div>
                <div className="navbar__icons">
                    <div>
                        <CiHeart/>
                        <p>Избранное</p>
                    </div>
                    <div>
                        <FaSignal/>
                        <p>Сравнение</p>
                    </div>
                    <div>
                        <FiShoppingCart/>
                        <p>Корзина</p>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header