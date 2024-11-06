import React from 'react'
import map from "../../assets/map1.png"
import "./Map.scss"

function Map() {
  return (
    <main>
        <section className='map'>
            <div className="container__lg">
                <div className="map__img">
                <img src={map} alt="" />

                </div>
            </div>
        </section>
    </main>
  )
}

export default Map