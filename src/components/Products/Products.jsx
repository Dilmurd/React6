import React from 'react'
import {useFetch} from "../../hooks/useFetch"
import "./Products.scss"


function Products() {
        const {data} = useFetch("products")
        
        const items = data?.map((product) => (
            <div key={product.id}  className='ok'>
                <div className='pro__card'>
                    <img src={product.url} alt="" className='pro__img'/>    
                </div>
                <div className='pro__text'>
                    <div className='pro'>
                        <h2 className='pro__title'>{product.title}</h2>
                            <strong className='pro__price'>{product.price}</strong>
                    </div>
                            <p className='pro__desc'>{product.desc}</p>
                    </div>
            </div>
        ))
  return (
    <section className='prod'>
    <div className="container">
        <div className="pro__toop">
            <p>Market</p>
        </div>
        <div className="pro__wrapper">
            {items}
        </div>
    </div>
</section>
  )
}

export default Products