import React from 'react'
import map from "../../assets/map1.png"
import "./Map.scss"

function Map() {
  return (
    <main>
        <section className='map'>
            <div className="container__lg">
                <div className="map__img">
                {/* <img src={map} alt="" /> */}
                <iframe width="1800" height="672" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1800&amp;height=672&amp;hl=en&amp;q=uzbekistan+(contacts)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                </div>
            </div>
        </section>
    </main>
  )
}

export default React.memo(Map) 