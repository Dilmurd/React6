import React from 'react'
import "./Top.scss"
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
      <div className="container">
        <nav className='navbar'>
          <ul className='navbar__collection'>
            <li className="navbar__item">
              <div className='page'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={"/garant"}>Garant</Link>
                <Link to={"/shipping"}>Shipping</Link>
              </div>
            </li>
          </ul>
          <div className="contact">
            <p>8 (800) 890-46-56</p>
            <p>Заказать звонок</p>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(Header) 