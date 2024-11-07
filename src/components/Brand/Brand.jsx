import React from 'react'
import "./Brand.scss"
import brand from "../../assets/brand1.png"
import divi from "../../assets/divinary.png"
import odeon from "../../assets/odeon.png"

function Brand() {
    return (
        <main>
            <section className="brand">
                <div className="container">
                    <div className="brand__top">
                        <p>Только проверенные бренды</p>
                    </div>
                    <div className="brand__wrapper">
                        <div className="brand__card">
                            <img src={brand} alt="" />
                        </div>
                        <div className="brand__card">
                            <img src={divi} alt="" />
                        </div>
                        <div className="brand__card">
                            <img src={odeon} alt="" />
                        </div>
                        <div className="brand__card">
                            <img src={divi} alt="" />
                        </div>
                        <div className="brand__card">
                            <img src={brand} alt="" />
                        </div>
                        <div className="brand__card">
                            <img src={odeon} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
  )
}

export default React.memo(Brand) 