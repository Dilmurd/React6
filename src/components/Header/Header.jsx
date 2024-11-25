import React from 'react'
import "./Header.scss"
import logo from "../../assets/Vector.png"
import cat from "../../assets/Vector (1).svg"
import { FaSearch } from 'react-icons/fa'
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink } from 'react-router-dom'
import { CiLock } from "react-icons/ci";

function Header() {
  return (
    <header>
        <div className="container">
            <nav className='navbar__bt'>
                <div className="navbar__logo">
                    <img src={logo} alt="" />
                    <Link className='navbar__title' to={"/"}>NORNLIGHT</Link>
                    <div className='cat'>
                        <img src={cat} alt="" />
                        <p>Каталог</p>
                    </div>
                </div>
                <form action="" className='navbar__inp'>
                    <input type="search" placeholder='Поиск по товарам' />
                    <FaSearch/>
                </form>
                <div className="navbar__icons">
                    <div>
                        <Link className='link' to={"/wishlist"}><CiHeart className='hi'/></Link>
                        <Link className='link2' to={"/wishlist"}>избранная</Link>

                    </div>
                    <div>
                        <Link className='link' to={"/admin"}>
                        <CiLock className='hi'/>
                        </Link>
                        <Link className='link2' to={"/admin"}>Login</Link>
                    </div>
                    <div>
                        <Link className='link' to={"/cart"}><FiShoppingCart className='hi'/></Link>
                        <Link className='link2' to={"/cart"}>Корзина</Link>
                        <p></p>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default React.memo(Header) 