import React from 'react'
import { useRef } from 'react'
import axios from '../../../api'
import "./CreateProduct.scss"

function CreateProduct() {
    const title = useRef(null)
    const price = useRef(null)
    const url = useRef(null)
    const handleCreateProduct = (e) =>{
        e.preventDefault()
        let newProduct = {
            title:title.current.value,
            url: url.current.value,
            price: price.current.value,
        }
        console.log(newProduct);
        axios
        .post("/products",newProduct)
        .then(res => {
            console.log(res);
            title.current.value = ""
            url.current.value = ""
            price.current.value = ""
            
        })
        .catch(err => console.log(err)) 

    }
  return (
    <div className='create'>
        <h2>Create product</h2>
        <form onSubmit={handleCreateProduct} action="" className='inputs'>
            <div className='input'>
            <p className='title'>Title</p>
            <input ref={title} className='inp' type="text" />
            </div>
            <div className='input'>
                <p className='title'>Price</p>
            <input ref={price} className='inp' type="text"  />
            </div>
            <div className='input'>
            <p className='title'>Img Url</p>
            <input ref={url} className='inp' type="text" />
            </div>
            <button className='btn'>Create</button>
        </form>
    </div>
  )
}

export default CreateProduct